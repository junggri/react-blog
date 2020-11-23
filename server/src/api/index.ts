import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/cookie", (req: Request, res: Response): void => {
  res.cookie("token", "ASdasd", { httpOnly: true });
  res.json({ token: "asd" });
});

router.get("/cookies", (req, res) => {
  res.cookie("test", "asd");
  res.json(req.csrfToken());
});

router.post("/posts", (req, res) => {
  console.log(2);
  res.json("2");
});
export default router;
