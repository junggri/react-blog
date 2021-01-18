"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_controller_1 = __importDefault(require("../controller/index.controller"));
var router = express_1.default.Router();
router.get("/csrf", index_controller_1.default.getCsrf);
router.get("/google/count", index_controller_1.default.googleCount);
router.post("/check/csrf", function (req, res) {
    res.status(200).json({ state: true });
});
exports.default = router;
//# sourceMappingURL=index.js.map