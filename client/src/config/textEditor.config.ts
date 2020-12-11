import 'highlight.js/styles/darcula.css'
import hljs from 'highlight.js'

hljs.configure({
    languages: ['javascript', 'react'],
})

export const modules = {
    syntax: {
        highlight: (text: any) => hljs.highlightAuto(text).value,
    },
    toolbar: [
        // [{ header: "1" }, { header: "2" }],
        [{font: []}],
        [{size: ["small", false, "large", "huge"]}], // custom dropdown
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{color: []}, {background: []}], // dropdown with defaults from theme
        [{align: []}],
        [{list: "ordered"}, {list: "bullet"}, {indent: "-1"}, {indent: "+1"}],
        ["link", "image", "video"],
    ],
};


export const formats = ["font", "size", "bold", "italic", "underline", "strike", "blockquote",
    "code-block", "color", "background", "align", "list", "bullet", "indent", "link", "image", "blockquote", "video", "insert"];

// @ts-ignore

// const bold = Quill.import("formats/bold");
// bold.tagName = "b"; // Quill uses <strong> by default
// Quill.register(bold, true);
//
// const italic = Quill.import("formats/italic");
// italic.tagName = "i"; // Quill uses <em> by default
// Quill.register(italic, true);