"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_comp_1 = require("../../styled-comp");
function AboutContainer(_a) {
    var width = _a.width;
    return (react_1.default.createElement(styled_comp_1.AboutContainerComp, { width: width },
        react_1.default.createElement("div", { className: "icons", style: {
                fontSize: "17rem",
                textAlign: 'center'
            } }, "\uD83D\uDD25 \uD83D\uDCBB \uD83D\uDDA5 \uD83D\uDDB1"),
        react_1.default.createElement("div", { className: "detail", style: {
                fontSize: "2rem",
                textAlign: 'center',
                marginTop: '100px'
            } }, "\uC5C5\uB370\uC774\uD2B8 \uC608\uC815\uC785\uB2C8\uB2E4.")));
}
exports.default = AboutContainer;
