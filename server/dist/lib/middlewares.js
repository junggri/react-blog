"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = exports.csrfProtection = void 0;
var csurf_1 = __importDefault(require("csurf"));
exports.csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
});
var header = function (req, res, next) {
    res.header("Cache-control", "no-cache, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Access-Control-Allow-Methods", "GET POST DELELTE");
    next();
};
exports.header = header;
//# sourceMappingURL=middlewares.js.map