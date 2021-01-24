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
var styled_comp_1 = require("../styled-comp");
var useHelmet_1 = __importDefault(require("../useHooks/useHelmet"));
var useCommon_1 = __importDefault(require("../useHooks/useCommon"));
var usePosts_1 = __importDefault(require("../useHooks/usePosts"));
var component_1 = require("../component");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = __importDefault(require("../lib/axios"));
var useCSRF_1 = __importDefault(require("../useHooks/useCSRF"));
var useLoginFlag_1 = __importDefault(require("../useHooks/useLoginFlag"));
function SSREntry(_a) {
    var _this = this;
    var match = _a.match, location = _a.location;
    useLoginFlag_1.default();
    var csrf = useCSRF_1.default();
    var _b = useCommon_1.default(), login = _b.login, count = _b.count, newRequest = _b.newRequest, setNewRequset = _b.setNewRequset;
    var _c = usePosts_1.default(), AllPosts = _c.AllPosts, getAllPosts = _c.getAllPosts;
    react_1.useEffect(function () {
        if (newRequest) {
            getAllPosts();
            setNewRequset(false);
        }
    }, [getAllPosts, newRequest, setNewRequset]);
    var onDelete = react_1.useCallback(function (e) {
        var uid = e.currentTarget.parentNode.dataset.id;
        var topic = e.currentTarget.parentNode.dataset.topic;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.deletePost(uid, topic, csrf)];
                    case 1:
                        _a.sent();
                        getAllPosts();
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [csrf, getAllPosts]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled_comp_1.EntryContainerComp, null,
            react_1.default.createElement(useHelmet_1.default, { keywords: "nodejs 그리고 자바스크립트의 이야기들", description: "자바스크립트부터 웹까지의 전반적인 이야기와 나의 성장이야기", title: "junggri 블로그" }),
            react_1.default.createElement(component_1.SideBarContainer, { topic: AllPosts, login: login, location: location }),
            react_1.default.createElement(react_router_dom_1.Route, { path: ["/", "/post"], exact: true, render: function () { return (react_1.default.createElement(component_1.EntryPostsContainer, { posts: AllPosts, onDelete: onDelete, login: login, csrf: csrf })); } }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/tags", exact: true, render: function () { return (react_1.default.createElement(component_1.EntryPostsContainer, { posts: AllPosts, onDelete: onDelete, login: login, csrf: csrf })); } }))));
}
exports.default = SSREntry;
