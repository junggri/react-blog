"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var admin_controller_1 = __importDefault(require("../controller/admin.controller"));
var router = express_1.default.Router();
router.post("/login", admin_controller_1.default.login);
router.post("/token", admin_controller_1.default.setToken);
router.post("/token/csrf", admin_controller_1.default.checkJWTToken);
exports.default = router;
//# sourceMappingURL=admin.js.map