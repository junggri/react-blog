"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_controller_1 = __importDefault(require("../controller/index.controller"));
var router = express_1.default.Router();
router.get("/contents", index_controller_1.default.getContent);
router.post("/contentsd", function (req, res) {
    res.json({ token: "asd" });
});
router.get("/cookie", function (req, res) {
    res.cookie("token", "ASdasd", { httpOnly: true });
    res.json({ token: "asd" });
});
router.get("/cookies", function (req, res) {
    res.cookie("test", "asd");
    res.json(req.csrfToken());
});
router.post("/posts", function (req, res) {
    res.json("2");
});
router.post("/content", index_controller_1.default.saveContent);
exports.default = router;
//# sourceMappingURL=index.js.map