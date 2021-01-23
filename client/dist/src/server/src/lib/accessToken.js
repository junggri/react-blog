"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function accessToken() {
    var token = jsonwebtoken_1.default.sign({ login: true }, process.env.JWT_SECRET, {
        expiresIn: "300m",
        issuer: "junggri",
        subject: "login",
    });
    return token;
}
exports.default = accessToken;
