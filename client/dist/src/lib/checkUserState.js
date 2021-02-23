"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function checkJwtToken(token) {
    if (token !== null) {
        try {
            var decoded = jsonwebtoken_1.default.verify(token, process.env.REACT_APP_JWT_SECRET);
            return decoded;
        }
        catch (e) {
            localStorage.removeItem("_jt");
        }
    }
}
exports.default = checkJwtToken;
