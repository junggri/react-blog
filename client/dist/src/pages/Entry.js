"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CommonEntry_1 = __importDefault(require("../component/Home/CommonEntry"));
var Entry = function (_a) {
    var match = _a.match;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CommonEntry_1.default, { match: match })));
};
exports.default = Entry;
