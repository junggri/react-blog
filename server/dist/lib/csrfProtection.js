"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var csurf_1 = __importDefault(require("csurf"));
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
});
//# sourceMappingURL=csrfProtection.js.map