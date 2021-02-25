import React, { useCallback, useEffect, useRef, useState } from "react";
import { Snow } from "../styles/snow";
import { RouteComponentProps } from "react-router-dom";
import { formats, modules } from "../config/textEditor.config";
import { WriteMetaContainer } from "../styledComponent";
import { KindofPosts, SelectTopic, TextEditContentName } from "../component";
import useCSRF from "../useHooks/useCSRF";
import useTopic from "../useHooks/useTopic";
import useCommon from "../useHooks/useCommon";
import useTextEdit from "../useHooks/useTextEdit";
import { ITopicModuleProps } from "../modules/Topic/topic.interface";
import { ITextEditModuleProps } from "../modules/TextEditor/textEdit.interface";
import { ICommonModuleProps } from "../modules/Common/common.interface";


interface ITextEdit extends HTMLElement {
   state: any
}

const Write = ({ history, location }: RouteComponentProps) => {
   const csrf = useCSRF();
   const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
   const textEdit = useRef<ITextEdit>(null);
   const { topic, requestTopic }: ITopicModuleProps = useTopic();
   const [temp, setTemp] = useState([]);
   const { setNewRequset, login }: ICommonModuleProps = useCommon();
   const {
      data,
      setContent,
      setContentName,
      setTopic,
      setKindOfPosts,
      setDetail,
      setTempData,
      setThumbnail,
   }: ITextEditModuleProps = useTextEdit();


   useEffect(() => {
      if (textEdit.current) textEdit.current.focus();
      if (csrf) requestTopic(csrf);
   }, [csrf]);

   // useEffect(() => {
   //    (async () => {
   //       const { data } = await util.getTempPost();
   //       setTemp(data);
   //    })();
   //    return () => setTempData({
   //       contentName: "",
   //       content: "",
   //       topicName: "",
   //       kindofPosts: "",
   //       detail: "",
   //    });
   // }, [setTempData]);
   //
   // useEffect(() => {
   //    const token = localStorage.getItem("_jt");
   //    const status = checkUserState(token);
   //    if (status && textEdit.current && csrf) {
   //       requestTopic(csrf);
   //       textEdit.current.focus();
   //    } else {
   //       history.push("/");
   //    }
   // }, [history, requestTopic, login, csrf]);
   const onNameChange = useCallback((data: string) => {
      setContentName(data);
   }, [setContentName]);

   const rteChange = useCallback((content: any, delta: any, source: any, editor: any) => {
      if (textEdit.current) setContent(textEdit.current.state.value);
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

   const onChangeThumbnail = useCallback((img: string) => {
      setThumbnail(img);
   }, [setThumbnail]);

   const onRequestAfterMakeOrDeleteTopic = useCallback((csrf: string) => {
      requestTopic(csrf);
   }, [requestTopic, csrf]);
   console.log(data);
   return (
      <>
         <Snow />
         <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="입력하기"
            ref={textEdit}
         />
         <WriteMetaContainer>
            <TextEditContentName />
            <SelectTopic topic={topic}
                         onIsChecked={onIsChecked}
                         checked={data.topicName}
                         token={csrf}
                         onRequestAfterMakeOrDeleteTopic={onRequestAfterMakeOrDeleteTopic}
            />
            <KindofPosts onCheck={onCheckKindOfPosts} checked={data.kindofPosts} />
         </WriteMetaContainer>

      </>
   );
};

export default Write;