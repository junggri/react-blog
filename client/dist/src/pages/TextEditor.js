"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var component_1 = require("../component");
function TextEditor(_a) {
    var history = _a.history, location = _a.location;
    return react_1.default.createElement(component_1.Editor, { history: history, location: location });
}
exports.default = TextEditor;
