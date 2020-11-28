import React, { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { ArticleContainer, TopicItem, WriteBox, WriteBtnComp, WriteConditionBox } from "../styled-comp";
import "../../node_modules/react-quill/dist/quill.snow.css";
import util from "../lib/axios";

const bold = Quill.import("formats/bold");
bold.tagName = "b"; // Quill uses <strong> by default
Quill.register(bold, true);

const italic = Quill.import("formats/italic");
italic.tagName = "i"; // Quill uses <em> by default
Quill.register(italic, true);

const TopicsItem = ({ children }: { children: string }) => {
   return (
      <TopicItem>
         <div>{children}</div>
      </TopicItem>
   );
};

function Write({ history }: any) {
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
      console.log(editor.getHTML()); // rich text
      console.log(editor.getText()); // plain text
   };

   // const handleEditor = (value: string) => {
   //    setValue(value);
   //    console.log(value);
   // };
   //
   // const ToHtml = (value: string) => {
   //    return { __html: value };
   // };

   const onSubmit = async (e: any) => {
      const contents = {
         contentName: (contentName.current as HTMLTextAreaElement).textContent,
         content: ref.current.state.value,
      };
      const { data } = await util.getCSRTtoken();
      const state = await util.checkCSRFtoken(data);
      if (state) {
         let result = await util.saveContent(contents);
         if (result) history.push("/");
      }
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
               <textarea name="content-title" placeholder="제목" className="content-title" value={title} onChange={setContentName} ref={contentName} />
               <ReactQuill theme="snow" value={value} onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요." ref={ref} />
            </div>
         </WriteBox>
         <WriteConditionBox>
            <ArticleContainer>
               <div className="topicsBox">
                  <ul>
                     <TopicsItem>nodejs</TopicsItem>
                     <TopicsItem>book</TopicsItem>
                     <TopicsItem>nodejs</TopicsItem>
                     <TopicsItem>book</TopicsItem>
                  </ul>
               </div>
               <div className="buttonBox">
                  <WriteBtnComp onClick={onSubmit}>작성하기</WriteBtnComp>
                  <WriteBtnComp onClick={onStorage}>임시저장</WriteBtnComp>
               </div>
            </ArticleContainer>
         </WriteConditionBox>
      </>
   );
}

export default Write;
