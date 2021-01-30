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
var isNewPost_1 = __importDefault(require("../../lib/isNewPost"));
var useHelmet_1 = __importDefault(require("../../useHooks/useHelmet"));
var EntryPostsContainer = function (_a) {
    var posts = _a.posts, onDelete = _a.onDelete, login = _a.login, csrf = _a.csrf;
    if (!posts.data)
        return null;
    var data = Object.values(posts.data).flat();
    return (react_1.default.createElement(styled_comp_1.EntryPostsContainerComp, null,
        react_1.default.createElement(useHelmet_1.default, { title: "정그리의 블로그입니다.", keywords: "자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드", description: "자바스크립트부터 nodejs 그리고 알고리즘과 함께 성장해나가기를 기원하는 블로그입니다. 점점 더 발전해나가는 기술들을 함께 익히고 정그리 블로그를 찾아주는 사람들에게 감사드립니다." }),
        data.map(function (e) { return (react_1.default.createElement(styled_comp_1.EntryPostsItemComp, { key: e.uid },
            react_1.default.createElement("span", { className: "item-created" },
                "\uD83D\uDDD3",
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
                        react_1.default.createElement(md_1.MdDelete, null))))); }),
        react_1.default.createElement("div", { className: "sidebar-copyright" }, "Copyright 2021. junggri All rights reserved.")));
};
exports.default = (EntryPostsContainer);
