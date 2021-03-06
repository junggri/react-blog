"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
var react_router_dom_1 = require("react-router-dom");
var io5_1 = require("react-icons/io5");
var md_1 = require("react-icons/md");
var fa_1 = require("react-icons/fa");
var isNewPost_1 = __importDefault(require("../../lib/isNewPost"));
var EntryPostsContainer = function (_a) {
    var posts = _a.posts, onDelete = _a.onDelete, login = _a.login, csrf = _a.csrf;
    if (!posts.data)
        return null;
    var data = Object.values(posts.data).flat();
    return (react_1.default.createElement(styled_comp_1.EntryPostsContainerComp, null,
        data.map(function (e) { return (react_1.default.createElement(styled_comp_1.EntryPostsItemComp, { key: e.uid },
            react_1.default.createElement("span", { className: "item-created" },
                react_1.default.createElement("span", { className: "ic-icons" }, "\uD83D\uDDD3 "),
                e.created,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/tag/" + e.topic },
                    react_1.default.createElement("span", { className: "topic_link" }, (e.topic).toUpperCase())),
                isNewPost_1.default(e.date) && react_1.default.createElement("span", { className: "post_is_new" }, "NEW")),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/topic/" + e.topic + "/" + e.uid },
                react_1.default.createElement("div", { className: "item-contentName" },
                    react_1.default.createElement("span", null, e.content_name))),
            react_1.default.createElement("div", { className: "item-detail" }, e.detail),
            login &&
                react_1.default.createElement("div", { className: "posts-admin-box", "data-id": e.uid, "data-topic": e.topic },
                    react_1.default.createElement("span", { className: 'posts-admin-modify' },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/write?modify=" + e.uid + "&topic=" + e.topic },
                            react_1.default.createElement(io5_1.IoColorWand, null))),
                    react_1.default.createElement("span", { className: 'posts-admin-delete', onClick: onDelete },
                        react_1.default.createElement(md_1.MdDelete, null))),
            react_1.default.createElement("div", { className: "content-cmt-box" },
                react_1.default.createElement(fa_1.FaRegComment, { className: "content-cmt-icons" }),
                react_1.default.createElement("span", null, e.comment)))); }),
        react_1.default.createElement("div", { className: "sidebar-copyright" }, "Copyright 2021. junggri All rights reserved.")));
};
exports.default = (EntryPostsContainer);
