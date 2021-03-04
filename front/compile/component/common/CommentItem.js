"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styledComponent_1 = require("@src/styledComponent");
var ai_1 = require("react-icons/ai");
var fi_1 = require("react-icons/fi");
var dompurify_1 = __importDefault(require("dompurify"));
var axios_1 = __importDefault(require("@lib/axios"));
var ri_1 = require("react-icons/ri");
var initial = {
    reply: {
        value: "",
        user: "",
        pwd: "",
    },
    deleteData: {
        user: "",
        pwd: "",
    },
};
var CommentItem = react_1.default.forwardRef(function (props, ref) {
    var DOMPurify = typeof window === "object" ? dompurify_1.default(window) : function () { return false; };
    var inputRef = react_1.default.useRef(null);
    var preInputRef = react_1.default.useRef(null);
    var _a = __read(react_1.useState([]), 2), depthComment = _a[0], setDepthComment = _a[1];
    var _b = __read(react_1.useState(false), 2), click = _b[0], setClick = _b[1];
    var _c = __read(react_1.useState(initial.reply), 2), replyValue = _c[0], setReplyValue = _c[1];
    var _d = __read(react_1.useState(initial.deleteData), 2), deleteValue = _d[0], setDeleteValue = _d[1];
    var findDepthComment = react_1.useMemo(function () { return function (board, arr) {
        var _list = props.list.filter(function (e) { return e.parent === board; });
        _list.forEach(function (e) {
            arr.push(e.board);
            findDepthComment(e.board, arr);
        });
        return arr;
    }; }, [props.list]);
    var makeComment = function (e) { return ({
        __html: typeof window === "object" ? DOMPurify.sanitize(e.cmt) : null,
    }); };
    var onChangeValue = function (e) {
        var _a;
        setReplyValue(__assign(__assign({}, replyValue), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var onChangeDeleteValue = function (e) {
        var _a;
        setDeleteValue(__assign(__assign({}, deleteValue), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var onSubmitReply = function (e, data) { return __awaiter(void 0, void 0, void 0, function () {
        var saveData, result, _list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!replyValue.pwd || !replyValue.user || !replyValue.value)
                        return [2 /*return*/, alert(" 정보를 입력 해주세요")];
                    saveData = {
                        value: replyValue.value,
                        user: replyValue.user,
                        pwd: replyValue.pwd,
                        board: data.board,
                        grorp: data.bgroup,
                        sorts: data.sorts,
                        depth: data.depth,
                        topic: props.topic,
                        postId: props.postId,
                    };
                    return [4 /*yield*/, axios_1.default.saveReply(saveData, props.token)];
                case 1:
                    result = _a.sent();
                    _list = result.data.comment.data.filter(function (e) {
                        return e.bgroup === data.bgroup
                            && e.sorts >= data.sorts
                            && e.parent === data.board
                            && e.depth === data.depth + 1;
                    });
                    if (inputRef.current && preInputRef.current) {
                        inputRef.current.style.display = "";
                        preInputRef.current.style.display = "block";
                    }
                    setDepthComment(_list);
                    props.setNewRequset(true);
                    props.getComment(props.postId);
                    setReplyValue(initial.reply);
                    return [2 /*return*/];
            }
        });
    }); };
    var onClickReplyBtn = function () {
        var _list = props.list.filter(function (e, i) { return e.bgroup === props.data.bgroup && e.depth === props.data.depth + 1 && e.parent === props.data.board; });
        setClick(!click);
        setDepthComment(_list);
        if (inputRef.current && preInputRef.current)
            _list.length ? preInputRef.current.style.display = "block" : inputRef.current.style.display = "block";
    };
    var onClickCancelBtn = function () {
        setClick(!click);
        if (inputRef.current && preInputRef.current) {
            setDepthComment([]);
            // inputRef.current.style.display = "";
            preInputRef.current.style.display = "";
        }
    };
    var onClickPreInputRefBox = function (e) {
        if (e.target.textContent === "댓글달기" && inputRef.current && preInputRef.current) {
            inputRef.current.style.display = "block";
            preInputRef.current.style.display = "";
        }
        else if (inputRef.current) {
            e.target.textContent = "댓글달기";
            inputRef.current.style.display = "";
        }
    };
    var onClickcancelBtn = function () {
        if (preInputRef.current && inputRef.current) {
            preInputRef.current.style.display = "block";
            inputRef.current.style.display = "";
        }
    };
    var childCommentCount = function (board) {
        var childCommentArr = [];
        return findDepthComment(board, childCommentArr);
    };
    var onClickDeleteCommentBtn = function (e) {
        e.currentTarget.nextSibling.classList.toggle("visible");
    };
    var deleteComment = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var target, deleteArr, data, sendData, result;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    target = (_b = (_a = e.currentTarget.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
                    deleteArr = [];
                    data = findDepthComment(props.data.board, deleteArr);
                    sendData = {
                        board: props.data.board,
                        user: deleteValue.user,
                        pwd: deleteValue.pwd,
                        topic: props.topic,
                        postsId: props.postId,
                        deleteArr: __spread(data, [props.data.board]),
                    };
                    return [4 /*yield*/, axios_1.default.deleteComment(sendData, props.token)];
                case 1:
                    result = _c.sent();
                    result.data.state
                        ? target.style.display = "none"
                        : alert("정보가 일치하지 않습니다.");
                    setDeleteValue(initial.deleteData);
                    props.getComment(props.postId);
                    props.setNewRequset(true);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(styledComponent_1.CommentItemComp, { ref: ref, depth: props.data.depth, className: "depth" + props.data.depth },
        react_1.default.createElement("section", { className: "comment_item_userBox" },
            react_1.default.createElement("span", { className: "user_metaData-username" },
                react_1.default.createElement(ai_1.AiOutlineComment, { className: "username-icons" }),
                props.data.writer),
            react_1.default.createElement("span", { className: "user_metaData-date" }, props.data.created),
            react_1.default.createElement("span", { className: "delete_comment-btn", onClick: onClickDeleteCommentBtn },
                react_1.default.createElement(ri_1.RiDeleteBack2Line, null)),
            react_1.default.createElement("div", { className: "delete-user-data" },
                react_1.default.createElement("input", { type: "text", name: "user", onChange: onChangeDeleteValue, placeholder: "\uC791\uC131\uC790" }),
                react_1.default.createElement("input", { type: "password", name: "pwd", onChange: onChangeDeleteValue, placeholder: "\uC554\uD638" }),
                react_1.default.createElement("button", { onClick: deleteComment },
                    react_1.default.createElement("span", null, "\uC0AD\uC81C")))),
        react_1.default.createElement("section", { className: "comment__data" },
            react_1.default.createElement("article", { dangerouslySetInnerHTML: makeComment(props.data) })),
        react_1.default.createElement("footer", null, !click
            ?
                react_1.default.createElement("div", { className: "add-comment_btn", onClick: onClickReplyBtn }, childCommentCount(props.data.board).length
                    ?
                        react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("span", { className: "add-comment_btn_icon" },
                                react_1.default.createElement(fi_1.FiPlusCircle, null)),
                            react_1.default.createElement("span", null,
                                childCommentCount(props.data.board).length,
                                "\uAC1C\uC758 \uB313\uAE00"))
                    :
                        react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("span", { className: "add-comment_btn_icon" },
                                react_1.default.createElement(fi_1.FiPlusCircle, null)),
                            react_1.default.createElement("span", null, "\uB313\uAE00\uCD94\uAC00\uD558\uAE30")))
            :
                react_1.default.createElement("div", { className: "cancel_comment-btn", onClick: onClickCancelBtn },
                    react_1.default.createElement("span", null,
                        react_1.default.createElement(ai_1.AiOutlineMinusSquare, { className: "cancel-comment_btn_icon" })),
                    react_1.default.createElement("span", null, "\uCDE8\uC18C\uD558\uAE30"))),
        depthComment.map(function (e) { return (react_1.default.createElement(CommentItem, { data: e, topic: props.topic, postId: props.postId, token: props.token, list: props.list, setNewRequset: props.setNewRequset, getComment: props.getComment })); }),
        react_1.default.createElement("section", { className: "commnet__reply-box-exist", ref: preInputRef, onClick: onClickPreInputRefBox },
            react_1.default.createElement("button", null, "\uB313\uAE00\uB2EC\uAE30")),
        react_1.default.createElement("section", { className: "comment__reply-box", ref: inputRef },
            react_1.default.createElement("textarea", { name: "value", value: replyValue.value, placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", className: "cmt__value-input", onChange: onChangeValue }),
            react_1.default.createElement("div", { className: "comment__user_data_box comment__item_user_data_box" },
                react_1.default.createElement("div", { className: "comment__user_data comment__item__user_data" },
                    react_1.default.createElement("input", { type: "text", name: "user", value: replyValue.user, placeholder: "\uC791\uC131\uC790", onChange: onChangeValue }),
                    react_1.default.createElement("input", { type: "password", name: "pwd", value: replyValue.pwd, placeholder: "\uBE44\uBC00\uBC88\uD638", onChange: onChangeValue })),
                react_1.default.createElement("div", { className: "comment__reply-btn-box" },
                    react_1.default.createElement("button", { onClick: onClickcancelBtn }, "\uCDE8\uC18C"),
                    react_1.default.createElement("button", { onClick: function (e) { return onSubmitReply(e, props.data); } }, "\uB4F1\uB85D\uD558\uAE30"))))));
});
exports.default = react_1.default.memo(CommentItem);
