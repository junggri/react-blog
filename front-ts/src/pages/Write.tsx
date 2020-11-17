import React, { useState, useRef } from "react";
import hljs from "highlight.js";
import ReactQuill, { Quill } from "react-quill";
import { WritePreview, WriteBox, WriteBtnComp } from "../styled-comp";
import "../../node_modules/react-quill/dist/quill.snow.css";
import { ChangeEvent } from "react";

// hljs.configure({
//   languages: ["javascript", "java"],
// });

const bold = Quill.import("formats/bold");
bold.tagName = "b"; // Quill uses <strong> by default
Quill.register(bold, true);

const italic = Quill.import("formats/italic");
italic.tagName = "i"; // Quill uses <em> by default
Quill.register(italic, true);

function Write() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const ref: any = useRef(null);

  const modules = {
    syntax: true,
    toolbar: [
      // [{ header: "1" }, { header: "2" }],
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
    // "header",
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
  };

  const handleEditor = (value: string) => {
    setValue(value);
    console.log(value);
  };

  const ToHtml = (value: string) => {
    return { __html: value };
  };

  const previewTitle = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTitle(e.target.value);
  };

  const onSubmit = (e: any) => {
    console.log(ref.current.state.value);
  };

  return (
    <>
      <WriteBox>
        <div className="input-content-box">
          <textarea name="content-title" placeholder="제목" className="content-title" onChange={previewTitle}></textarea>
          <ReactQuill theme="snow" value={value} onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요." ref={ref} />
        </div>
        {/* <WritePreview>
        <div className="preview-title">{title}</div>
        <div dangerouslySetInnerHTML={ToHtml(value)}></div>
      </WritePreview> */}
      </WriteBox>
      <div className="write-btn-box">
        <WriteBtnComp onClick={onSubmit}>작성하기</WriteBtnComp>
      </div>
    </>
  );
}

export default Write;
