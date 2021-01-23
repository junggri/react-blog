"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var TextEditBtnBox = function (_a) {
    var onSubmit = _a.onSubmit, onSaveTemporaryPost = _a.onSaveTemporaryPost;
    return (react_1.default.createElement(styled_comp_1.WriteBtnBoxComp, null,
        react_1.default.createElement(styled_comp_1.WriteBtnComp, { onClick: onSubmit }, "\uB4F1\uB85D\uD558\uAE30"),
        react_1.default.createElement(styled_comp_1.WriteBtnComp, { onClick: onSaveTemporaryPost }, "\uC784\uC2DC\uC800\uC7A5")));
};
exports.default = TextEditBtnBox;
