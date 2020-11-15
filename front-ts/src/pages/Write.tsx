import React, { useState, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import { WritePreview, WriteBox } from "../styled-comp";
import "../../node_modules/react-quill/dist/quill.snow.css";

const bold = Quill.import("formats/bold");
bold.tagName = "b"; // Quill uses <strong> by default
Quill.register(bold, true);

const italic = Quill.import("formats/italic");
italic.tagName = "i"; // Quill uses <em> by default
Quill.register(italic, true);

function Write() {
  const [value, setValue] = useState("");
  const [html, setHtml] = useState("");
  let text: any = useRef();

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

  const rteChange = (content: any, delta: any, source: any, editor: any) => {
    // console.log(editor.getHTML()); // rich text
    // console.log(editor.getText()); // plain text
    // setHtml(editor.getHTML());
    // setValue(text);
  };

  const handleEditor = (value: string) => {
    setValue(value);
  };

  function ToHtml(value: string) {
    return { __html: value };
  }

  return (
    <WriteBox>
      <ReactQuill theme="snow" value={value} onChange={handleEditor} modules={modules} formats={formats} placeholder="입력하세요." />
      <WritePreview ref={text}>
        <div dangerouslySetInnerHTML={ToHtml(value)}></div>
      </WritePreview>
    </WriteBox>
  );
}

export default Write;
