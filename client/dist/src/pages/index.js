"use strict";
// export { default as Entry } from "pages/Entry";
// export { default as Posts } from "pages/Posts";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = exports.Posts = exports.TextEditor = exports.Admin = void 0;
//한 파일로보낸다??
var Admin_1 = require("./Admin");
Object.defineProperty(exports, "Admin", { enumerable: true, get: function () { return __importDefault(Admin_1).default; } });
var TextEditor_1 = require("./TextEditor");
Object.defineProperty(exports, "TextEditor", { enumerable: true, get: function () { return __importDefault(TextEditor_1).default; } });
var Posts_1 = require("./Posts");
Object.defineProperty(exports, "Posts", { enumerable: true, get: function () { return __importDefault(Posts_1).default; } });
var Entry_1 = require("./Entry");
Object.defineProperty(exports, "Entry", { enumerable: true, get: function () { return __importDefault(Entry_1).default; } });
