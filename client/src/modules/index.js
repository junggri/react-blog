"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var Posts_1 = __importDefault(require("./Posts"));
var Common_1 = __importDefault(require("./Common"));
var Topic_1 = __importDefault(require("./Topic"));
var TextEditor_1 = __importDefault(require("./TextEditor"));
var Comment_1 = __importDefault(require("./Comment"));
var rootReducer = redux_1.combineReducers({ posts: Posts_1.default, common: Common_1.default, topic: Topic_1.default, textEdit: TextEditor_1.default, comment: Comment_1.default });
exports.default = rootReducer;
