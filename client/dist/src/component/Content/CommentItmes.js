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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_comp_1 = require("../../styled-comp");
var axios_1 = __importDefault(require("../../lib/axios"));
function CmtItem(_a) {
    var _this = this;
    var e = _a.e, csrf = _a.csrf, list = _a.list, setList = _a.setList;
    var _b = react_1.useState(""), reply = _b[0], setReply = _b[1];
    var _c = react_1.useState([]), depthReply = _c[0], setDepthReply = _c[1];
    var isExistReply = function (target) {
        console.log(e);
        var group = list.filter(function (e) {
            return e.bgroup === target.bgroup && e.board === e.parent;
        });
        console.log(group);
        return group.length;
    };
    var onClickReply = function (e) {
        e.currentTarget.nextSibling.nextSibling.classList.toggle("visible");
        e.currentTarget.nextSibling.classList.toggle("visible");
        var grp = parseInt(e.currentTarget.dataset.grp);
        var dp = parseInt(e.currentTarget.dataset.dp);
        var board = parseInt(e.currentTarget.dataset.board);
        var _list = list.filter(function (e, i) {
            return e.bgroup === grp && e.depth === dp + 1 && e.parent === board;
        });
        //그룹그리고 댑쓰, 부모가 같은 것믇 만 가져옵니다.
        setDepthReply(_list);
    };
    // const showReply = (e: any) => {
    // };
    var onClickDepthReplyBtn = function (e) {
        e.currentTarget.nextSibling.classList.toggle("visible");
        e.currentTarget.nextSibling.classList.contains("visible")
            ? e.currentTarget.textContent = "접기"
            : e.currentTarget.textContent = "댓글 달기";
    };
    var onChangeReply = function (e) {
        setReply(e.target.value);
    };
    var onSubmitReply = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var replyBox, depth, sort, grp, bn, data, _list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    replyBox = e.currentTarget.parentNode.parentNode.parentNode;
                    depth = e.currentTarget.dataset.dp;
                    sort = e.currentTarget.dataset.sorts;
                    grp = e.currentTarget.dataset.grp;
                    bn = e.currentTarget.dataset.board;
                    return [4 /*yield*/, axios_1.default.saveReply(reply, Number(bn), Number(grp), Number(sort), Number(depth), csrf)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, axios_1.default.getComment()];
                case 2:
                    data = (_a.sent()).data;
                    setReply("");
                    _list = data.result.filter(function (e, i) {
                        return e.bgroup === Number(grp) && e.sorts > Number(sort) && e.depth > Number(depth);
                    });
                    setDepthReply(_list);
                    // replyBox.classList.remove("visible");
                    setList(data.result);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(styled_comp_1.CommentItmesComp, { depth: e.depth },
        react_1.default.createElement("div", { className: "cmt-whoami" },
            react_1.default.createElement("img", { src: "/images/og.jpg", alt: "" }),
            react_1.default.createElement("div", { className: "cmt-whoami-sub" },
                react_1.default.createElement("span", { className: "cmt-writer" }, "\uC775\uBA85"),
                react_1.default.createElement("span", { className: "cmt-created" }, "123123"))),
        react_1.default.createElement("div", { className: "cmt-content" }, e.cmt),
        react_1.default.createElement("div", { className: "cmt-reply-box" },
            react_1.default.createElement("span", { className: "cmt-btn-reply", "data-grp": e.bgroup, "data-dp": e.depth, "data-board": e.board, onClick: onClickReply }, "\uB313\uAE00\uB2EC\uAE30"),
            react_1.default.createElement("div", { className: "reply-depth " + ("depth" + e.depth) }, depthReply.map(function (e, i) { return (react_1.default.createElement(CmtItem, { key: i, e: e, csrf: csrf, list: list, setList: setList })); })),
            react_1.default.createElement("div", { className: "depth-reply-container" },
                react_1.default.createElement("div", { className: "depth-reply-btn", onClick: onClickDepthReplyBtn }, "\uB313\uAE00\uB2EC\uAE30"),
                react_1.default.createElement("div", { className: "depth-reply" },
                    react_1.default.createElement(styled_comp_1.CommentInputItem, null,
                        react_1.default.createElement("textarea", { placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: reply, onChange: onChangeReply }),
                        react_1.default.createElement("div", { className: "cmt-login" },
                            react_1.default.createElement("input", { type: "text", name: "cmt-user", placeholder: "\uC774\uB984" }),
                            react_1.default.createElement("input", { type: "password", name: "cmt-pwd", placeholder: "\uBE44\uBC00\uBC88\uD638" }),
                            react_1.default.createElement("div", { className: "cmt-submit-btn", "data-grp": e.bgroup, "data-sorts": e.sorts, "data-dp": e.depth, "data-board": e.board, onClick: onSubmitReply },
                                react_1.default.createElement("span", null, "\uB2F5\uAE00\uB2EC\uAE30")))))))));
}
exports.default = react_1.default.memo(CmtItem);
