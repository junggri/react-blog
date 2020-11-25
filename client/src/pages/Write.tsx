import React, { useState, useRef, useEffect } from "react";
import hljs from "highlight.js";
import ReactQuill, { Quill } from "react-quill";
import { WriteBox, WriteBtnComp } from "../styled-comp";
import "../../node_modules/react-quill/dist/quill.snow.css";
import util from "../lib/axios";

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
  const contentName = useRef<HTMLTextAreaElement>(null);

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

  const onSubmit = async (e: any) => {
    const data = {
      contentName: (contentName.current as HTMLTextAreaElement).textContent,
      content: ref.current.state.value,
    };
    await util.saveContent(data);
  };

  const onStorage = () => {
    const data = {
      contentName: (contentName.current as HTMLTextAreaElement).textContent,
      content: ref.current.state.value,
    };
  };

  const setContentName = (e: any) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <WriteBox>
        <div className="input-content-box">
          <textarea name="content-title" placeholder="제목" className="content-title" value={title} onChange={setContentName} ref={contentName}></textarea>
          <ReactQuill theme="snow" value={value} onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요." ref={ref} />
        </div>
        {/* <WritePreview>
        <div className="preview-title">{title}</div>
        <div dangerouslySetInnerHTML={ToHtml(value)}></div>
      </WritePreview> */}
      </WriteBox>
      <div className="write-btn-box">
        <WriteBtnComp onClick={onSubmit}>작성하기</WriteBtnComp>
        <WriteBtnComp onClick={onStorage}>임시저장</WriteBtnComp>
      </div>
    </>
  );
}

export default Write;
