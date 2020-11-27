import express, { Request, Response, NextFunction } from "express";
import Controller from "../controller/index.controller";
import path from "path";

const router = express.Router();

router.get("/cookies", (req, res) => {
  res.cookie("test", "asd");
  res.json(req.csrfToken());
});

router.post("/posts", (req, res) => {
  res.json("2");
});

router.get("/test", (req, res) => {
  // res.sendFile(path.join(__dirname + "/../../contents", "9776d40b-5e03-4d8f-b979-9e7193cdcec6.html"));
});

export default router;
