"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import connection from "../config/commnet.connection";
var crypto_1 = __importDefault(require("crypto"));
var util_1 = __importDefault(require("util"));
var pbkdf2Promise = util_1.default.promisify(crypto_1.default.pbkdf2);
function cd(state) {
    return state;
}
var adminModel = {};
exports.default = adminModel;
