"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styledComponent_1 = require("../../styledComponent");
var TextEditContentName = function (_a) {
    var props = __rest(_a, []);
    var onContentName = function (e) {
        props.onContentChange(e.target.value);
    };
    var onDetail = function (e) {
        props.onDetailChange(e.target.value);
    };
    return (react_1.default.createElement(styledComponent_1.TextEditContentNameComp, null,
        react_1.default.createElement("h1", null, "Title"),
        react_1.default.createElement("input", { type: "text", name: "content_name", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694.", onChange: onContentName, value: props.contentName }),
        react_1.default.createElement("div", { className: "summary_content" },
            react_1.default.createElement("h1", null, "Summary"),
            react_1.default.createElement("input", { type: "text", name: "content_detail", placeholder: "\uC694\uC57D\uC744 \uC791\uC131\uD558\uC138\uC694.", className: "summary", onChange: onDetail, value: props.detail }))));
};
exports.default = react_1.default.memo(TextEditContentName);
