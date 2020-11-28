"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_controller_1 = __importDefault(require("../controller/index.controller"));
var router = express_1.default.Router();
router.get("/contents", index_controller_1.default.getContent);
router.get("/content/nodejs", function (req, res) { });
router.get("/cookies", function (req, res) {
    res.cookie("test", "asd");
    res.json(req.csrfToken());
});
router.post("/posts", function (req, res) {
    res.json("2");
});
router.post("/content", index_controller_1.default.saveContent);
router.get("/test", function (req, res) {
    // res.sendFile(path.join(__dirname + "/../../contents", "9776d40b-5e03-4d8f-b979-9e7193cdcec6.html"));
});
exports.default = router;
//# sourceMappingURL=index copy.js.map