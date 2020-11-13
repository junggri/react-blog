import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";

const bold = Quill.import("formats/bold");
bold.tagName = "b"; // Quill uses <strong> by default
Quill.register(bold, true);

const italic = Quill.import("formats/italic");
italic.tagName = "i"; // Quill uses <em> by default
Quill.register(italic, true);

function Write() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "color",
    "background",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "blockquote",
    "video",
  ];

  return (
    <div className="my-quill-box">
      <ReactQuill className="quill-box" theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} placeholder="입력하세요." />
      <section className="preview-quill"></section>
    </div>
  );
}

export default Write;
