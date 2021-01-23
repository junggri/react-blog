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
var md_1 = require("react-icons/md");
var io_1 = require("react-icons/io");
var axios_1 = __importDefault(require("../../lib/axios"));
function CreateNewTopic(_a) {
    var _this = this;
    var topic = _a.topic, token = _a.token, onMakeOrDelteTopic = _a.onMakeOrDelteTopic;
    var _b = react_1.useState(false), click = _b[0], setClick = _b[1];
    var _c = react_1.useState(""), newTopic = _c[0], setNewtopic = _c[1];
    var setNewTopicName = function (e) {
        setNewtopic(e.target.value);
    };
    var previousMakeNewTopic = function () {
        setClick(!click);
    };
    var makeNewTopic = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.makeNewTopic(newTopic, token)];
                case 1:
                    _a.sent();
                    onMakeOrDelteTopic();
                    setClick(!click);
                    setNewtopic("");
                    return [2 /*return*/];
            }
        });
    }); };
    var deleteTopic = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.confirm("정말로 삭제하겠습니까? 삭제하면 정보가 다사라집니다.")) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1.default.deleteTopic((e.currentTarget.dataset.topic), token)];
                case 1:
                    _a.sent();
                    onMakeOrDelteTopic();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    //TODO 엔터 입력시 만들어버리게
    if (topic === null)
        return null;
    return (react_1.default.createElement(styled_comp_1.CreateNewTopicComp, null,
        react_1.default.createElement("h1", null, "\uD1A0\uD53D\uAD00\uB9AC\uD558\uAE30"),
        react_1.default.createElement(styled_comp_1.CreateNewTopicListBoxComp, null, topic.map(function (v) { return (react_1.default.createElement(styled_comp_1.CreateNewTopicListItemComp, { key: v["Tables_in_contents"] },
            react_1.default.createElement("span", null, v["Tables_in_contents"]),
            react_1.default.createElement(styled_comp_1.DeleteTopicIconComp, { onClick: deleteTopic, "data-topic": v["Tables_in_contents"] },
                react_1.default.createElement(md_1.MdDelete, null)))); })),
        click &&
            react_1.default.createElement(styled_comp_1.AddTopicBtnComp, null,
                react_1.default.createElement("input", { type: "text", value: newTopic, onChange: setNewTopicName }),
                react_1.default.createElement(io_1.IoIosAddCircle, { className: "make-new-topic-btn", onClick: makeNewTopic })),
        react_1.default.createElement(io_1.IoIosAddCircle, { className: "add-new-topic-btn", onClick: previousMakeNewTopic })));
}
exports.default = react_1.default.memo(CreateNewTopic);
