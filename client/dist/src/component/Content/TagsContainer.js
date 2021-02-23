"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var react_router_dom_1 = require("react-router-dom");
var cg_1 = require("react-icons/cg");
function TagsCotainer(_a) {
    var _b;
    var Allposts = _a.Allposts;
    var set = new Set();
    (_b = Allposts.data) === null || _b === void 0 ? void 0 : _b.map(function (e) { return set.add(e.topic); });
    var tags = Array.from(set);
    function getLength(data, key) {
        var count = 0;
        if (data !== null && typeof key === "string") {
            data.filter(function (e) {
                if (e.topic === key)
                    count += 1;
            });
        }
        return count;
    }
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
                    Allposts.data !== null && getLength(Allposts.data, e),
                    ")")))); }))));
}
exports.default = TagsCotainer;
