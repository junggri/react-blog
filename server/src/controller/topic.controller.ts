import { Request, Response } from "express";
import model from "../model/topic.model";
import { promises as fs } from "fs";
import path from "path";


interface Controller {
   deletePost: (req: Request, res: Response) => void

   getContentName(req: Request, res: Response): void;

   savePosts(req: Request, res: Response): void;

   getPostsFromTopicName(req: Request, res: Response): void

   getPostsFromPostsId(req: Request, res: Response): void

   makeNewTopic(req: Request, res: Response): void

   getAllPostsItems(req: Request, Res: Response): any

   deleteTopic(req: Request, Res: Response): any
}

let contentController: Controller = {
   getContentName: async (req, res) => {
      let result = await model.getAllPosts();
      res.status(200).json(result);
   },

   savePosts: async (req, res) => {
      let result: any = await model.savePosts(req.body);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(500).json({ state: false });
   },

   getPostsFromTopicName: async (req, res) => {
      let result = await model.getDataFromParams(req.params.topic);
      res.status(200).json(result);
   },

   getPostsFromPostsId: async (req, res) => {
      let fileName: string;
      const { topic, postsId } = req.params;
      process.env.NODE_ENV === "development"
         ? fileName = path.join(__dirname + "/../../contents", `${req.params.postsId}.html`)
         : fileName = path.join(__dirname + "/../../../../contents", `${req.params.postsId}.html`);
      try {
         let result = await model.getPostFromPostId(topic, postsId);
         let content = await fs.readFile(fileName, "utf-8");
         res.status(200).json({
            content: content,
            result: result,
         });
      } catch (e) {
         console.error(e);
      }
   },

   makeNewTopic: async (req, res) => {
      await model.CreateNewTopic(req.body.newTopic);
      res.status(200).json({ state: true });
   },

   getAllPostsItems: async (req, res) => {
      const result = await model.getAllPostsItems();
      res.status(200).json(result);
   },

   deleteTopic: async (req, res) => {
      await model.deleteTopic(req.body.topicName);
      res.status(200).json({ state: true });
   },

   deletePost: async (req, res) => {
      let reuslt = await model.deletePost(req.body);
      res.status(200).json({ state: true });
   },

};

export default contentController;
