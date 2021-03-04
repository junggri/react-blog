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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styledComponent_1 = require("../../styledComponent");
var react_router_dom_1 = require("react-router-dom");
var md_1 = require("react-icons/md");
var TemporaryPost = function (_a) {
    var temp = _a.temp, deleteTemporaryPost = _a.deleteTemporaryPost;
    var tempList = react_1.useMemo(function () { return temp === null || temp === void 0 ? void 0 : temp.map(function () { return react_1.default.createRef(); }); }, [temp]);
    var onClickDeleteBtn = function (e, ref) {
        deleteTemporaryPost(e.currentTarget.dataset.id, ref);
    };
    if (!(temp === null || temp === void 0 ? void 0 : temp.length) || temp === null)
        return null;
    if (!tempList)
        return null;
    return (react_1.default.createElement(styledComponent_1.TempPostContainerComp, null,
        react_1.default.createElement("div", { className: "tsc-slo" }, "Temporary post"),
        react_1.default.createElement("div", null, temp.map(function (e, i) { return (react_1.default.createElement("div", { className: "temp_item", key: e.uid, ref: tempList[i] },
            react_1.default.createElement(styledComponent_1.TemporaryPostComp, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/write?temp=" + e.uid }, e.content_name)),
            react_1.default.createElement("span", { className: 'posts-admin-delete', onClick: function (e) { return onClickDeleteBtn(e, tempList[i]); }, "data-id": e.uid },
                react_1.default.createElement(md_1.MdDelete, null)))); }))));
};
exports.default = react_1.default.memo(TemporaryPost);
