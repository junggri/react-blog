import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.json({ asd: "asd" });
});

export default router;
