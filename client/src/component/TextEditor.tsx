import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import InputContentName from "component/InputContentName";
import "../../node_modules/react-quill/dist/quill.snow.css";
import util from "../lib/axios";

const bold = Quill.import("formats/bold");
bold.tagName = "b"; // Quill uses <strong> by default
Quill.register(bold, true);

const italic = Quill.import("formats/italic");
italic.tagName = "i"; // Quill uses <em> by default
Quill.register(italic, true);


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

const formats = ["font", "size", "bold", "italic", "underline", "strike", "blockquote",
   "code-block", "color", "background", "align", "list", "bullet", "indent", "link", "image", "blockquote", "video", "insert"];


const TextEditor = ({ history }: any) => {
   const [value, setValue] = useState("");

   const ref: any = useRef(null);
   const contentName = useRef<HTMLTextAreaElement>(null);


   useEffect(() => {
      ref.current.focus();
   }, []);

   const rteChange = (content: any, delta: any, source: any, editor: any) => {
      console.log(editor.getHTML()); // rich text
      console.log(editor.getText()); // plain text
   };


   const onSubmit = async (e: any) => {
      const contents = {
         contentName: (contentName.current as HTMLTextAreaElement).textContent,
         content: ref.current.state.value,
      };
      const { data } = await util.getCSRTtoken();
      const state = await util.checkCSRFtoken(data);
      if (state) {
         let result = await util.savePost(contents);
         if (result) history.push("/");
      }
   };


   const onStorage = () => {
      const data = {
         contentName: (contentName.current as HTMLTextAreaElement).textContent,
         content: ref.current.state.value,
      };
   };


   return (
      <>
         <div>
            <InputContentName />
            <ReactQuill theme="snow" value={value} onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요." ref={ref} />
         </div>
      </>
   );
};


export default TextEditor;