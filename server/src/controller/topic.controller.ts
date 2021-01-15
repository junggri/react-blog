import { Request, Response } from "express";
import model from "../model/topic.model";
import { promises as fs } from "fs";
import path from "path";


function makePath(folderName: string, fileName: string) {
   let _path = process.env.NODE_ENV === "development"
      ? `/../../../${folderName}`
      : `/../../../../../${folderName}`;
   const filePath = path.join(__dirname, _path, `${fileName}.html`);
   return { filePath: filePath, _path: _path };
}

interface Controller {
   deletePost: (req: Request, res: Response) => void
   getContentName(req: Request, res: Response): void;
   savePosts(req: Request, res: Response): void;
   saveTempPost(req: Request, res: Response): void;
   getTempPost(req: Request, res: Response): void;
   getPostsFromTopicName(req: Request, res: Response): void
   getPostsFromPostsId(req: Request, res: Response): void
   makeNewTopic(req: Request, res: Response): void
   getAllPostsItems(req: Request, Res: Response): any
   deleteTopic(req: Request, Res: Response): any
   temporaryPost(req: Request, res: Response): any
   getTempPostFromId(req: Request, res: Response): void
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

   saveTempPost: async (req: Request, res: Response) => {
      let _path = makePath("temporary-storage", req.body.uid);
      let result = await model.saveTempPost(req.body);
      await fs.unlink(_path.filePath);
      result !== undefined && result.state
         ? res.status(200).json({ state: true })
         : res.status(500).json({ state: false });
   },

   temporaryPost: async (req: Request, res: Response) => {
      let result = await model.temporaryPosts(req.body);
      result
         ? res.status(200).json({ state: true })
         : res.status(404).json({ state: false });
   },

   getTempPost: async (req: Request, res: Response) => {
      let result = await model.getTemporaryPost();
      res.status(200).json(result);
   },

   async getTempPostFromId(req: Request, res: Response) {
      const _path = makePath("temporary-storage", req.params.tempId);
      const data = await fs.readFile(_path.filePath, "utf-8");
      res.status(200).json(data);
   },

   getPostsFromTopicName: async (req, res) => {
      let result = await model.getDataFromParams(req.params.topic);
      res.status(200).json(result);
   },

   getPostsFromPostsId: async (req, res) => {
      const _path = makePath("contents", req.params.postsId);
      const { topic, postsId } = req.params;
      try {
         let result = await model.getPostFromPostId(topic, postsId);
         let content = await fs.readFile(_path.filePath, "utf-8");
         res.status(200).json({ content: content, result: result });
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
      let _path = makePath("contents", req.body.uid);
      try {
         await model.deletePost(req.body);
         await fs.unlink(_path.filePath);
         res.status(200).json({ state: true });
      } catch (e) {
         console.error(e);
      }
   },


};

export default contentController;
