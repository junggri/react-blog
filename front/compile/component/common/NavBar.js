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
var react_router_dom_1 = require("react-router-dom");
var styledComponent_1 = require("../../styledComponent");
var bi_1 = require("react-icons/bi");
var NavBar = function () {
    var ref = react_1.useRef(null);
    var icons = react_1.useRef(null);
    var input = react_1.useRef(null);
    var _a = __read(react_1.useState(""), 2), value = _a[0], setValue = _a[1];
    var navBarRef = react_1.useRef(null);
    var onClickSearchBtn = function (e) {
        if (ref.current) {
            ref.current.style.transform = "translateY(0px)";
            ref.current.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
        }
        if (input.current)
            input.current.focus();
    };
    var onClickCancelBtn = function () {
        if (ref.current) {
            ref.current.style.transform = "translateY(-200px)";
            ref.current.style.boxShadow = "none";
        }
    };
    var onKeyUp = function (e) {
        if (e.key === "Enter") {
            console.log(2);
        }
    };
    var onChangeValue = function (e) {
        setValue(e.target.value);
    };
    // const scrollNavBar = () => {
    //    if (navBarRef.current) {
    //
    //       // console.log(navBarRef.current.getBoundingClientRect().x, navBarRef.current.getBoundingClientRect().y);
    //    }
    // };
    return (react_1.default.createElement(styledComponent_1.NavBarContainer, null,
        react_1.default.createElement(styledComponent_1.SearchBoxComp, { ref: ref },
            react_1.default.createElement("input", { type: "text", name: "search_value", placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: value, ref: input, onChange: onChangeValue, onKeyUp: onKeyUp }),
            react_1.default.createElement(bi_1.BiUpArrowAlt, { className: "search-box-cancel-icon", onClick: onClickCancelBtn })),
        react_1.default.createElement(styledComponent_1.NavBarComp, { ref: navBarRef },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement("div", { className: "navbar-logo" },
                    react_1.default.createElement("img", { src: "/images/Logo.svg", alt: "" }))),
            react_1.default.createElement("nav", null,
                react_1.default.createElement("ul", null)),
            react_1.default.createElement("div", { className: "navbar-icons-box", ref: icons, onClick: onClickSearchBtn }))));
};
exports.default = react_1.default.memo(NavBar);
