import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/Write/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "../../config/textEditor.config";
import { WriteBox, WriteConditionBox } from "../../styled-comp";
import { CreateNewTopic, KindOfPosts, PostsDetail, SelectTopic, WriteBtnBox } from "component/index";
import util from "../../lib/axios";
import useCommon from "../../useHooks/useCommon";
import usePosts from "../../useHooks/usePosts";

const Editor = ({ history }: any) => {
   const { token } = useCommon();
   const { posts } = usePosts();

   const [value, setValue] = useState<string>("");
   const [contentName, setContentName] = useState<string>("");
   const [topic, setTopic] = useState<string>("");
   const [kindOfPosts, setKindOfPosts] = useState<string>("");
   const [detail, setDetail] = useState<string>("");

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

   const onChageDetail = useCallback((payload: string) => {
      setDetail(payload);
   }, []);

   const rteChange = (content: any, delta: any, source: any, editor: any) => {
      setValue(ref.current.state.value);
   };

   const onSubmit = useCallback(async () => {
      const contents = {
         contentName: contentName,
         content: value,
         topic: topic,
         kindOfPosts: kindOfPosts,
         detail: detail,
      };
      if (value && contentName && topic) {
         let result = await util.savePost(contents, token);
         if (result) history.push("/");
      } else {
         alert("내용을 입력하세요");
         return false;
      }
   }, [contentName, value, topic, kindOfPosts, detail]);


   return (
      <>
         <WriteBox>
            <WriteTopicName onNameChange={onNameChange} />
            <ReactQuill theme="snow" onChange={rteChange} modules={modules} formats={formats} placeholder="입력하세요."
                        ref={ref} />
         </WriteBox>
         <WriteConditionBox>
            <SelectTopic onIsChecked={onIsChecked} posts={posts} />
            <CreateNewTopic posts={posts} />
            <KindOfPosts onCheck={onCheckKindOfPosts} />
            <PostsDetail onChangeDetail={onChageDetail} />
            <WriteBtnBox onSubmit={onSubmit} />
         </WriteConditionBox>
      </>
   );
};


export default Editor;