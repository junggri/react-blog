import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/Write/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import util from "../../lib/axios";
import { formats, modules } from "../../config/textEditor.config";
import { WriteBox, WriteConditionBox } from "../../styled-comp";
import { KindOfPosts, PostsDetail, SelectTopic, WriteBtnBox } from "component/index";

const Editor = ({ history }: any) => {
   const [value, setValue] = useState<string>("");
   const [contentName, setContentName] = useState<string>("");
   const [topic, setTopic] = useState<string>("");
   const [kindOfPosts, setKindOfPosts] = useState<string>("");

   const ref: any = useRef(null) as MutableRefObject<any>;

   useEffect(() => {
      ref.current.focus();
   }, []);

   const onNameChange = useCallback((data: string) => {
      setContentName(data);
   }, []);


   const onIsChecked = useCallback((name: string) => {

      setTopic(name);
   }, []);

   const onCheckKindOfPosts = useCallback((kindOf: string) => {
      setKindOfPosts(kindOf);
   }, []);

   const rteChange = (content: any, delta: any, source: any, editor: any) => {
      setValue(ref.current.state.value);
   };

   const onSubmit = useCallback(async () => {
      if (value && contentName && topic) {
         const contents = {
            contentName: contentName,
            content: value,
            topic: topic,
            kindOfPosts: kindOfPosts,
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
   }, [contentName, value, topic, kindOfPosts]);


   return (
      <>
         <WriteBox>
            <WriteTopicName onNameChange={onNameChange} />
            <ReactQuill theme="snow" onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요."
                        ref={ref} />
         </WriteBox>
         <WriteConditionBox>
            <SelectTopic onIsChecked={onIsChecked} />
            <KindOfPosts onCheck={onCheckKindOfPosts} />
            <WriteBtnBox onSubmit={onSubmit} />
            <PostsDetail />
         </WriteConditionBox>
      </>
   );
};


export default Editor;