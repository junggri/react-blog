"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var modules_1 = __importDefault(require("../modules"));
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var TokenMiddleWare_1 = __importDefault(require("../middleWare/TokenMiddleWare"));
var logOnlyInProduction_1 = require("redux-devtools-extension/logOnlyInProduction");
var middleWares = [redux_thunk_1.default, TokenMiddleWare_1.default];
var devTools = process.env.NODE_ENV === "production"
    ? redux_1.applyMiddleware.apply(void 0, middleWares) : logOnlyInProduction_1.composeWithDevTools(redux_1.applyMiddleware.apply(void 0, middleWares));
exports.store = typeof window === "object"
    ? redux_1.createStore(modules_1.default, window.__PRELOADED_STATE__, devTools)
    : redux_1.createStore(modules_1.default, devTools);
