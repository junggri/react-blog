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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { cacheAdapterEnhancer } from "axios-extensions";
var dotenv = __importStar(require("dotenv"));
var axios_1 = __importDefault(require("axios"));
dotenv.config();
var instance = axios_1.default.create({
    withCredentials: true,
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://junggri.com",
});
instance.defaults.headers.common["Content-Type"] = "application/json";
instance.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    return Promise.reject(err);
});
exports.default = instance;
