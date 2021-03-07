import express from "express";
import contentController from "../controller/content.controller";

const router = express.Router();

router.get("/posts/items", contentController.getAllPosts);//get

router.get("/items/:uid", contentController.getTemporaryPost);//get

router.get("/items/:uid/topics/:topic", contentController.getPost);//get

router.get("/topics/temps", contentController.getTopicAndTemporaryPost);//get

router.post("/post", contentController.savePost);//save

router.post("/temp", contentController.saveTemporaryPost);//save

router.post("/thumbnail", contentController.saveThumbnail);

router.post("/topics", contentController.createNewTopic);

router.post("/:topic/posts/:postId", contentController.updatePost);//update

router.post("/:topic/temps/:tempId", contentController.deleteTemporaryPostAndSavePost);//delte

router.post("/posts/item", contentController.deletePost);//delete

router.post("/temps/item", contentController.deleteTemporaryPost);//delete

router.post("/topics/item", contentController.deleteTopic);


export default router;