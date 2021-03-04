"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styledComponent_1 = require("../../styledComponent");
var TextEditor = function (_a) {
    var onSubmit = _a.onSubmit, onSubmitTempPost = _a.onSubmitTempPost;
    return (react_1.default.createElement(styledComponent_1.TextEditorBoxComp, null,
        react_1.default.createElement("div", { onClick: onSubmit }, "\uB4F1\uB85D\uD558\uAE30"),
        react_1.default.createElement("div", { onClick: onSubmitTempPost }, "\uC784\uC2DC\uC800\uC7A5")));
};
exports.default = react_1.default.memo(TextEditor);
