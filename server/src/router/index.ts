import express, { Request, Response, NextFunction } from "express";
import Controller from "../controller/index.controller";
const router = express.Router();

router.get("/contents", Controller.getContent);

router.post("/contentsd", (req, res) => {
  res.json({ token: "asd" });
});

router.get("/cookie", (req: Request, res: Response): void => {
  res.cookie("token", "ASdasd", { httpOnly: true });
  res.json({ token: "asd" });
});

router.get("/cookies", (req, res) => {
  res.cookie("test", "asd");
  res.json(req.csrfToken());
});

router.post("/posts", (req, res) => {
  res.json("2");
});
export default router;
