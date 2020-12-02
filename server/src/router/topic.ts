import express from "express";
import Controller from "../controller/topic.controller";

const router = express.Router();

router.get("/contents/name", Controller.getContentName); //show all list in main view

router.get("/posts/:topic", Controller.getPostsFromTopicName);

router.post("/posts", Controller.savePosts); //save content


router.get("/test", (req, res) => {

   console.log(2);
   // res.sendFile(path.join(__dirname + "/../../contents", "9776d40b-5e03-4d8f-b979-9e7193cdcec6.html"));
});

export default router;
