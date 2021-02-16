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
var Thumbnail = function (_a) {
    var token = _a.token, onChangeThumbnail = _a.onChangeThumbnail;
    var imgRef = react_1.useRef(null);
    var onChangeImg = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formData, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new FormData();
                    formData.append("data", e.target.files[0]);
                    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
                    return [4 /*yield*/, axios_1.default.saveThumbnail(token, formData)];
                case 1:
                    data = (_a.sent()).data;
                    onChangeThumbnail(data.filename);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(styled_comp_1.ThumbnailComp, null,
        react_1.default.createElement("div", { className: "thumbnail-slo" }, "\uC378\uB124\uC77C \uC774\uBBF8\uC9C0 \uC124\uC815"),
        react_1.default.createElement("input", { type: "file", name: "file", accept: "image/*", multiple: true, onChange: onChangeImg }),
        react_1.default.createElement("h2", null, "\uC774\uBBF8\uC9C0 \uC800\uC7A5\uD560\uB54C jpg, png\uB85C \uC800\uC7A5\uD574\uC57C\uD55C\uB2E4 svg\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB2E4\uB294 \uAC70 \uC54C\uC9C0?"),
        react_1.default.createElement("section", { className: "thumbnail-imgbox" },
            react_1.default.createElement("img", { ref: imgRef }))));
};
exports.default = react_1.default.memo(Thumbnail);
