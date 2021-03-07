import { Request, Response } from "express";
import path from "path";
import model from "../model/content.model";
import { uploadThumbnail } from "../lib/multer";
import { promises as fs } from "fs";

declare module "express-session" {
   interface Session {
      img: string[] | null
   }
}

function makePath<T>(folderName: T, fileName: T) {
   let _path = path.resolve(`../${folderName}`);
   const filePath = _path + `/${fileName}.html`;
   return { filePath: filePath, _path: _path };
}


interface Controller {

   // getTempPostFromId: (req: Request, res: Response) => void
   // getContentName(req: Request, res: Response): void;
   // savePosts(req: Request, res: Response): void;
   // modifyPost(req: Request, res: Response): void;
   // saveTempPost(req: Request, res: Response): void;
   // getTempPost(req: Request, res: Response): void;
   // getPostsFromTopicName(req: Request, res: Response): void
   // getPostsFromPostsId(req: Request, res: Response): void
   // makeNewTopic(req: Request, res: Response): void
   // getAllPostsItems(req: Request, res: Response): any
   // preloadAllPosts(req: Request, res: Response): any
   // deleteTopic(req: Request, res: Response): any
   // deleteTempPost(req: Request, res: Response): any
   // temporaryPost(req: Request, res: Response): any
   savePost(req: Request, res: Response): void
   saveTemporaryPost(req: Request, res: Response): void
   updatePost(req: Request, res: Response): void
   deleteTemporaryPostAndSavePost(req: Request, res: Response): void
   getAllPosts(req: Request, res: Response): void
   getTemporaryPost(req: Request, res: Response): void
   getPost(req: Request, res: Response): void
   getTopicAndTemporaryPost(req: Request, res: Response): void
   saveThumbnail(req: Request, res: Response): any
   createNewTopic(req: Request, res: Response): any
   deletePost(req: Request, res: Response): void
   deleteTemporaryPost(req: Request, res: Response): void
   deleteTopic(req: Request, res: Response): void
}


let contentController: Controller = {
   getAllPosts: async (req, res) => {
      const result = await model.getAllPosts();
      res.status(200).json(result);
   },
   async getTemporaryPost(req, res) {
      const _path = makePath<string>("temporary-storage", req.params.uid);
      const content: string = await fs.readFile(_path.filePath, "utf8");
      const result: any = await model.getTemporaryPost(req.params.uid);
      res.status(200).json({ content: content, ...result[0] });
   },

   async getPost(req, res) {
      const { uid, topic } = req.params;
      const _path = makePath<string>("contents", uid);
      const content = await fs.readFile(_path.filePath, "utf8");
      const result: any = await model.getPost(topic, uid);
      res.status(200).json({ content: content, ...result[0] });
   },

   async getTopicAndTemporaryPost(req, res) {
      const data = await model.getTopicAndTemporaryPost();
      res.status(200).json({ result: data });
   },

   async saveThumbnail(req: Request, res: Response) {
      if (req.session.img?.length) {
         await fs.unlink(path.resolve(`../thumbnail/${req.session.img[0]}`));
      }
      uploadThumbnail(req, res, (err: any) => {
         res.status(200).json({ state: true, filename: req.file.filename });
         if (err) {
            console.error(err);
            res.status(404).json({ state: false });
         }
      });
   },

   async savePost(req, res) {
      const result = await model.savePost(req.body);
      if (result.state) res.status(200).json({ state: true });
   },

   async saveTemporaryPost(req, res) {
      const result = await model.saveTemporaryPost(req.body.data, req.body.uid);
      if (result?.state) res.status(200).json({ state: true });
   },

   async deleteTemporaryPostAndSavePost(req, res) {
      const result = await model.deleteTemporaryPostAndSavePost(req.params, req.body);
      if (result?.state) res.status(200).json({ state: true });
   },

   async createNewTopic(req, res) {
      await model.createNewTopic(req.body.topic);
      res.status(200).json({ state: true });
   },

   async updatePost(req, res) {
      const result = await model.updatePost(req.params, req.body);
      if (result.state) res.status(200).json({ state: true });
   },

   async deletePost(req, res) {
      let _path = makePath("contents", req.body.uid);
      let result: any = await model.deletePost(req.body);
      if (result.state) {
         await fs.unlink(_path.filePath);
         res.status(200).json({ state: true });
      } else {
         res.status(404).json({ state: false });
      }
   },

   async deleteTemporaryPost(req, res) {
      const result: any = await model.deleteTemporaryPost(req.body.postid);
      const _path = makePath<string>("temporary-storage", req.body.postid);
      if (result.state) {
         await fs.unlink(_path.filePath);
         res.status(200).json({ state: true });
      } else {
         res.status(400).json({ state: false });
      }
   },

   async deleteTopic(req, res) {
      const result: any = await model.deleteTopic(req.body.topic);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(400).json({ state: false });
   },
//////////////////////////
//    getAllPostsItems: async (req, res) => {
//       const result: any = await model.getAllPostsItems();
//       res.status(200).json(result);
//    },

   // preloadAllPosts: async (req, res) => {
   //    const result: any = await model.getAllPostsItems();
   //    res.status(200).json(result);
   // },

   // getContentName: async (req, res) => {
   //    let result: any = await model.getAllTopic();
   //    if (result.state) {
   //       res.status(200).json(result.data);
   //    } else {
   //       res.status(404).json({ state: false });
   //    }
   // },

   // savePosts: async (req, res) => {
   //    let result: any = await model.savePosts(req.body);
   //    req.session.img = null;
   //    result.state
   //       ? res.status(200).json({ state: true })
   //       : res.status(500).json({ state: false });
   //
   // },

   // async modifyPost(req: Request, res: Response) {
   //    let _path = makePath("contents", req.body.uid);
   //    let result: any = await model.modify(req.body);
   //    if (result.state) {
   //       await fs.writeFile(_path.filePath, req.body.data.content, "utf8");
   //       res.status(200).json({ state: true });
   //    } else {
   //       res.status(500).json({ state: false });
   //    }
   // },


   // saveTempPost: async (req: Request, res: Response) => {
   //    let _path = makePath("temporary-storage", req.body.uid);
   //    let result: any = await model.saveTempPost(req.body);
   //    await fs.unlink(_path.filePath);
   //    result.state
   //       ? res.status(200).json({ state: true })
   //       : res.status(500).json({ state: false });
   // },
   //
   // temporaryPost: async (req: Request, res: Response) => {
   //    let result: any = await model.temporaryPosts(req.body);
   //    result.state
   //       ? res.status(200).json({ state: true })
   //       : res.status(404).json({ state: false });
   // },

   // getTempPost: async (req: Request, res: Response) => {
   //    let result: any = await model.getTemporaryPost();
   //    result.state
   //       ? res.status(200).json(result.data)
   //       : res.status(404).json({ state: false });
   //
   // },

   // async getTempPostFromId(req: Request, res: Response) {
   //    const _path = makePath("temporary-storage", req.params.tempId);
   //    const data = await fs.readFile(_path.filePath, "utf-8");
   //    res.status(200).json(data);
   // },

   // getPostsFromTopicName: async (req, res) => {
   //    let result: any = await model.getDataFromParams(decodeURIComponent(req.params.topic));
   //    result.state
   //       ? res.status(200).json(result.data)
   //       : res.status(404).json({ state: false });
   // },

   // getPostsFromPostsId: async (req, res) => {
   //    const _path = makePath("contents", req.params.postsId);
   //    const { topic, postsId } = req.params;
   //    let result: any = await model.getPostFromPostId(decodeURIComponent(topic), postsId);
   //    if (result.state) {
   //       let content = await fs.readFile(_path.filePath, "utf-8");
   //       res.status(200).json({ content: content, result: result.data });
   //    } else {
   //       res.status(404).json({ state: false });
   //    }
   // },

   // makeNewTopic: async (req, res) => {
   //    let result: any = await model.CreateNewTopic(req.body.newTopic);
   //    result.state
   //       ? res.status(200).json({ state: true })
   //       : res.status(404).json({ state: false });
   // },


   // deleteTopic: async (req, res) => {
   //    let result: any = await model.deleteTopic(req.body.topicName);
   //    result.state
   //       ? res.status(200).json({ state: true })
   //       : res.status(404).json({ state: false });
   // },


   // async deleteTempPost(req: Request, res: Response) {
   //    let _path = makePath("temporary-storage", req.body.uid);
   //    let result: any = await model.deleteTempPost(req.body);
   //    if (result.state) {
   //       await fs.unlink(_path.filePath);
   //       res.status(200).json({ state: true });
   //    } else {
   //       res.status(404).json({ state: false });
   //    }
   // },

};

export default contentController;
