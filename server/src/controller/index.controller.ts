import { Request, Response } from "express";
import googleReport from "../lib/googleReport";

import model from "../model/index.model";
import phoneCertification from "../lib/phoneCertification";
import accessToken from "../lib/accessToken";

interface Controller {
   getCsrf: (req: Request, res: Response) => void
   getGaCount: (req: Request, res: Response) => void
   saveComment: (req: Request, res: Response) => void
   getComment: (req: Request, res: Response) => void
   saveReply: (req: Request, res: Response) => void
   deleteComment: (req: Request, res: Response) => void
   login: (req: Request, res: Response) => void
   setToken: (req: Request, res: Response) => void
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

   async getComment(req, res) {
      const result: any = await model.getComment(req.params.postid);
      if (result.state) {
         res.status(200).json({ result: result.data });
      } else {
         res.status(404).json({ state: false });
      }
   },


   async saveComment(req, res) {
      try {
         const result: any = await model.saveComment(req.body);
         result.state
            ? res.status(200).json({ state: true })
            : res.status(404).json({ state: false });
      } catch (e) {
         console.error(e);
      }
   },

   async saveReply(req, res) {
      const result: any = await model.saveReply(req.body);
      result.state
         ? res.status(200).json({ state: true, comment: result.data })
         : res.status(404).json({ state: false });
   },


   async deleteComment(req, res) {
      const result: any = await model.deleteComment(req.body);
      result.state
         ? res.status(200).json({ state: true })
         : res.status(200).json({ state: false });
   },

   async login(req: Request, res: Response) {
      const result = await model.login(req.body.data);
      let certification_num: number;
      process.env.NODE_ENV === "development"
         ? certification_num = 1
         : certification_num = phoneCertification();

      result
         ? res.status(200).json({ state: result, number: certification_num })
         : res.status(401).json({ state: true });
   },

   async setToken(req, res) {
      let token = accessToken();
      res.status(200).json({ token: token });
   },
};

export default indexController;
