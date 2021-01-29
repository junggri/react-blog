import { Request, Response } from "express";
import model from "../model/topic.model";
import { promises as fs } from "fs";
import path from "path";


function makePath(folderName: string, fileName: string) {
   let _path = path.resolve(`../${folderName}`);
   const filePath = _path + `/${fileName}.html`;
   return { filePath: filePath, _path: _path };
}

interface Controller {
   deletePost: (req: Request, res: Response) => void
   getContentName(req: Request, res: Response): void;
   savePosts(req: Request, res: Response): void;
   modifyPost(req: Request, res: Response): void;
   saveTempPost(req: Request, res: Response): void;
   getTempPost(req: Request, res: Response): void;
   getPostsFromTopicName(req: Request, res: Response): void
   getPostsFromPostsId(req: Request, res: Response): void
   makeNewTopic(req: Request, res: Response): void
   getAllPostsItems(req: Request, res: Response): any
   deleteTopic(req: Request, res: Response): any
   deleteTempPost(req: Request, res: Response): any
   temporaryPost(req: Request, res: Response): any
   getTempPostFromId(req: Request, res: Response): void
}

let contentController: Controller = {
   getContentName: async (req, res) => {
      let result: any = await model.getAllTopic();
      if (result.state) {
         res.status(200).json(result.data);
      } else {
         res.status(404).json({ state: false });
      }
   },

   savePosts: async (req, res) => {
      let result: any = await model.savePosts(req.body);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(500).json({ state: false });

   },

   async modifyPost(req: Request, res: Response) {
      let _path = makePath("contents", req.body.uid);
      let result: any = await model.modify(req.body);
      if (result.state) {
         await fs.writeFile(_path.filePath, req.body.data.content, "utf8");
         res.status(200).json({ state: true });
      } else {
         res.status(500).json({ state: false });
      }
   },

   saveTempPost: async (req: Request, res: Response) => {
      let _path = makePath("temporary-storage", req.body.uid);
      let result: any = await model.saveTempPost(req.body);
      await fs.unlink(_path.filePath);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(500).json({ state: false });
   },

   temporaryPost: async (req: Request, res: Response) => {
      let result: any = await model.temporaryPosts(req.body);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(404).json({ state: false });
   },

   getTempPost: async (req: Request, res: Response) => {
      let result: any = await model.getTemporaryPost();
      result.state
         ? res.status(200).json(result.data)
         : res.status(404).json({ state: false });

   },

   async getTempPostFromId(req: Request, res: Response) {
      const _path = makePath("temporary-storage", req.params.tempId);
      const data = await fs.readFile(_path.filePath, "utf-8");
      res.status(200).json(data);
   },

   getPostsFromTopicName: async (req, res) => {
      let result: any = await model.getDataFromParams(decodeURIComponent(req.params.topic));
      result.state
         ? res.status(200).json(result.data)
         : res.status(404).json({ state: false });
   },

   getPostsFromPostsId: async (req, res) => {
      const _path = makePath("contents", req.params.postsId);
      const { topic, postsId } = req.params;
      let result: any = await model.getPostFromPostId(topic, postsId);
      if (result.state) {
         let content = await fs.readFile(_path.filePath, "utf-8");
         res.status(200).json({ content: content, result: result.data });
      } else {
         res.status(404).json({ state: false });
      }
   },

   makeNewTopic: async (req, res) => {
      let result: any = await model.CreateNewTopic(req.body.newTopic);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(404).json({ state: false });
   },

   getAllPostsItems: async (req, res) => {
      const result = await model.getAllPostsItems();
      res.status(200).json(result);
   },

   deleteTopic: async (req, res) => {
      let result: any = await model.deleteTopic(req.body.topicName);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(404).json({ state: false });
   },

   deletePost: async (req, res) => {
      let _path = makePath("contents", req.body.uid);
      let result: any = await model.deletePost(req.body);
      if (result.state) {
         await fs.unlink(_path.filePath);
         res.status(200).json({ state: true });
      } else {
         res.status(404).json({ state: false });
      }
   },

   async deleteTempPost(req: Request, res: Response) {
      let _path = makePath("temporary-storage", req.body.uid);
      let result: any = await model.deleteTempPost(req.body);
      if (result.state) {
         await fs.unlink(_path.filePath);
         res.status(200).json({ state: true });
      } else {
         res.status(404).json({ state: false });
      }
   },

};

export default contentController;
