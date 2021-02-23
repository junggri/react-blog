"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = require("react-helmet");
var locales = {
    en: "en_US",
    ko: "ko_KR",
};
var Meta = function (_a) {
    var data = _a.data;
    // const lang = locales[data.locale] || locales["en"];
    var lang = "ko";
    var title = data.title;
    var description = data.description;
    var image = data.image !== undefined && "" + data.image;
    var canonical = "https://www.junggri.com/" + data.canonical;
    var type = data.type === undefined ? "website" : data.type;
    var width = data.image && (data.width || 1200);
    var height = data.image && (data.height || 630);
    return (react_1.default.createElement(react_helmet_1.Helmet, { titleTemplate: "%s" },
        react_1.default.createElement("html", { lang: lang }),
        react_1.default.createElement("title", null, title),
        react_1.default.createElement("meta", { name: "description", content: description }),
        image ? react_1.default.createElement("link", { rel: "image_src", href: image }) : null,
        image ? react_1.default.createElement("meta", { itemProp: "image", content: image }) : null,
        react_1.default.createElement("meta", { property: "og:site_name", content: "https://www.junggri.com" }),
        react_1.default.createElement("meta", { property: "og:title", content: title }),
        description ? (react_1.default.createElement("meta", { property: "og:description", content: description })) : null,
        react_1.default.createElement("meta", { property: "og:locale", content: locales[lang] }),
        react_1.default.createElement("meta", { property: "og:type", content: type }),
        image ? react_1.default.createElement("meta", { property: "og:image", content: image }) : null,
        width ? react_1.default.createElement("meta", { property: "og:image:width", content: width }) : null,
        height ? react_1.default.createElement("meta", { property: "og:image:height", content: height }) : null,
        react_1.default.createElement("meta", { property: "fb:pages", content: "https://www.junggri.com" }),
        react_1.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
        react_1.default.createElement("meta", { name: "twitter:title", content: title }),
        description ? (react_1.default.createElement("meta", { name: "twitter:description", content: description })) : null,
        image ? react_1.default.createElement("meta", { name: "twitter:image", content: image }) : null,
        react_1.default.createElement("meta", { name: "twitter:site", content: "https://www.junggri.com" })));
};
exports.default = Meta;
