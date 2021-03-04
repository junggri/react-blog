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
var styledComponent_1 = require("../../styledComponent");
var md_1 = require("react-icons/md");
var ai_1 = require("react-icons/ai");
var axios_1 = __importDefault(require("@lib/axios"));
var SelectTopic = function (_a) {
    var topic = _a.topic, onIsChecked = _a.onIsChecked, checked = _a.checked, token = _a.token, onRequestAfterMakeOrDeleteTopic = _a.onRequestAfterMakeOrDeleteTopic;
    var _b = __read(react_1.useState(""), 2), value = _b[0], setValue = _b[1];
    var parentRef = react_1.useRef(null);
    var topicList = react_1.useMemo(function () { return topic === null || topic === void 0 ? void 0 : topic.map(function () { return react_1.default.createRef(); }); }, [topic]);
    var onChange = function (e) {
        onIsChecked(e.target.value);
    };
    var deleteTopic = function (e, ref) { return __awaiter(void 0, void 0, void 0, function () {
        var topic_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.confirm("토픽을 삭제하겠습니까?")) return [3 /*break*/, 3];
                    topic_1 = e.currentTarget.dataset.topic;
                    if (!(topic_1 && token)) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1.default.deleteTopic(topic_1, token)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    ref.current.style.display = "none";
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var createTopic = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!value)
                        return [2 /*return*/];
                    if (!(token && parentRef.current)) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1.default.createTopic(value, token)];
                case 1:
                    _a.sent();
                    onRequestAfterMakeOrDeleteTopic(token);
                    setValue("");
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var onChangeValue = function (e) {
        setValue(e.target.value);
    };
    if (topicList === undefined)
        return null;
    return (react_1.default.createElement(styledComponent_1.SelectTopicComp, null,
        react_1.default.createElement("h1", null, "Select Topic"),
        react_1.default.createElement("div", { className: "select-item-box", ref: parentRef }, topic && topic.map(function (e, i) { return (react_1.default.createElement("div", { className: "select-items", ref: topicList[i], key: e["Tables_in_contents"] },
            react_1.default.createElement(styledComponent_1.SelectTopicItempComp, null,
                react_1.default.createElement("input", { className: "select-input", type: "radio", id: e["Tables_in_contents"], onChange: onChange, value: e["Tables_in_contents"], name: 'post', checked: e["Tables_in_contents"] === checked }),
                react_1.default.createElement("label", { className: "select-label", htmlFor: e["Tables_in_contents"] }, e["Tables_in_contents"])),
            react_1.default.createElement(styledComponent_1.DeleteBtnComp, { "data-topic": e.Tables_in_contents, onClick: function (e) { return deleteTopic(e, topicList[i]); } },
                react_1.default.createElement(md_1.MdDelete, null)))); })),
        react_1.default.createElement("div", { className: "make_new_topic_box", onClick: createTopic },
            react_1.default.createElement("input", { type: "text", name: "new_topic_name", value: value, onChange: onChangeValue }),
            react_1.default.createElement("span", null,
                react_1.default.createElement(ai_1.AiOutlinePlus, null)))));
};
exports.default = react_1.default.memo(SelectTopic);
