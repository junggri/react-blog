"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
function SelectKindOfPost(_a) {
    var onCheck = _a.onCheck, checked = _a.checked;
    var onChange = function (e) {
        onCheck(e.target.value);
    };
    return (react_1.default.createElement(styled_comp_1.SelectKindOfPostsBoxComp, null,
        react_1.default.createElement("h1", null, "\uAC8C\uC2DC\uBB3C\uC885\uB958\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694"),
        react_1.default.createElement(styled_comp_1.SelectKindOfPosts, null,
            react_1.default.createElement("input", { className: "select-input", type: "radio", id: "kind-of-notice", onChange: onChange, value: "notice", name: 'kindofpost', checked: checked === "notice" }),
            react_1.default.createElement("label", { className: "select-label", htmlFor: "kind-of-notice" }, "\uACF5\uC9C0")),
        react_1.default.createElement(styled_comp_1.SelectKindOfPosts, null,
            react_1.default.createElement("input", { className: "select-input", type: "radio", id: "kind-of-posts", onChange: onChange, value: "posts", name: 'kindofpost', checked: checked === "posts" }),
            react_1.default.createElement("label", { className: "select-label", htmlFor: "kind-of-posts" }, "\uAC8C\uC2DC\uBB3C"))));
}
exports.default = react_1.default.memo(SelectKindOfPost);
