import express from "express";
import contentController from "../controller/topic.controller";

const router = express.Router();


router.get("/contents/name", contentController.getContentName); //show all list in main view

router.get("/posts/items", contentController.getAllPostsItems);

router.get("/posts/:topic", contentController.getPostsFromTopicName);

router.get("/:topic/posts/:postsId", contentController.getPostsFromPostsId);


router.post("/posts", contentController.savePosts); //save content

router.post("/topicname/:newTopicName", contentController.makeNewTopic);

router.post("/posts/item", contentController.deletePost);

router.post("/:topicname", contentController.deleteTopic);

router.post("/temp/posts", contentController.temporaryPost);
export default router;