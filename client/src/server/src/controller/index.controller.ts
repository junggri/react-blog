import { Request, Response } from "express";
import googleReport from "../lib/googleReport";

interface Controller {
   getCsrf: (req: Request, res: Response) => void
   getGaCount: (req: Request, res: Response) => void
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
};

export default indexController;
