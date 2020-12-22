import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/TextEditor/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "../../config/textEditor.config";
import { WriteBox, WriteConditionBox } from "../../styled-comp";
import { CreateNewTopic, KindOfPosts, PostsDetail, SelectTopic, TextEditBtnBox } from "component/index";
import useCommon from "../../useHooks/useCommon";
import useTopic from "../../useHooks/useTopic";
import useTextEdit from "../../useHooks/useTextEdit";
import { ITextEditModuleProps } from "../../modules/TextEditor/textEdit.interface";
import util from "../../lib/axios";
import { ITopicModuleProps } from "../../modules/Topic/topic.interface";
import { ICommonModuleProps } from "../../modules/Common/common.interface"; /**/


const Editor = ({ history }: any) => {
   const {
      data,
      setContent,
      setContentName,
      setTopic,
      setKindOfPosts,
      setDetail,
   }: ITextEditModuleProps = useTextEdit();

   const ref: any = useRef(null) as MutableRefObject<any>;
   const { token }: ICommonModuleProps = useCommon();
   const { topic, makeOrDeleteAndReqNewTopics }: ITopicModuleProps = useTopic();


   useEffect(() => {
      ref.current.focus();
   }, []);


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
         const result = await util.savePost(data, token);
         if (result) history.push("/");
      }
   };


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
            <CreateNewTopic topic={topic} token={token} onMakeOrDelteTopic={onMakeOrDelteTopic} />
            <KindOfPosts onCheck={onCheckKindOfPosts} />
            <PostsDetail onChangeDetail={onChangeDetail} />
            <TextEditBtnBox onSubmit={onSubmit} />
         </WriteConditionBox>
      </>
   );
};


export default Editor;