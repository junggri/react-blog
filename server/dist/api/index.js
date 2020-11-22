"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/cookie", function (req, res) {
    res.cookie("token", "ASdasd", { httpOnly: true });
    res.json({ token: "asd" });
});
router.get("/cookies", function (req, res) {
    res.json(req.csrfToken());
});
router.post("/posts", function (req, res) {
    console.log(2);
    res.json("2");
});
exports.default = router;
//# sourceMappingURL=index.js.map