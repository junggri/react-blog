import express from "express";
import contentController from "../controller/topic.controller";

const router = express.Router();

router.get("/posts/items", contentController.getAllPostsPreload);
//preload data
router.get("/preload/:topic/posts/:postsId", contentController.getPostPreload);

router.post("/post", contentController.savePost);

router.post("/temp", contentController.saveTemporaryPost);

router.post("/:topic/temps/:tempId", contentController.deleteTemporaryPostAndSavePost);

router.post("/:topic/posts/:postId", contentController.updatePost);
//renew all
// router.get("/contents/name", contentController.getContentName); //show all list in main view

// router.get("/posts/items", contentController.getAllPostsItems);

// router.get(`/posts/:topic`, contentController.getPostsFromTopicName);

// router.get("/:topic/posts/:postsId", contentController.getPostsFromPostsId);

// router.get("/temp/items", contentController.getTempPost);

// router.get("/temp/:tempId", contentController.getTempPostFromId);

// router.post("/thumbnail", contentController.saveThumbnail);

// router.post("/posts", contentController.savePosts); //save content
//
// router.post("/temp", contentController.saveTempPost);
//
// router.post("/modify/post", contentController.modifyPost);

// router.post("/topicname/:newTopicName", contentController.makeNewTopic);
//
// router.post("/posts/item", contentController.deletePost);

// router.post("/:topicname", contentController.deleteTopic);

// router.post("/temp/posts", contentController.temporaryPost);

// router.post("/temp/items", contentController.deleteTempPost);

//renew all

export default router;