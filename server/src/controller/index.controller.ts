import { Request, Response, NextFunction } from "express";
import model from "../model/index.model";

interface Controller {
  getContent: (req: Request, res: Response) => void;
}

let indexController: Controller = {
  getContent: async (req, res) => {
    let result = await model.getContents();
    res.status(200).json(result);
  },
};

export default indexController;
