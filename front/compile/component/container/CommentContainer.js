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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styledComponent_1 = require("@src/styledComponent");
var component_1 = require("@src/component");
var useCSRF_1 = __importDefault(require("@useHooks/useCSRF"));
var useComment_1 = __importDefault(require("@useHooks/useComment"));
var useCommon_1 = __importDefault(require("@useHooks/useCommon"));
var axios_1 = __importDefault(require("@lib/axios"));
var CommentContainer = function (_a) {
    var topic = _a.topic, postId = _a.postId, contentName = _a.contentName;
    var csrf = useCSRF_1.default();
    var _b = useComment_1.default(), list = _b.list, getComment = _b.getComment;
    var setNewRequset = useCommon_1.default().setNewRequset;
    var _c = __read(react_1.useState({
        value: "",
        cmtName: "",
        cmtPwd: "",
    }), 2), commentValue = _c[0], setCommentValue = _c[1];
    var commentList = react_1.useMemo(function () { return list === null || list === void 0 ? void 0 : list.map(function () { return react_1.default.createRef(); }); }, [list]);
    react_1.useEffect(function () {
        getComment(postId);
    }, [postId]);
    var onChangeCommentValue = function (e) {
        var _a;
        setCommentValue(__assign(__assign({}, commentValue), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var onSubmitComment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var group, saveData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!commentValue.cmtPwd || !commentValue.value || !commentValue.cmtName)
                        alert("정보를 입력해주세요.");
                    if (!(csrf && list)) return [3 /*break*/, 2];
                    group = !list.length ? 1 : list[list.length - 1].bgroup + 1;
                    saveData = {
                        value: commentValue.value,
                        user: commentValue.cmtName,
                        pwd: commentValue.cmtPwd,
                        group: group,
                        topic: topic,
                        postId: postId,
                        contentName: contentName,
                    };
                    return [4 /*yield*/, axios_1.default.saveComment(saveData, csrf)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    setCommentValue({
                        value: "",
                        cmtName: "",
                        cmtPwd: "",
                    });
                    getComment(postId);
                    setNewRequset(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var depthZeroComment = react_1.useMemo(function () { return list === null || list === void 0 ? void 0 : list.filter(function (e) { return e.sorts === 0; }); }, [list]);
    if (!commentList)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styledComponent_1.CommentContainerComp, null,
            react_1.default.createElement("header", { className: "comment__header-box" },
                react_1.default.createElement("h1", null, "\uAC1C\uC758 \uB313\uAE00\uC774 \uC788\uC2B5\uB2C8\uB2E4.")),
            react_1.default.createElement("section", { className: "comment-parent-input-box" },
                react_1.default.createElement("textarea", { name: "value", value: commentValue.value, placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", className: "cmt__value-input", onChange: onChangeCommentValue }),
                react_1.default.createElement("div", { className: "comment__user_data_box" },
                    react_1.default.createElement("div", { className: "comment__user_data" },
                        react_1.default.createElement("input", { type: "text", name: "cmtName", value: commentValue.cmtName, placeholder: "\uC791\uC131\uC790", onChange: onChangeCommentValue }),
                        react_1.default.createElement("input", { type: "password", name: "cmtPwd", value: commentValue.cmtPwd, placeholder: "\uBE44\uBC00\uBC88\uD638", onChange: onChangeCommentValue })),
                    react_1.default.createElement("button", { onClick: onSubmitComment }, "\uB4F1\uB85D\uD558\uAE30"))),
            csrf && list && (depthZeroComment === null || depthZeroComment === void 0 ? void 0 : depthZeroComment.map(function (e, i) {
                return react_1.default.createElement(component_1.CommentItem, { key: e.bgroup, data: e, topic: topic, postId: postId, token: csrf, list: list, ref: commentList[i], getComment: getComment, setNewRequset: setNewRequset });
            }))),
        react_1.default.createElement("div", { style: { height: "100px" } })));
};
exports.default = react_1.default.memo(CommentContainer);
