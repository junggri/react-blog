import { Request, Response } from "express";
import googleReport from "../lib/googleReport";

import model from "../model/index.model";

interface Controller {
   getCsrf: (req: Request, res: Response) => void
   getGaCount: (req: Request, res: Response) => void
   saveComment: (req: Request, res: Response) => void
   getCommnet: (req: Request, res: Response) => void
   saveReply: (req: Request, res: Response) => void
}

let indexController: Controller = {
   async getCsrf(req, res) {
      res.status(200).json({ token: req.csrfToken() });
   },

   async getGaCount(req, res) {
      try {
         let data: any = await googleReport();
         res.status(200).json({ data: JSON.parse(data) });
      } catch (err) {
         console.log(err);
         res.status(404).json({ state: false });
      }
   },

   async getCommnet(req, res) {
      const result: any = await model.getComment();
      if (result.state) {
         res.status(200).json({ result: result.data });
      } else {
         res.status(404).json({ state: false });
      }
   },


   async saveComment(req, res) {
      try {
         const result: any = await model.saveComment(req.body.content, req.body.grp);
         result.state
            ? res.status(200).json({ state: true })
            : res.status(404).json({ state: false });
      } catch (e) {
         console.error(e);
      }
   },

   async saveReply(req, res) {
      const result: any = await model.saveReply(req.body.content, req.body.bn, req.body.grp, req.body.sorts, req.body.depth);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(404).json({ state: false });
   },
};

export default indexController;
