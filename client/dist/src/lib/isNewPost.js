"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNew(date) {
    var date_diff = (new Date() - new Date(date)) / (24 * 3600 * 1000);
    return Math.floor(date_diff) <= 1;
}
exports.default = isNew;
