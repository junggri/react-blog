import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/TextEditor/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "../../config/textEditor.config";
import { WriteBox, WriteConditionBox } from "../../styled-comp";
import { CreateNewTopic, KindOfPosts, PostsDetail, SelectTopic, StoragePost, TextEditBtnBox } from "component/index";
import useTopic from "../../useHooks/useTopic";
import useTextEdit from "../../useHooks/useTextEdit";
import { ITextEditModuleProps } from "../../modules/TextEditor/textEdit.interface";
import util from "../../lib/axios";
import { ITopicModuleProps } from "../../modules/Topic/topic.interface";
import useCSRF from "../../useHooks/useCSRF";
import { ICommonModuleProps } from "../../modules/Common/common.interface";
import useCommon from "../../useHooks/useCommon";
import { ITempPost } from "../../interface/index.interface";


const Editor = ({ history, match }: any) => {
   const csrf = useCSRF();
   const ref = useRef<any>(null);
   const [temp, setTemp] = useState([]);
   const { setNewRequset }: ICommonModuleProps = useCommon();
   const { topic, makeOrDeleteAndReqNewTopics }: ITopicModuleProps = useTopic();
   const {
      data,
      setContent,
      setContentName,
      setTopic,
      setKindOfPosts,
      setDetail,
      setTempData,
   }: ITextEditModuleProps = useTextEdit();


   useEffect(() => {
      (async () => {
         const { data } = await util.getTempPost();
         setTemp(data);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const { data } = await util.checkJWTToken();
         if (!data.decoded) {
            history.push("/");
         } else {
            makeOrDeleteAndReqNewTopics();
            ref.current.focus();
         }
      })();
   }, [history, makeOrDeleteAndReqNewTopics]);


   const onNameChange = useCallback((data: string) => {
      setContentName(data);
   }, [setContentName]);

   const rteChange = useCallback((content: any, delta: any, source: any, editor: any) => {
      setContent(ref.current.state.value);
   }, [setContent]);

   const onIsChecked = useCallback((name: string) => {
      setTopic(name);
   }, [setTopic]);

   const onCheckKindOfPosts = useCallback((kindOf: string) => {
      setKindOfPosts(kindOf);
   }, [setKindOfPosts]);

   const onChangeDetail = useCallback((detail: string) => {
      setDetail(detail);
   }, [setDetail]);

   const onMakeOrDelteTopic = useCallback(() => {
      makeOrDeleteAndReqNewTopics();
   }, [makeOrDeleteAndReqNewTopics]);

   const onSubmit = async (): Promise<void> => {
      if (data.content === ""
         || data.contentName === ""
         || data.detail === ""
         || data.kindOfPosts === ""
         || data.topicName === "") {
         alert("정보를 입력하세요");
      } else {
         const result = await util.savePost(data, csrf);
         setNewRequset(true);
         if (result.request.status === 200) history.push("/");
      }
   };

   const onTemporaryPost = async (): Promise<void> => {
      const result = await util.temporaryPost(data, csrf);
      if (result.request.status === 200) history.push("/");
   };

   const onChangeMode = useCallback((target: string) => {
      const post: any = temp.filter((e: ITempPost) => e.uid === target.split(".")[0]);
      (async () => {
         const { data } = await util.getTempPostFromId(target.split(".")[0]);
         setTempData({
            contentName: post[0].content_name,
            content: data,
            topicName: post[0].topic,
            kindOfPosts: "",
            detail: post[0].detail,
         });
         ref.current.textContent = data;
      })();
   }, [setTempData, temp]);


   return (
      <>
         <WriteBox>
            <WriteTopicName onNameChange={onNameChange} />
            <ReactQuill theme="snow"
                        onChange={rteChange}
                        modules={modules}
                        formats={formats}
                        placeholder="입력하세요."
                        ref={ref} />
         </WriteBox>
         <WriteConditionBox>
            <SelectTopic onIsChecked={onIsChecked} topic={topic} />
            <CreateNewTopic topic={topic} token={csrf} onMakeOrDelteTopic={onMakeOrDelteTopic} />
            <KindOfPosts onCheck={onCheckKindOfPosts} />
            <PostsDetail onChangeDetail={onChangeDetail} />
            <TextEditBtnBox onSubmit={onSubmit} onTemporaryPost={onTemporaryPost} />
            <StoragePost temp={temp} onChangeMode={onChangeMode} />
         </WriteConditionBox>
      </>
   );
};


export default Editor;
