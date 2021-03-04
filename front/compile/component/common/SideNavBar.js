"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styledComponent_1 = require("../../styledComponent");
var react_router_dom_1 = require("react-router-dom");
var ai_1 = require("react-icons/ai");
var gr_1 = require("react-icons/gr");
var io_1 = require("react-icons/io");
var SideNavBar = function (_a) {
    var data = _a.data, count = _a.count;
    var listRef = react_1.useMemo(function () { return data === null || data === void 0 ? void 0 : data.map(function () { return react_1.default.createRef(); }); }, [data]);
    var _b = __read(react_1.useState(false), 2), click = _b[0], setClick = _b[1];
    var mediaMenu = react_1.useRef(null);
    var headerIcon = react_1.useRef(null);
    var topicList = react_1.useMemo(function () {
        var set = new Set();
        data === null || data === void 0 ? void 0 : data.map(function (e, i) { return set.add(e.topic); });
        return set;
    }, [data]);
    var topics = Array.from(topicList);
    var getPostCount = function (topic) {
        var count = 0;
        data === null || data === void 0 ? void 0 : data.filter(function (e) {
            if (e.topic === topic)
                count += 1;
        });
        return count;
    };
    var onClickList = function (ref) {
        // ref.current.style.display = "none";
    };
    var clickMenuBar = function (e) {
        if (mediaMenu.current && headerIcon.current && !click) {
            mediaMenu.current.style.height = "120px";
            headerIcon.current.style.transform = "rotateZ(180deg)";
            setClick(!click);
        }
        else if (mediaMenu.current && headerIcon.current && click) {
            mediaMenu.current.style.height = "0px";
            headerIcon.current.style.transform = "rotateZ(0deg)";
            setClick(!click);
        }
    };
    if (listRef === undefined)
        return null;
    return (react_1.default.createElement(styledComponent_1.SideBarComp, null,
        react_1.default.createElement("header", null,
            react_1.default.createElement("span", null,
                react_1.default.createElement(gr_1.GrAttachment, { className: "header-icons" })),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement("h1", null, "\uC804\uCCB4 \uD1A0\uD53D")),
            react_1.default.createElement("span", { className: "media-icons", onClick: clickMenuBar, ref: headerIcon },
                react_1.default.createElement(io_1.IoMdArrowDropdown, null))),
        react_1.default.createElement("div", { className: "media-menu-bar", ref: mediaMenu }, topics.map(function (e, i) { return (react_1.default.createElement("li", { key: e, ref: listRef[i], onClick: function () { return onClickList(listRef[i]); } },
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/tag/" + e },
                react_1.default.createElement("span", null, e),
                react_1.default.createElement("span", null,
                    "(",
                    getPostCount(e),
                    ")")))); })),
        react_1.default.createElement("ul", null, topics.map(function (e, i) { return (react_1.default.createElement("li", { key: e, ref: listRef[i], onClick: function () { return onClickList(listRef[i]); } },
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/tag/" + e },
                react_1.default.createElement("span", null, e),
                react_1.default.createElement("span", null,
                    "(",
                    getPostCount(e),
                    ")")))); })),
        react_1.default.createElement("div", { className: "sidebar-meta-data" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { className: "count-slo" }, "\uC804\uCCB4 \uBC29\uBB38\uC790"),
                count !== null
                    ? react_1.default.createElement("span", { className: "count-num" }, count.data.totalsForAllResults["ga:users"])
                    : react_1.default.createElement(ai_1.AiOutlineLoading3Quarters, { className: "loading-icon" })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { className: "count-slo" }, "\uC624\uB298\uC758 \uBC29\uBB38\uC790"),
                count !== null
                    ? react_1.default.createElement("span", { className: "count-num" }, count.data.rows[count.data.rows.length - 1][1])
                    : react_1.default.createElement(ai_1.AiOutlineLoading3Quarters, { className: "loading-icon" })))));
};
exports.default = react_1.default.memo(SideNavBar);
