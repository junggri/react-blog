"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var server_env_json_1 = __importDefault(require("../../../../server.env.json"));
function accessToken() {
    var token = jsonwebtoken_1.default.sign({ login: true }, server_env_json_1.default.JWT_SECRET, {
        expiresIn: "300m",
        issuer: "junggri",
        subject: "login",
    });
    return token;
}
exports.default = accessToken;
