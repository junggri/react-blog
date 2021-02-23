"use strict";
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var modules_1 = __importDefault(require("../modules"));
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var logOnlyInProduction_1 = require("redux-devtools-extension/logOnlyInProduction");
var middleWares = [redux_thunk_1.default];
var devTools = process.env.NODE_ENV === "production" ? redux_1.applyMiddleware.apply(void 0, __spread(middleWares)) : logOnlyInProduction_1.composeWithDevTools(redux_1.applyMiddleware.apply(void 0, __spread(middleWares)));
exports.store = typeof window === "object" ? redux_1.createStore(modules_1.default, window.__PRELOADED_STATE__, devTools) : redux_1.createStore(modules_1.default, devTools);
