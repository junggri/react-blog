"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var WriteTopicName = function (_a) {
    var onNameChange = _a.onNameChange, value = _a.value;
    var onChange = function (e) {
        onNameChange(e.target.value);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("textarea", { name: "content-title", placeholder: "\uC81C\uBAA9", className: "content-title", onChange: onChange, value: value })));
};
exports.default = react_1.default.memo(WriteTopicName);
