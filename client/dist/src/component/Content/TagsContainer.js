"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var cg_1 = require("react-icons/cg");
var react_router_dom_1 = require("react-router-dom");
function TagsCotainer(_a) {
    var Allposts = _a.Allposts;
    var tags = Allposts.data ? Object.keys(Allposts.data) : [];
    if (!Allposts.data)
        return null;
    return (react_1.default.createElement(styled_comp_1.TagsContainerComp, null,
        react_1.default.createElement("div", { className: "tag-slo" }, "\uD0DC\uADF8"),
        react_1.default.createElement("div", { className: "tags-box" }, tags.map(function (e) { return (react_1.default.createElement(react_router_dom_1.Link, { to: "/tag/" + e, key: e },
            react_1.default.createElement("span", { className: "tag-hash" },
                react_1.default.createElement(cg_1.CgHashtag, { className: "hash-icon" }),
                react_1.default.createElement("span", null,
                    e,
                    "(",
                    Allposts.data !== null && Allposts.data[e].length,
                    ")")))); }))));
}
exports.default = TagsCotainer;
