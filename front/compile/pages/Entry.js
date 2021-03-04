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
var styledComponent_1 = require("../styledComponent");
var react_router_dom_1 = require("react-router-dom");
var useLoginFlag_1 = __importDefault(require("@useHooks/useLoginFlag"));
var usePosts_1 = __importDefault(require("@useHooks/usePosts"));
var useCommon_1 = __importDefault(require("@useHooks/useCommon"));
var useCSRF_1 = __importDefault(require("@useHooks/useCSRF"));
var react_redux_1 = require("react-redux");
var index_1 = require("@component/index");
var axios_1 = __importDefault(require("@lib/axios"));
var Entry = function (_a) {
    var match = _a.match;
    useLoginFlag_1.default();
    var dispatch = react_redux_1.useDispatch();
    var csrf = useCSRF_1.default();
    var _b = useCommon_1.default(), login = _b.login, newRequest = _b.newRequest, setNewRequset = _b.setNewRequset, onGetGaCount = _b.onGetGaCount, count = _b.count;
    var _c = usePosts_1.default(), AllPosts = _c.AllPosts, getAllPosts = _c.getAllPosts, onClearPost = _c.onClearPost, getPosts = _c.getPosts, posts = _c.posts;
    // usePreloader(() => dispatch(onRequestAllPosts({})));
    react_1.useEffect(function () {
        if (newRequest) {
            getAllPosts();
            setNewRequset(false);
        }
    }, [getAllPosts, newRequest, setNewRequset]);
    react_1.useEffect(function () {
        onGetGaCount();
    }, [onGetGaCount]);
    var deletePost = react_1.useCallback(function (topic, identifier) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!csrf) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1.default.deletePost(topic, identifier, csrf)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    setNewRequset(true);
                    return [2 /*return*/];
            }
        });
    }); }, [csrf, setNewRequset]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        login &&
            react_1.default.createElement(styledComponent_1.WriteBoxBtnComp, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/write" }, "\uC0C8\uAE00\uC4F0\uAE30")),
        react_1.default.createElement(index_1.NavBar, null),
        react_1.default.createElement(styledComponent_1.MainContainerComp, null,
            react_1.default.createElement(index_1.SideNavBar, { data: AllPosts.data, count: count }),
            react_1.default.createElement("div", { className: "post-item-container" },
                react_1.default.createElement(react_router_dom_1.Route, { path: ["/"], exact: true, render: function () {
                        return react_1.default.createElement(index_1.EntryPostContainer, { data: AllPosts.data, onDelete: deletePost });
                    } }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/tag/:topic", exact: true, render: function () {
                        return react_1.default.createElement(index_1.TagPostContainer, { data: AllPosts.data, topic: match.params.topic, onDelete: deletePost });
                    } })),
            react_1.default.createElement("footer", null,
                react_1.default.createElement("div", { className: "sidebar-copyright" }, "Copyright 2021. junggri All rights reserved.")))));
};
exports.default = Entry;
