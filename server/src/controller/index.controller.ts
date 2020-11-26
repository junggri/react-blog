import { Request, Response, NextFunction } from "express";
import model from "../model/index.model";

interface Controller {
  getContent: (req: Request, res: Response) => void;
  saveContent: (req: Request, res: Response) => void;
}

let indexController: Controller = {
  getContent: async (req, res) => {
    let result = await model.getContents();
    res.status(200).json(result);
  },

  saveContent: async (req, res) => {
    let result: any = await model.saveContent(req.body);
    result.state ? res.status(200).json({ state: true }) : res.status(500).json({ state: false });
  },
};

export default indexController;
