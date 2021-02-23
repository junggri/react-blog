"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenMiddleWare = function (store) { return function (next) { return function (action) {
    next(action);
}; }; };
exports.default = TokenMiddleWare;
