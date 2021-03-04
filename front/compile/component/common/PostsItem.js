"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styledComponent_1 = require("@src/styledComponent");
var react_router_dom_1 = require("react-router-dom");
var fi_1 = require("react-icons/fi");
var ai_1 = require("react-icons/ai");
var PostItem = function (_a) {
    var data = _a.data, onDelete = _a.onDelete;
    var onClickDeleteBtn = function (e) {
        var check = window.confirm("삭제할꺼야??");
        if (check)
            onDelete(data.topic, data.uid);
    };
    return (react_1.default.createElement(styledComponent_1.PostItemComp, null,
        react_1.default.createElement("div", { className: "categories" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/tag/" + data.topic }, data.topic)),
        react_1.default.createElement("section", { className: "post-metadata-box" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/topic/" + data.topic + "/" + data.uid },
                react_1.default.createElement("div", { className: "content-metadata" },
                    react_1.default.createElement("h1", null,
                        react_1.default.createElement("span", null, data.content_name)),
                    react_1.default.createElement("h2", null, data.detail))),
            react_1.default.createElement("footer", null,
                react_1.default.createElement("div", { className: "post-created" },
                    react_1.default.createElement("span", null, data.created)),
                react_1.default.createElement("div", { className: "comment" },
                    react_1.default.createElement("span", null, data.comment),
                    react_1.default.createElement("span", null, "comment"))),
            react_1.default.createElement("div", { className: "divide" }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/topic/" + data.topic + "/" + data.uid },
                react_1.default.createElement("div", { className: "post-imgBox" },
                    react_1.default.createElement("img", { src: process.env.NODE_ENV === "development"
                            ? "/images/Logo.svg"
                            : !data.thumbnail
                                ? "/images/Logo.svg"
                                : "https://junggri.com/thumbnail/" + data.thumbnail, alt: "\uC378\uB124\uC77C" })))),
        react_1.default.createElement("section", { className: "post-control-icon-box" },
            react_1.default.createElement("span", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/write?update=" + data.uid + "&topic=" + data.topic },
                    react_1.default.createElement(ai_1.AiTwotoneEdit, null))),
            react_1.default.createElement("span", { onClick: onClickDeleteBtn },
                react_1.default.createElement(fi_1.FiDelete, null)))));
};
exports.default = react_1.default.memo(PostItem);
