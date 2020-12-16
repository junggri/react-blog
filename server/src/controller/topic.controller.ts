import {Request, Response} from "express";
import model from "../model/topic.model";
import {promises as fs} from "fs";
import path from "path";

interface Controller {
    getContentName(req: Request, res: Response): void;

    savePosts(req: Request, res: Response): void;

    getPostsFromTopicName(req: Request, res: Response): void

    getPostsFromPostsId(req: Request, res: Response): void

    makeNewTopic(req: Request, res: Response): void
}

let contentController: Controller = {
    getContentName: async (req, res) => {
        let result = await model.getAllPosts();
        res.status(200).json(result);
    },

    savePosts: async (req, res) => {
        let result: any = await model.savePosts(req.body);
        result.state
            ? res.status(200).json({state: true})
            : res.status(500).json({state: false});
    },

    getPostsFromTopicName: async (req, res) => {
        let result = await model.getDataFromParams(req.params.topic);
        res.status(200).json(result);
    },

    getPostsFromPostsId: async (req, res) => {
        let fileName = path.join(__dirname + "c/../../contents", `${req.params.postsId}.html`);
        try {
            let content = await fs.readFile(fileName, "utf-8");
            let result = await model.getPostFromPostId(req.params);
            res.status(200).json({
                content: content,
                result: result,
            });
        } catch (e) {
            console.error(e);
        }
    },

    makeNewTopic: async (rea, res) => {

    }
};

export default contentController;
