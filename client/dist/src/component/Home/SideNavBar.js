"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var react_router_dom_1 = require("react-router-dom");
var ai_1 = require("react-icons/ai");
function SideBarNavContainer(_a) {
    var topic = _a.topic, login = _a.login, location = _a.location, count = _a.count;
    return (react_1.default.createElement(styled_comp_1.SideBarComp, null,
        react_1.default.createElement(styled_comp_1.SideBarThunmbNailComp, { src: "/images/og.jpg" }),
        react_1.default.createElement(styled_comp_1.SideBarMetaDataComp, null,
            react_1.default.createElement("div", { className: "sidebar-names" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "junggri")),
            react_1.default.createElement("div", { className: "sidebar-posi posi1" }, "deep work!")),
        react_1.default.createElement("ul", { className: "sidebar-item-list" },
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/post", className: location.pathname === "/" ? "active" : "post" }, "post")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/tag" }, "tags")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/about" }, "about"))),
        react_1.default.createElement("div", { className: "ga-count" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null, "\uC804\uCCB4 \uBC29\uBB38\uC790"),
                count !== null
                    ? react_1.default.createElement("span", { className: "count-num" }, count.data.totalsForAllResults["ga:users"])
                    : react_1.default.createElement(ai_1.AiOutlineLoading3Quarters, { className: "loading-icon" })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null, "\uC624\uB298\uC758 \uBC29\uBB38\uC790"),
                count !== null
                    ? react_1.default.createElement("span", { className: "count-num" }, count.data.rows[count.data.rows.length - 1][1])
                    : react_1.default.createElement(ai_1.AiOutlineLoading3Quarters, { className: "loading-icon" }))),
        login &&
            react_1.default.createElement(react_router_dom_1.Link, { to: "/write" },
                react_1.default.createElement("span", { className: "write-article-btn" }, "\uC0C8 \uAE00 \uC4F0\uAE30")),
        react_1.default.createElement("div", { className: "sidebar-divider" })));
}
exports.default = react_1.default.memo(SideBarNavContainer);
