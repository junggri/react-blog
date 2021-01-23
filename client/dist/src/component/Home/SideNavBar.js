"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var react_router_dom_1 = require("react-router-dom");
// import logo from "../../image/Logo.svg";
var index_1 = require("../index");
var backGround = {
    // backgroundImage: `url(${logo})`,
    backgroundSize: "contain",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
};
function SideBarNavContainer(_a) {
    var topic = _a.topic, login = _a.login;
    return (react_1.default.createElement(styled_comp_1.SideBarComp, null,
        react_1.default.createElement(styled_comp_1.SideBarThunmbNailComp, { style: backGround }),
        react_1.default.createElement(styled_comp_1.SideBarMetaDataComp, null,
            react_1.default.createElement("div", { className: "sidebar-names" }, "junggri"),
            react_1.default.createElement("div", { className: "sidebar-posi posi1" }, "\uB3C4\uC804\uC73C\uB85C \uBC1C\uC804\uD558\uAE30")),
        react_1.default.createElement(index_1.SideNavBarTopic, { topic: topic }),
        login &&
            react_1.default.createElement(react_router_dom_1.Link, { to: "/write" },
                react_1.default.createElement("span", { className: "write-article-btn" }, "\uC0C8 \uAE00 \uC4F0\uAE30")),
        react_1.default.createElement("div", { className: "sidebar-divider" })));
}
exports.default = react_1.default.memo(SideBarNavContainer);
