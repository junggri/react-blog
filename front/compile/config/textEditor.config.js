"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formats = exports.modules = void 0;
var highlight_js_1 = __importDefault(require("highlight.js"));
var Quill = (typeof window === "object" ? require("react-quill") : function () { return false; }).Quill;
highlight_js_1.default.configure({
    languages: ["javascript", "react", "typescript", "css", "html", "Node REPL"],
});
exports.modules = {
    syntax: {
        highlight: function (text) { return highlight_js_1.default.highlightAuto(text).value; },
    },
    toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image", "video"],
    ],
};
exports.formats = ["font", "size", "bold", "italic", "underline", "strike", "blockquote",
    "code-block", "color", "background", "align", "list", "bullet", "indent", "link", "image", "blockquote", "video", "insert"];
if (typeof window === "object") {
    var bold = Quill.import("formats/bold");
    bold.tagName = "b"; // Quill uses <strong> by default
    Quill.register(bold, true);
    var italic = Quill.import("formats/italic");
    italic.tagName = "i"; // Quill uses <em> by default
    Quill.register(italic, true);
}
