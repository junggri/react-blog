"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var react_router_dom_1 = require("react-router-dom");
// import { isMobile } from "react-device-detect";
function TopMetaBar(_a) {
    var match = _a.match, count = _a.count;
    return (react_1.default.createElement(styled_comp_1.TopMetaBarComp, null,
        react_1.default.createElement("section", { className: "topmetabar-list" },
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: "metaItem", exact: match.path === "/", activeClassName: "metaActive" },
                react_1.default.createElement("span", { className: 'tmb-icon' }, "\uD83D\uDDA5 "),
                react_1.default.createElement("span", null, "blog")),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/about", className: "metaItem", exact: match.path === "/about", activeClassName: "metaActive" },
                react_1.default.createElement("span", { className: 'tmb-icon' }, "\uD83D\uDE4B\u200D\u2642\uFE0F "),
                react_1.default.createElement("span", null, "about me"))),
        react_1.default.createElement("section", { className: "topmetabar-count" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null, "\uC804\uCCB4"),
                react_1.default.createElement("span", { className: "topmetabar-countAll" }, count !== null
                    ? react_1.default.createElement("span", null, count.data.totalsForAllResults["ga:users"])
                    : react_1.default.createElement("span", null, "\uB85C\uB529"))),
            react_1.default.createElement("div", null, "|"),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null, "\uC624\uB298\uC758 \uBC29\uBB38\uC790"),
                react_1.default.createElement("span", { className: "topmetabar-today" }, count !== null
                    ? react_1.default.createElement("span", null, count.data.rows[count.data.rows.length - 1][1])
                    : react_1.default.createElement("span", null, "\uB85C\uB529"))))));
}
exports.default = react_1.default.memo(TopMetaBar);
