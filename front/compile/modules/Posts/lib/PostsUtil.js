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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAction = exports.createThunk = exports.reducerUtil = void 0;
exports.reducerUtil = {
    initial: function (initialState) {
        if (initialState === void 0) { initialState = null; }
        return ({
            loading: false,
            data: initialState,
            error: null,
        });
    },
    loading: function (prevState) {
        if (prevState === void 0) { prevState = null; }
        return ({
            loading: true,
            data: prevState,
            error: null,
        });
    },
    success: function (payload) { return ({
        loading: false,
        data: payload,
        error: null,
    }); },
    error: function (error) { return ({
        loading: false,
        data: null,
        error: error,
    }); },
};
var createThunk = function (type, cb) {
    var _a = __read([type + "_SUCCESS", type + "_ERROR"], 2), SUCCESS = _a[0], ERROR = _a[1];
    return function (_a) {
        var parameter = __rest(_a, []);
        return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
            var data, data, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch({ type: type });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        if (!(type === "data/GET_POSTS")) return [3 /*break*/, 3];
                        return [4 /*yield*/, cb(parameter.params)];
                    case 2:
                        data = (_a.sent()).data;
                        dispatch({ type: SUCCESS, payload: data });
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(type === "data/GET_POST")) return [3 /*break*/, 5];
                        return [4 /*yield*/, cb(parameter.topic, parameter.postsId)];
                    case 4:
                        data = (_a.sent()).data;
                        dispatch({ type: SUCCESS, payload: data });
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, cb(parameter.token)];
                    case 6:
                        data = (_a.sent()).data;
                        dispatch({ type: SUCCESS, payload: data });
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        console.error(e_1);
                        dispatch({ type: ERROR, error: e_1 });
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        }); };
    };
};
exports.createThunk = createThunk;
function handleAction(type, key, keepData) {
    var _a = __read([type + "_SUCCESS", type + "_ERROR"], 2), SUCCESS = _a[0], ERROR = _a[1];
    return function (state, action) {
        var _a, _b, _c;
        switch (action.type) {
            case type:
                return __assign(__assign({}, state), (_a = {}, _a[key] = exports.reducerUtil.loading(keepData ? state[key].data : null), _a));
            case SUCCESS:
                return __assign(__assign({}, state), (_b = {}, _b[key] = exports.reducerUtil.success(action.payload), _b));
            case ERROR:
                return __assign(__assign({}, state), (_c = {}, _c[key] = exports.reducerUtil.error(action.error), _c));
        }
    };
}
exports.handleAction = handleAction;
