"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.media = void 0;
var styled_components_1 = require("styled-components");
var sizes = {
    inherit: 1800,
    desktop: 1250,
    postBox: 992,
    tablet: 930,
    bigMoblie: 600,
    mobile: 500,
    small: 262,
    smallest: 219,
};
exports.media = Object.keys(sizes).reduce(function (acc, label) {
    acc[label] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n     @media(max-width:", "em){\n    ", ";\n  }\n"], ["\n     @media(max-width:", "em){\n    ", ";\n  }\n"])), sizes[label] / 16, styled_components_1.css(args));
    };
    return acc;
}, {});
var templateObject_1;
