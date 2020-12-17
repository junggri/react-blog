import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/Write/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "../../config/textEditor.config";
import { WriteBox, WriteConditionBox } from "../../styled-comp";
import { CreateNewTopic, KindOfPosts, PostsDetail, SelectTopic, WriteBtnBox } from "component/index";
import useCommon from "../../useHooks/useCommon";
import useTopic from "../../useHooks/useTopic";
import useTextEdit from "../../useHooks/useTextEdit";
import util from "../../lib/axios";
import { ITextEditModuleProps } from "../../modules/TextEditor/textEdit.interface";


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
   const { token } = useCommon();
   const { topic } = useTopic();

   useEffect(() => {
      ref.current.focus();
   }, []);


   const onNameChange = useCallback((data: string) => {
      setContentName(data);
   }, []);

   const rteChange = useCallback((content: any, delta: any, source: any, editor: any) => {
      setContent(ref.current.state.value);
   }, []);

   const onIsChecked = useCallback((name: string) => {
      setTopic(name);
   }, []);

   const onCheckKindOfPosts = useCallback((kindOf: string) => {
      setKindOfPosts(kindOf);
   }, []);

   const onChageDetail = useCallback((detail: string) => {
      setDetail(detail);
   }, []);


   const onSubmit = async (): Promise<void> => {
      if (data.content === ""
         || data.contentName === ""
         || data.detail === ""
         || data.kindOfPosts === ""
         || data.topicName === "") {
         alert("정보를 입력하세요");
      } else {
         let result = await util.savePost(data, token);
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
            <CreateNewTopic topic={topic} token={token} />
            <KindOfPosts onCheck={onCheckKindOfPosts} />
            <PostsDetail onChangeDetail={onChageDetail} />
            <WriteBtnBox onSubmit={onSubmit} />
         </WriteConditionBox>
      </>
   );
};


export default Editor;