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
var axios_1 = __importDefault(require("../../lib/axios"));
var textEditor_config_1 = require("../../config/textEditor.config");
var styled_comp_1 = require("../../styled-comp");
var useTopic_1 = __importDefault(require("../../useHooks/useTopic"));
var useTextEdit_1 = __importDefault(require("../../useHooks/useTextEdit"));
var useCSRF_1 = __importDefault(require("../../useHooks/useCSRF"));
var useCommon_1 = __importDefault(require("../../useHooks/useCommon"));
var index_1 = require("../index");
var query_string_1 = __importDefault(require("query-string"));
var Editor = function (_a) {
    var history = _a.history, location = _a.location;
    var ReactQuill = typeof window === "object" ? require("react-quill") : function () { return false; };
    var csrf = useCSRF_1.default();
    var ref = react_1.useRef(null);
    var _b = react_1.useState("write"), mode = _b[0], setMode = _b[1];
    var _c = react_1.useState([]), temp = _c[0], setTemp = _c[1];
    var setNewRequset = useCommon_1.default().setNewRequset;
    var _d = useTopic_1.default(), topic = _d.topic, requestTopic = _d.requestTopic;
    var _e = useTextEdit_1.default(), data = _e.data, setContent = _e.setContent, setContentName = _e.setContentName, setTopic = _e.setTopic, setKindOfPosts = _e.setKindOfPosts, setDetail = _e.setDetail, setTempData = _e.setTempData;
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.getTempPost()];
                    case 1:
                        data = (_a.sent()).data;
                        setTemp(data);
                        return [2 /*return*/];
                }
            });
        }); })();
        return function () { return setTempData({
            contentName: "",
            content: "",
            topicName: "",
            kindofPosts: "",
            detail: "",
        }); };
    }, [setTempData]);
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.checkJWTToken()];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data.decoded) {
                            history.push("/");
                        }
                        else {
                            requestTopic();
                            ref.current.focus();
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [history, requestTopic]);
    var howToSave = react_1.useCallback(function (mode, cb, _data) {
        setMode(mode);
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cb];
                    case 1:
                        data = (_a.sent()).data;
                        ref.current.editor.scrollingContainer.innerHTML = mode === "temp" ? data : data.content;
                        setTempData({
                            contentName: mode === "temp" ? _data === null || _data === void 0 ? void 0 : _data.content_name : data.result[0].content_name,
                            content: mode === "temp" ? "" : data.content,
                            topicName: mode === "temp" ? _data === null || _data === void 0 ? void 0 : _data.topic : data.result[0].topic,
                            kindofPosts: mode === "temp" ? "" : data.result[0].kindofPosts,
                            detail: mode === "temp" ? _data === null || _data === void 0 ? void 0 : _data.detail : data.result[0].detail,
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [setTempData]);
    react_1.useEffect(function () {
        var _qs = query_string_1.default.parse(location.search);
        if (Object.keys(_qs)[0] === "temp" && temp.length !== 0) {
            var post = temp.filter(function (e) { return e.uid === Object.values(_qs)[0]; });
            howToSave("temp", axios_1.default.getTempPostFromId(Object.values(_qs)[0]), post[0]);
        }
        else if (Object.keys(_qs)[0] === "modify") {
            howToSave("modify", axios_1.default.getPostFromPostId(Object.values(_qs)[1], Object.values(_qs)[0]));
        }
    }, [setTempData, temp, location, howToSave]);
    var onNameChange = react_1.useCallback(function (data) {
        setContentName(data);
    }, [setContentName]);
    var rteChange = react_1.useCallback(function (content, delta, source, editor) {
        setContent(ref.current.state.value);
    }, [setContent]);
    var onIsChecked = react_1.useCallback(function (name) {
        setTopic(name);
    }, [setTopic]);
    var onCheckKindOfPosts = react_1.useCallback(function (kindOf) {
        setKindOfPosts(kindOf);
    }, [setKindOfPosts]);
    var onChangeDetail = react_1.useCallback(function (detail) {
        setDetail(detail);
    }, [setDetail]);
    var onMakeOrDelteTopic = react_1.useCallback(function () {
        requestTopic();
    }, [requestTopic]);
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(data.content === "" || data.contentName === "" || data.detail === "" || data.kindofPosts === "" || data.topicName === "")) return [3 /*break*/, 1];
                    alert("정보를 입력하세요");
                    return [3 /*break*/, 9];
                case 1:
                    if (!(mode === "write")) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios_1.default.savePost(data, csrf)];
                case 2:
                    _a = _c.sent();
                    return [3 /*break*/, 8];
                case 3:
                    if (!(mode === "temp")) return [3 /*break*/, 5];
                    return [4 /*yield*/, axios_1.default.saveTempPost(data, Object.values(query_string_1.default.parse(location.search))[0], csrf)];
                case 4:
                    _b = _c.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, axios_1.default.modifyPost(data, Object.values(query_string_1.default.parse(location.search))[0], csrf)];
                case 6:
                    _b = _c.sent();
                    _c.label = 7;
                case 7:
                    _a = _b;
                    _c.label = 8;
                case 8:
                    result = _a;
                    if (result.request.status === 200)
                        history.push("/");
                    setNewRequset(true);
                    _c.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var onSaveTemporaryPost = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.temporaryPost(data, csrf)];
                case 1:
                    result = _a.sent();
                    if (result.request.status === 200)
                        history.push("/");
                    return [2 /*return*/];
            }
        });
    }); };
    var onDelete = react_1.useCallback(function (target) {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.deleteTempPost(target, csrf)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
        var new_temp = temp.filter(function (e) { return e.uid !== target; });
        setTemp(new_temp);
    }, [temp, csrf]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled_comp_1.WriteBox, null,
            react_1.default.createElement(index_1.WriteTopicName, { onNameChange: onNameChange, value: data.contentName }),
            react_1.default.createElement(ReactQuill, { theme: "snow", onChange: rteChange, modules: textEditor_config_1.modules, formats: textEditor_config_1.formats, placeholder: "\uC785\uB825\uD558\uC138\uC694.", ref: ref })),
        react_1.default.createElement(styled_comp_1.WriteConditionBox, null,
            react_1.default.createElement(index_1.SelectTopic, { onIsChecked: onIsChecked, topic: topic, checked: data.topicName }),
            react_1.default.createElement(index_1.CreateNewTopic, { topic: topic, token: csrf, onMakeOrDelteTopic: onMakeOrDelteTopic }),
            react_1.default.createElement(index_1.KindOfPosts, { onCheck: onCheckKindOfPosts, checked: data.kindofPosts }),
            react_1.default.createElement(index_1.PostsDetail, { onChangeDetail: onChangeDetail, detailValue: data.detail }),
            react_1.default.createElement(index_1.TextEditBtnBox, { onSubmit: onSubmit, onSaveTemporaryPost: onSaveTemporaryPost }),
            react_1.default.createElement(index_1.StoragePost, { temp: temp, onDelete: onDelete }))));
};
exports.default = Editor;
