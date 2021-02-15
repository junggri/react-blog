import { Request, Response } from "express";
import googleReport from "../lib/googleReport";

import model from "../model/index.model";

interface Controller {

   getCsrf: (req: Request, res: Response) => void
   getGaCount: (req: Request, res: Response) => void
   saveComment: (req: Request, res: Response) => void
   getCommnet: (req: Request, res: Response) => void
   saveReply: (req: Request, res: Response) => void
   deleteComment: (req: Request, res: Response) => void
}

const indexController: Controller = {
   async getCsrf(req, res) {
      res.status(200).json({ token: req.csrfToken() });
   },

   async getGaCount(req, res) {
      try {
         const data: any = await googleReport();
         res.status(200).json({ data: JSON.parse(data) });
      } catch (err) {
         console.log(err);
         res.status(404).json({ state: false });
      }
   },

   async getCommnet(req, res) {
      const result: any = await model.getComment(req.params.postid);
      if (result.state) {
         res.status(200).json({ result: result.data });
      } else {
         res.status(404).json({ state: false });
      }
   },


   async saveComment(req, res) {
      const { postname, content, grp, topic, postid, user, pwd } = req.body;
      try {
         const result: any = await model.saveComment(postname, content, grp, topic, postid, user, pwd);
         result.state
            ? res.status(200).json({ state: true })
            : res.status(404).json({ state: false });
      } catch (e) {
         console.error(e);
      }
   },

   async saveReply(req, res) {
      const { content, bn, grp, sorts, depth, topic, postid, user, pwd } = req.body;
      const result: any = await model.saveReply(content, bn, grp, sorts, depth, topic, postid, user, pwd);
      result.state
         ? res.status(200).json({ state: true, comment: result.data })
         : res.status(404).json({ state: false });
   },

   async deleteComment(req, res) {
      const { writer, pwd, number, topic, postId, deleteArr } = req.body;
      const result: any = await model.deleteComment(writer, pwd, number, topic, postId, deleteArr);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(200).json({ state: false });
   },
};

export default indexController;
