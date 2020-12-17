"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var topic_controller_1 = __importDefault(require("../controller/topic.controller"));
var topic_controller_2 = __importDefault(require("../controller/topic.controller"));
var router = express_1.default.Router();
router.get("/contents/name", topic_controller_1.default.getContentName); //show all list in main view
router.get("/posts/:topic", topic_controller_1.default.getPostsFromTopicName);
router.get("/:topic/posts/:postsId", topic_controller_1.default.getPostsFromPostsId);
router.post("/topicname/:newTopicName", topic_controller_2.default.makeNewTopic);
router.post("/posts", topic_controller_1.default.savePosts); //save content
router.get("/test", function (req, res) {
});
exports.default = router;
//# sourceMappingURL=topic.js.map