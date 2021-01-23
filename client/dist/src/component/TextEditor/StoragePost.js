"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var react_router_dom_1 = require("react-router-dom");
var md_1 = require("react-icons/md");
var Srotage = function (_a) {
    var temp = _a.temp, onDelete = _a.onDelete;
    var onClick = function (e) {
        onDelete(e.currentTarget.dataset.id);
    };
    if (temp === null)
        return null;
    if (temp.length === 0)
        return null;
    return (react_1.default.createElement(styled_comp_1.TemporaryStorageComp, null,
        react_1.default.createElement("div", { className: "tsc-slo" }, "\uC784\uC2DC\uC800\uC7A5"),
        react_1.default.createElement("div", null, temp.map(function (e) { return (react_1.default.createElement("div", { className: "temp_item", key: e.uid },
            react_1.default.createElement(styled_comp_1.TemporaryPostComp, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/write?temp=" + e.uid }, e.content_name)),
            react_1.default.createElement("span", { className: 'posts-admin-delete', onClick: onClick, "data-id": e.uid },
                react_1.default.createElement(md_1.MdDelete, null)))); }))));
};
exports.default = react_1.default.memo(Srotage);
