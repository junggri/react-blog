import { Request, Response } from "express";
import model from "../model/topic.model";

interface Controller {
   getContentName(req: Request, res: Response): void;
   savePosts(req: Request, res: Response): void;
   getPostsFromTopicName(req: Request, res: Response): void
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
};

export default contentController;
