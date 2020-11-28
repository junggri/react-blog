import express, { Request, Response, NextFunction } from "express";
import Controller from "../controller/topic.controller";
import path from "path";

const router = express.Router();

router.get("/lists", Controller.getAllTopics); //show all list in main view

router.post("/content", Controller.saveContent); //save content

router.get("/test", (req, res) => {
  // res.sendFile(path.join(__dirname + "/../../contents", "9776d40b-5e03-4d8f-b979-9e7193cdcec6.html"));
});

export default router;
