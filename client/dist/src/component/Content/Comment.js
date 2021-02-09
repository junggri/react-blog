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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_comp_1 = require("../../styled-comp");
var useCSRF_1 = __importDefault(require("../../useHooks/useCSRF"));
var useComment_1 = __importDefault(require("../../useHooks/useComment"));
var CommentItems_1 = __importDefault(require("./CommentItems"));
var react_redux_1 = require("react-redux");
var PreloadContext_1 = require("../../lib/PreloadContext");
var Comment_1 = require("../../modules/Comment");
var axios_1 = __importDefault(require("../../lib/axios"));
var fa_1 = require("react-icons/fa");
function CommentContainer(_a) {
    var _this = this;
    var postid = _a.postid;
    var csrf = useCSRF_1.default();
    var dispatch = react_redux_1.useDispatch();
    var _b = useComment_1.default(), list = _b.list, getComment = _b.getComment;
    var _c = react_1.useState(""), cmt = _c[0], setCmt = _c[1];
    var _d = react_1.useState({
        cmt_user: "",
        cmt_pwd: "",
    }), auth = _d[0], setAuth = _d[1];
    PreloadContext_1.usePreloader(function () { return dispatch(Comment_1.onGetComment(postid)); });
    react_1.useEffect(function () {
        getComment(postid);
    }, [postid]);
    var onChangeCmt = function (e) {
        setCmt(e.target.value);
    };
    var onChangeAuth = function (e) {
        var _a;
        setAuth(__assign(__assign({}, auth), (_a = {}, _a[e.currentTarget.name] = e.currentTarget.value, _a)));
    };
    var onSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var grp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (cmt === "")
                        return [2 /*return*/, alert("글을 입력해주세요")];
                    if (!auth.cmt_pwd || !auth.cmt_pwd)
                        return [2 /*return*/, alert("댓글을 작성하시려면 아이디와 비밀번호를 입력해주세요")];
                    grp = e.currentTarget.parentNode.parentNode.parentNode.dataset.grp;
                    return [4 /*yield*/, axios_1.default.saveComment(cmt, grp, postid, auth.cmt_user, auth.cmt_pwd, csrf)];
                case 1:
                    _a.sent();
                    getComment(postid);
                    setCmt("");
                    setAuth({
                        cmt_user: "",
                        cmt_pwd: "",
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    if (list === null)
        return null;
    return (react_1.default.createElement(styled_comp_1.CommentContainerComp, { "data-grp": !list.length ? 1 : list[list.length - 1].bgroup + 1 },
        react_1.default.createElement("div", { className: "cmt-slo-box" },
            react_1.default.createElement(fa_1.FaRegCommentDots, { className: "cmt-icons" }),
            react_1.default.createElement("span", { className: "cmt-slo" }, "comment")),
        react_1.default.createElement(styled_comp_1.CommentInputItem, null,
            react_1.default.createElement("textarea", { placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: cmt, onChange: onChangeCmt }),
            react_1.default.createElement("div", { className: "cmt-login" },
                react_1.default.createElement("input", { type: "text", name: "cmt_user", value: auth.cmt_user, placeholder: "\uC774\uB984", onChange: onChangeAuth }),
                react_1.default.createElement("input", { type: "password", name: "cmt_pwd", value: auth.cmt_pwd, placeholder: "\uBE44\uBC00\uBC88\uD638", onChange: onChangeAuth }),
                react_1.default.createElement("div", { className: "cmt-submit-btn", onClick: onSubmit },
                    react_1.default.createElement("span", null, "\uB4F1\uB85D\uD558\uAE30")))),
        react_1.default.createElement("div", { className: "blank_space" }),
        !list.length ? null :
            list.filter(function (e, i) {
                if (e.sorts === 0)
                    return list[i];
            }).map(function (e, i) { return (react_1.default.createElement(CommentItems_1.default, { key: i, e: e, csrf: csrf, list: list, getComment: getComment, postid: postid })); }),
        react_1.default.createElement("div", { style: { height: "120px" } })));
}
exports.default = react_1.default.memo(CommentContainer);
