import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import WriteTopicName from "component/WriteTopicName";
import "../../node_modules/react-quill/dist/quill.snow.css";
import { WriteBox, WriteConditionBox } from "../styled-comp";
import { SelectTopic } from "./index";

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


const TextEditor = () => {
   const [value, setValue] = useState("");
   const [topicName, setTopicName] = useState("");
   const [topic, setTopic] = useState("");

   const ref: any = useRef(null);

   useEffect(() => {
      ref.current.focus();
   }, []);

   const changeName = (data: string) => {
      setTopicName(data);
   };

   const rteChange = (content: any, delta: any, source: any, editor: any) => {
      setValue(ref.current.state.value);
   };

   const checked = (name: string) => {
      setTopic(name);
   };


   const submit = async (e: any) => {
      e.preventDefault();
      const contents = {
         contentName: topicName,
         content: value,
         topic: topic,
      };
      console.log(contents);
      // const { data } = await util.getCSRTtoken();
      // const state = await util.checkCSRFtoken(data);
      // if (state) {
      //    let result = await util.savePost(contents);
      //    if (result) history.push("/");
      // }
   };

   const onIsChecked = useCallback((name: string) => checked(name), [topic]);
   const onSubmit = useCallback((e: any) => submit(e), []);
   const onNameChange = useCallback((name: string) => changeName(name), [topicName]);

   return (
      <>
         <WriteBox>
            <WriteTopicName onNameChange={onNameChange} />
            <ReactQuill theme="snow" onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요." ref={ref} />
         </WriteBox>
         <WriteConditionBox>
            <SelectTopic onIsChecked={onIsChecked} onSubmit={onSubmit} />
         </WriteConditionBox>
      </>
   );
};


export default TextEditor;