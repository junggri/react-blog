"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var component_1 = __importDefault(require("@loadable/component"));
function loadable(func) {
    return component_1.default(func, { fallback: react_1.default.createElement("div", null, "Loading...") });
}
exports.default = loadable;
// export default (loader: any) => loadable(loader, { fallback: <p> Loading...</p> });
