"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var TagPostContainer = function (_a) {
    var data = _a.data, topic = _a.topic, onDelete = _a.onDelete;
    return (react_1.default.createElement(react_1.default.Fragment, null, data === null || data === void 0 ? void 0 : data.map(function (e) {
        if (e.topic === topic) {
            return react_1.default.createElement(index_1.PostItem, { data: e, key: e.uid, onDelete: onDelete });
        }
    })));
};
exports.default = react_1.default.memo(TagPostContainer);
