"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = require("react-helmet");
function ReactHelmet(_a) {
    var title = _a.title, keywords = _a.keywords, description = _a.description;
    console.log(title, keywords, description);
    return (react_1.default.createElement(react_helmet_1.Helmet, null,
        react_1.default.createElement("title", null, title),
        react_1.default.createElement("meta", { name: "description", content: description }),
        react_1.default.createElement("meta", { name: "keywords", content: keywords }),
        react_1.default.createElement("meta", { property: "og:title", content: title }),
        react_1.default.createElement("meta", { property: "og:image", content: "http://www.junggri.com/images/og.jpg" }),
        react_1.default.createElement("meta", { property: "og:image:secure_url", content: "https://www.junggri.com/images/og.jpg" }),
        react_1.default.createElement("meta", { property: "og:url", content: "https://www.junggri.com" }),
        react_1.default.createElement("meta", { property: "og:description", content: description }),
        react_1.default.createElement("meta", { property: "og:locale", content: "ko_KR" }),
        react_1.default.createElement("meta", { property: "og:type", content: "website" }),
        react_1.default.createElement("meta", { property: "og:site_name", content: "JUNGGRI BLOG" }),
        react_1.default.createElement("meta", { property: "og:image:width", content: "1080" }),
        react_1.default.createElement("meta", { property: "og:image:height", content: "600" })));
}
exports.default = ReactHelmet;
