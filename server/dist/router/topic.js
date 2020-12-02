"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var topic_controller_1 = __importDefault(require("../controller/topic.controller"));
var router = express_1.default.Router();
router.get("/contents/name", topic_controller_1.default.getContentName); //show all list in main view
router.get("/posts/:topic", topic_controller_1.default.getPostsFromTopicName);
router.post("/posts", topic_controller_1.default.savePosts); //save content
router.get("/test", function (req, res) {
    console.log(2);
    // res.sendFile(path.join(__dirname + "/../../contents", "9776d40b-5e03-4d8f-b979-9e7193cdcec6.html"));
});
exports.default = router;
//# sourceMappingURL=topic.js.map