"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = require("react-helmet");
function ReactHelmet(_a) {
    var keywords = _a.keywords, description = _a.description, title = _a.title;
    return (react_1.default.createElement(react_helmet_1.Helmet, null,
        react_1.default.createElement("title", null, title),
        react_1.default.createElement("meta", { name: "description", content: description, "data-react-helmet": "true" }),
        react_1.default.createElement("meta", { name: "keywords", content: keywords, "data-react-helmet": "true" }),
        react_1.default.createElement("meta", { property: "og:title", content: title, "data-react-helmet": "true" }),
        react_1.default.createElement("meta", { property: "og:url", content: "http://www.junggri.com", "data-react-helmet": "true" }),
        react_1.default.createElement("meta", { property: "og:image", content: "http://www.junggri.com/image/og.jpg", "data-react-helmet": "true" }),
        react_1.default.createElement("meta", { property: "og:site_name", content: "junggri.com", "data-react-helmet": "true" }),
        react_1.default.createElement("meta", { property: "og:description", content: description, "data-react-helmet": "true" })));
}
exports.default = ReactHelmet;
