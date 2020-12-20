import express from "express";
import Controller from "../controller/topic.controller";
import contentController from "../controller/topic.controller";

const router = express.Router();


router.get("/contents/name", Controller.getContentName); //show all list in main view

router.get("/posts/items", contentController.getAllPostsItems);

router.get("/posts/:topic", Controller.getPostsFromTopicName);

router.get("/:topic/posts/:postsId", Controller.getPostsFromPostsId);

router.post("/delete/:topicname", contentController.deleteTopic);

router.post("/topicname/:newTopicName", contentController.makeNewTopic);

router.post("/posts", Controller.savePosts); //save content


export default router;
