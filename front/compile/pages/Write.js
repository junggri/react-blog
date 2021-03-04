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
var axios_1 = __importDefault(require("@lib/axios"));
var qs = __importStar(require("qs"));
var snow_1 = require("../styles/snow");
var textEditor_config_1 = require("@config/textEditor.config");
var styledComponent_1 = require("../styledComponent");
var component_1 = require("../component");
var useCSRF_1 = __importDefault(require("@useHooks/useCSRF"));
var useTopic_1 = __importDefault(require("@useHooks/useTopic"));
var useCommon_1 = __importDefault(require("@useHooks/useCommon"));
var useTextEdit_1 = __importDefault(require("@useHooks/useTextEdit"));
var checkUserState_1 = __importDefault(require("@lib/checkUserState"));
var validationWrite_1 = __importDefault(require("@lib/validationWrite"));
//TODO 임시저장 저장/또 임시저장 그리고 axios extension 공부하기
var Write = function (_a) {
    var history = _a.history, location = _a.location;
    var ReactQuill = typeof window === "object" ? require("react-quill") : function () { return false; };
    var csrf = useCSRF_1.default();
    var _b = __read(react_1.useState("write"), 2), mode = _b[0], setMode = _b[1];
    var textEdit = react_1.useRef(null);
    var _c = __read(react_1.useState(false), 2), fetch = _c[0], setFetch = _c[1];
    var _d = useCommon_1.default(), setNewRequset = _d.setNewRequset, login = _d.login;
    var _e = useTopic_1.default(), tableName = _e.tableName, tempPostList = _e.tempPostList, requestTopicAndTempPostData = _e.requestTopicAndTempPostData;
    var _f = useTextEdit_1.default(), data = _f.data, setContent = _f.setContent, setContentName = _f.setContentName, setTopic = _f.setTopic, setKindOfPosts = _f.setKindOfPosts, setDetail = _f.setDetail, setTempData = _f.setTempData, setThumbnail = _f.setThumbnail;
    var getDataFromMode = react_1.useCallback(function (mode, cb) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cb];
                case 1:
                    data = (_a.sent()).data;
                    if (textEdit.current)
                        textEdit.current.editor.scrollingContainer.innerHTML = data.data.getDataFromMode.content;
                    setTempData({
                        contentName: data.data.getDataFromMode.postdata.content_name,
                        topicName: data.data.getDataFromMode.postdata.topic,
                        kindofPosts: data.data.getDataFromMode.postdata.kindofPosts,
                        detail: data.data.getDataFromMode.postdata.detail,
                        thumbnail: data.data.getDataFromMode.postdata.thumbnail,
                    });
                    return [2 /*return*/];
            }
        });
    }); }, [setTempData]);
    react_1.useEffect(function () {
        if (Object.entries(qs.parse(location.search))[0]) { //수정이나 임시저장을 불러올때 사용되는 것들
            var mode_1 = Object.entries(qs.parse(location.search))[0][0];
            var identifier = Object.entries(qs.parse(location.search))[0][1];
            if (mode_1 === "?temp" && csrf && typeof identifier === "string" && !fetch) {
                getDataFromMode(mode_1, axios_1.default.getDataFromMode(csrf, identifier));
            }
            else if (mode_1 === "?update" && csrf && typeof identifier === "string") {
                var topic = Object.entries(qs.parse(location.search))[1][1];
                if (typeof topic === "string")
                    getDataFromMode(mode_1, axios_1.default.getDataFromMode(csrf, identifier, topic));
            }
            setMode(mode_1.split("?")[1]);
            setFetch(false);
        }
        else {
            setMode("write");
        }
    }, [location, csrf, tempPostList, setFetch, fetch, getDataFromMode]);
    react_1.useEffect(function () {
        var status = checkUserState_1.default();
        if (csrf && !tempPostList && !tableName)
            requestTopicAndTempPostData(csrf);
        if (!status)
            history.push("/");
        if (textEdit.current)
            textEdit.current.focus();
        return function () { return setTempData({
            contentName: "",
            content: "",
            topicName: "",
            kindofPosts: "",
            detail: "",
            thumbnail: null,
        }); };
    }, [csrf, setTempData, login, history, requestTopicAndTempPostData, tempPostList, tableName]);
    var onContentChange = react_1.useCallback(function (data) {
        setContentName(data);
    }, [setContentName]);
    var rteChange = react_1.useCallback(function (content, delta, source, editor) {
        if (textEdit.current)
            setContent(textEdit.current.state.value);
    }, [setContent]);
    var onIsChecked = react_1.useCallback(function (name) {
        setTopic(name);
    }, [setTopic]);
    var onCheckKindOfPosts = react_1.useCallback(function (kindOf) {
        setKindOfPosts(kindOf);
    }, [setKindOfPosts]);
    var onDetailChange = react_1.useCallback(function (detail) {
        setDetail(detail);
    }, [setDetail]);
    var onChangeThumbnail = react_1.useCallback(function (img) {
        setThumbnail(img);
    }, [setThumbnail]);
    var onRequestAfterMakeOrDeleteTopic = react_1.useCallback(function (csrf) {
        requestTopicAndTempPostData(csrf);
    }, [requestTopicAndTempPostData]);
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var valiidation, identifier, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    valiidation = validationWrite_1.default(data);
                    if (!valiidation)
                        alert("정보를 입력하세요");
                    identifier = Object.values(qs.parse(location.search))[0];
                    if (!(valiidation && csrf)) return [3 /*break*/, 8];
                    if (!(mode === "write")) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1.default.savePost({ data: data, csrf: csrf })];
                case 1:
                    _a = _c.sent();
                    return [3 /*break*/, 7];
                case 2:
                    if (!(mode === "temp")) return [3 /*break*/, 4];
                    return [4 /*yield*/, axios_1.default.deleteTemporaryPostAndSavePost(data, identifier, csrf)];
                case 3:
                    _b = _c.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, axios_1.default.updatePost(data, identifier, csrf)];
                case 5:
                    _b = _c.sent();
                    _c.label = 6;
                case 6:
                    _a = _b;
                    _c.label = 7;
                case 7:
                    _a;
                    setNewRequset(true);
                    onRequestAfterMakeOrDeleteTopic(csrf);
                    history.push("/");
                    _c.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var onSubmitTemporaryPost = function () { return __awaiter(void 0, void 0, void 0, function () {
        var temp_uid, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (data.contentName === "")
                        return [2 /*return*/];
                    temp_uid = Object.values(qs.parse(location.search))[0];
                    if (!csrf) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1.default.saveTemporaryPost(data, csrf, temp_uid)];
                case 1:
                    result = _a.sent();
                    onRequestAfterMakeOrDeleteTopic(csrf);
                    if (result.status === 200)
                        history.push("/");
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var deleteTemporaryPost = react_1.useCallback(function (identifier, ref) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(csrf && ref.current)) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1.default.deleteTemporaryPost(identifier, csrf)];
                case 1:
                    _a.sent();
                    onRequestAfterMakeOrDeleteTopic(csrf);
                    ref.current.style.display = "none";
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [csrf, onRequestAfterMakeOrDeleteTopic]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(snow_1.Snow, null),
        react_1.default.createElement(ReactQuill, { theme: "snow", modules: textEditor_config_1.modules, formats: textEditor_config_1.formats, onChange: rteChange, placeholder: "\uC785\uB825\uD558\uAE30", ref: textEdit }),
        react_1.default.createElement(styledComponent_1.WriteMetaContainer, null,
            react_1.default.createElement(component_1.TextEditContentName, { onContentChange: onContentChange, onDetailChange: onDetailChange, detail: data.detail, contentName: data.contentName }),
            react_1.default.createElement(component_1.SelectTopic, { topic: tableName, onIsChecked: onIsChecked, checked: data.topicName, onRequestAfterMakeOrDeleteTopic: onRequestAfterMakeOrDeleteTopic, token: csrf }),
            react_1.default.createElement(component_1.KindofPosts, { onCheck: onCheckKindOfPosts, checked: data.kindofPosts }),
            react_1.default.createElement(component_1.ThumbNail, { token: csrf, onChangeThumbnail: onChangeThumbnail }),
            react_1.default.createElement(component_1.TemporaryPost, { temp: tempPostList, deleteTemporaryPost: deleteTemporaryPost }),
            react_1.default.createElement(component_1.TextEditorBtnBox, { onSubmit: onSubmit, onSubmitTempPost: onSubmitTemporaryPost }))));
};
exports.default = Write;
