"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var topic_controller_1 = __importDefault(require("../controller/topic.controller"));
var router = express_1.default.Router();
router.get("/contents/name", topic_controller_1.default.getContentName); //show all list in main view
router.get("/posts/items", topic_controller_1.default.getAllPostsItems);
router.get("/posts/:topic", topic_controller_1.default.getPostsFromTopicName);
router.get("/:topic/posts/:postsId", topic_controller_1.default.getPostsFromPostsId);
router.get("/temp/items", topic_controller_1.default.getTempPost);
router.get("/temp/:tempId", topic_controller_1.default.getTempPostFromId);
router.post("/thumbnail", topic_controller_1.default.saveThumbnail);
router.post("/posts", topic_controller_1.default.savePosts); //save content
router.post("/temp", topic_controller_1.default.saveTempPost);
router.post("/modify/post", topic_controller_1.default.modifyPost);
router.post("/topicname/:newTopicName", topic_controller_1.default.makeNewTopic);
router.post("/posts/item", topic_controller_1.default.deletePost);
router.post("/:topicname", topic_controller_1.default.deleteTopic);
router.post("/temp/posts", topic_controller_1.default.temporaryPost);
router.post("/temp/items", topic_controller_1.default.deleteTempPost);
exports.default = router;
