"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_controller_1 = __importDefault(require("../controller/index.controller"));
var router = express_1.default.Router();
router.get("/csrf", index_controller_1.default.getCsrf);
router.get("/comment/item/:postid", index_controller_1.default.getCommnet);
router.get("/google/count", index_controller_1.default.getGaCount);
router.post("/comment", index_controller_1.default.saveComment);
router.post("/reply", index_controller_1.default.saveReply);
exports.default = router;
