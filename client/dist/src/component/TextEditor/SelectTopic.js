"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
function SelectTopic(_a) {
    var topic = _a.topic, onIsChecked = _a.onIsChecked, checked = _a.checked;
    var onChange = function (e) {
        onIsChecked(e.target.value);
    };
    if (topic === null)
        return null;
    return (react_1.default.createElement(styled_comp_1.SelectTopicBoxComp, null,
        react_1.default.createElement("h1", null, "\uD1A0\uD53D\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694"),
        react_1.default.createElement("div", { className: "post-select-box" }, topic.map(function (v) { return (react_1.default.createElement(styled_comp_1.SelectTopicItemComp, { key: v["Tables_in_contents"] },
            react_1.default.createElement("input", { className: "select-input", type: "radio", id: v["Tables_in_contents"], onChange: onChange, value: v["Tables_in_contents"], name: 'post', checked: v["Tables_in_contents"] === checked }),
            react_1.default.createElement("label", { className: "select-label", htmlFor: v["Tables_in_contents"] }, v["Tables_in_contents"]))); }))));
}
exports.default = react_1.default.memo(SelectTopic);
