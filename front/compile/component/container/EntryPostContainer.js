"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var EntryPostContaier = function (_a) {
    var data = _a.data, onDelete = _a.onDelete;
    if (!data)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null, data.map(function (e, i) { return (react_1.default.createElement(index_1.PostItem, { data: e, key: e.uid, onDelete: onDelete })); })));
};
exports.default = react_1.default.memo(EntryPostContaier);
