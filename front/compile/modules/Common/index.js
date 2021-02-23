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
exports.getCount = exports.onGetGaCountFail = exports.onGetGaCountSuccess = exports.onGetGaCount = exports.onNewRequset = exports.onSetIsLogin = exports.GET_GA_COUNT_FAIL = exports.GET_GA_COUNT_SUCCESS = exports.GET_GA_COUNT = exports.NEW_REQUEST = exports.SET_IS_LOGIN = void 0;
var axios_1 = __importDefault(require("../../lib/axios"));
exports.SET_IS_LOGIN = "common/SET_IS_LOGIN";
exports.NEW_REQUEST = "common/NEW_REQUEST";
exports.GET_GA_COUNT = "common/GET_GA_COUNT";
exports.GET_GA_COUNT_SUCCESS = "common/GET_GA_COUNT_SUCEESS";
exports.GET_GA_COUNT_FAIL = "common/GET_GA_COUNT_FAIL";
var onSetIsLogin = function (payload) { return ({ type: exports.SET_IS_LOGIN, payload: payload }); };
exports.onSetIsLogin = onSetIsLogin;
var onNewRequset = function (payload) { return ({ type: exports.NEW_REQUEST, payload: payload }); };
exports.onNewRequset = onNewRequset;
var onGetGaCount = function () { return ({ type: exports.GET_GA_COUNT }); };
exports.onGetGaCount = onGetGaCount;
var onGetGaCountSuccess = function (payload) { return ({ type: exports.GET_GA_COUNT_SUCCESS, payload: payload }); };
exports.onGetGaCountSuccess = onGetGaCountSuccess;
var onGetGaCountFail = function (e) { return ({ type: exports.GET_GA_COUNT_FAIL, error: e }); };
exports.onGetGaCountFail = onGetGaCountFail;
// typescript는 const를 이해하므로(typeof CHECK_GUESTBOOK은 string이 아니라 'CHECK_GUESTBOOK'입니다)
// 액션 이름을 그대로 쓰셔도 됩니다.
//thunk 생성함
var getCount = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch(exports.onGetGaCount());
                return [4 /*yield*/, axios_1.default.getGACount()];
            case 1:
                data = (_a.sent()).data;
                dispatch(exports.onGetGaCountSuccess(data));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                dispatch(exports.onGetGaCountFail(e_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getCount = getCount;
var initialState = {
    count: null,
    login: false,
    loading: false,
    newRequest: true,
    e: null,
};
function common(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case exports.SET_IS_LOGIN:
            return __assign(__assign({}, state), { login: action.payload });
        case exports.NEW_REQUEST:
            return __assign(__assign({}, state), { newRequest: action.payload });
        case exports.GET_GA_COUNT:
            return __assign({}, state);
        case exports.GET_GA_COUNT_SUCCESS:
            return __assign(__assign({}, state), { count: action.payload });
        case exports.GET_GA_COUNT_FAIL:
            return __assign(__assign({}, state), { e: action.e });
        default:
            return state;
    }
}
exports.default = common;
