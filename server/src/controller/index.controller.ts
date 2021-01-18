import { Request, Response } from "express";
import googleReport from "../lib/googleReport";

interface Controller {
   getCsrf: (req: Request, res: Response) => void
   googleCount: (req: Request, res: Response) => void
}

let indexController: Controller = {
   async getCsrf(req, res) {
      res.status(200).json({ token: req.csrfToken() });
   },

   googleCount(req, res) {
      googleReport(res);
   },
};

export default indexController;
