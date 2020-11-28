import { Request, Response } from "express";
import model from "../model/topic.model";

interface Controller {
  getAllTopics(req: Request, res: Response): void;

  saveContent(req: Request, res: Response): void;
}

let contentController: Controller = {
  getAllTopics: async (req, res) => {
    let result = await model.get_all_topics();
    res.status(200).json(result);
  },

  saveContent: async (req, res) => {
    let result: any = await model.save_content(req.body);
    result.state
      ? res.status(200).json({ state: true })
      : res.status(500).json({ state: false });
  },
};

export default contentController;
