"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
function PostsDetail(_a) {
    var onChangeDetail = _a.onChangeDetail, detailValue = _a.detailValue;
    var onChange = function (e) {
        onChangeDetail(e.target.value);
    };
    return (react_1.default.createElement(styled_comp_1.PostsDetailComp, null,
        react_1.default.createElement("h1", null, "\uCD94\uAC00\uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694"),
        react_1.default.createElement("input", { type: "text", onChange: onChange, value: detailValue })));
}
exports.default = react_1.default.memo(PostsDetail);
