"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
function SideNavBarTopic(_a) {
    var topic = _a.topic;
    var onMakeIsNewPost = function (date) {
        var date_diff = (new Date() - new Date(date)) / (24 * 3600 * 1000);
        return Math.floor(date_diff) <= 2;
    };
    if (!topic.data)
        return null;
    return (react_1.default.createElement(styled_comp_1.SideBarPostsContainerComp, null,
        react_1.default.createElement("div", { className: "sidebar-list" },
            react_1.default.createElement("span", null, "\uC804\uCCB4\uBAA9\uB85D"),
            react_1.default.createElement("span", null,
                "(",
                Object.values(topic.data).flat().length,
                ")")),
        Object.keys(topic.data).map(function (e, i) { return (react_1.default.createElement(styled_comp_1.SideBarPostsItemComp, { to: "/topic/" + e, key: e },
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { className: "topic_list_items" }, e),
                react_1.default.createElement("span", { className: "topic_length" },
                    "(",
                    topic.data[e].length,
                    ")"),
                (onMakeIsNewPost(topic.data[e][0].date)) && react_1.default.createElement("span", { className: "topic_is_new" }, "new")))); })));
}
exports.default = react_1.default.memo(SideNavBarTopic);
