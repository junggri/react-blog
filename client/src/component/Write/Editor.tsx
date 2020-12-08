import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/Write/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import { WriteBox, WriteConditionBox } from "../../styled-comp";
import { formats, modules } from "../../config/textEditor.config";
import { SelectTopic } from "../index";
import util from "../../lib/axios";
import { WriteBtnBox } from "component/index";


const Editor = ({ history }: any) => {
   const [value, setValue] = useState("");
   const [contentName, setContentName] = useState("");
   const [topic, setTopic] = useState("");
   const ref: any = useRef(null);

   useEffect(() => {
      ref.current.focus();
   }, []);

   const onNameChange = useCallback((data: string) => {
      setContentName(data);
   }, []);

   const rteChange = (content: any, delta: any, source: any, editor: any) => {
      setValue(ref.current.state.value);
   };

   const onIsChecked = useCallback((name: string) => {
      setTopic(name);
   }, []);


   const onSubmit = useCallback(async (e: any) => {
      e.preventDefault();
      if (value && contentName && topic) {
         const contents = {
            contentName: contentName,
            content: value,
            topic: topic,
         };
         const { data } = await util.getCSRTtoken();
         const state = await util.checkCSRFtoken(data);
         if (state) {
            let result = await util.savePost(contents);
            if (result) history.push("/");
         }
      } else {
         alert("내용을 입력하세요");
         return false;
      }
   }, [contentName, value, topic]);


   return (
      <>
         <WriteBox>
            <WriteTopicName onNameChange={onNameChange} />
            <ReactQuill theme="snow" onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요." ref={ref} />
         </WriteBox>
         <WriteConditionBox>
            <SelectTopic onIsChecked={onIsChecked} />
            <WriteBtnBox onSubmit={onSubmit} />
         </WriteConditionBox>
      </>
   );
};


export default Editor;