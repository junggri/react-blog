import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

router.get("/cookie", (req: Request, res: Response): void => {
  res.cookie("token", "Asdasdasd");
  res.end();
});

export default router;
