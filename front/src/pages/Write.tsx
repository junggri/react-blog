import React, { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { Snow } from "../styles/snow";
import { RouteComponentProps } from "react-router-dom";
import { formats, modules } from "../config/textEditor.config";
import { WriteMetaContainer } from "../styledComponent";
import { KindofPosts, SelectTopic, TemporaryPost, TextEditContentName, TextEditorBtnBox, ThumbNail } from "../component";
import useCSRF from "../useHooks/useCSRF";
import useTopic from "../useHooks/useTopic";
import useCommon from "../useHooks/useCommon";
import useTextEdit from "../useHooks/useTextEdit";
import util from "../lib/axios";
import qs from "qs";
import { ITopicModuleProps } from "../modules/Topic/topic.interface";
import { ITextEditModuleProps } from "../modules/TextEditor/textEdit.interface";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import checkUserState from "../lib/checkUserState";
import validationWrite from "../lib/validationWrite";

interface ITextEdit extends HTMLElement {
   state: any
}

interface IWriteData {
   topic: [{ Tables_in_contents: string }]
   tempPostList: [{
      uid: string,
      topic: string,
      content_name: string
      created: string
      detail: string
      file: string
   }]
}

const Write = ({ history, location }: RouteComponentProps) => {
   const csrf = useCSRF();
   const [mode, setMode] = useState<string>("write");
   const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
   const textEdit = useRef<ITextEdit>(null);
   const { tableName, tempPostList, requestTopicAndTempPostData }: ITopicModuleProps = useTopic();
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


   const getDataFromMode = async (cb: Function, uid: string, token: string) => {
      const { data } = await cb(uid, token);
      console.log(data.data.getTemporaryContent.content);
   };

   useEffect(() => {
      if (Object.keys(qs.parse(location.search))[0] !== undefined) {
         const mode: string = Object.keys(qs.parse(location.search))[0].split("?")[1];
         const uid = qs.parse(location.search)[`?${mode}`];
         if (mode === "temp" && csrf) {
            getDataFromMode(util.getTemporaryContent, uid as string, csrf);
            // // tempPostList?.filter((e) => {
            //    if (e.uid === qs.parse(location.search)[`?${mode}`]) {
            //
            //    }
            // });
         } else {

         }
      }
   }, [location, csrf]);

   useEffect(() => {
      if (csrf && !tempPostList && !tableName) {
         requestTopicAndTempPostData(csrf);
      }

      const token = localStorage.getItem("_jt");
      const status = checkUserState(token);
      if (!status) history.push("/");
      if (textEdit.current) textEdit.current.focus();
      return () => setTempData({
         contentName: "",
         content: "",
         topicName: "",
         kindofPosts: "",
         detail: "",
         thumbnail: null,
      });
   }, [csrf, setTempData, login, history]);

   const onContentChange = useCallback((data: string) => {
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

   const onDetailChange = useCallback((detail: string) => {
      setDetail(detail);
   }, [setDetail]);

   const onChangeThumbnail = useCallback((img: string) => {
      setThumbnail(img);
   }, [setThumbnail]);

   const onRequestAfterMakeOrDeleteTopic = useCallback((csrf: string) => {
      requestTopicAndTempPostData(csrf);
   }, [requestTopicAndTempPostData, csrf]);

   // const onSaveTemporaryPost = async (): Promise<void> => {
   //    if (csrf) {
   //       const temp_postId = Object.values(qs.parse(location.search))[0] as string;
   //       const result = await util.temporaryPost(data, csrf, temp_postId);
   //       if (result.request.status === 200) history.push("/");
   //    }
   // };

   const onSubmit = async (): Promise<void> => {
      if (csrf) {
         const valiidation: boolean = validationWrite(data);
         if (valiidation) {
            const result = await util.savePost({ data, csrf });
            if (result?.status === 200) history.push("/");
            setNewRequset(true);
         } else {
            alert("정보를 입력하세요");
         }
      }
   };

   const onSubmitTemporaryPost = async (): Promise<void> => {
      if (csrf) {
         if (data.contentName === "") return;
         const result = await util.saveTemporaryPost(data, csrf);
         onRequestAfterMakeOrDeleteTopic(csrf);
         if (result.status === 200) history.push("/");
      }
   };

   const deleteTemporaryPost = async (identifier: string, ref: RefObject<HTMLSpanElement>) => {
      if (csrf) await util.deleteTemporaryPost(identifier, csrf);
      if (ref.current) ref.current.style.display = "none";
   };


   return (
      <>
         <Snow />
         <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={rteChange}
            placeholder="입력하기"
            ref={textEdit}
         />
         <WriteMetaContainer>
            <TextEditContentName
               onContentChange={onContentChange}
               onDetailChange={onDetailChange}
               detail={data.detail}
               contentName={data.contentName}
            />
            <SelectTopic
               topic={tableName}
               onIsChecked={onIsChecked}
               checked={data.topicName}
               token={csrf}
            />
            <KindofPosts onCheck={onCheckKindOfPosts} checked={data.kindofPosts} />
            <ThumbNail token={csrf} onChangeThumbnail={onChangeThumbnail} />
            <TemporaryPost
               temp={tempPostList}
               deleteTemporaryPost={deleteTemporaryPost}
            />
            <TextEditorBtnBox onSubmit={onSubmit} onSubmitTempPost={onSubmitTemporaryPost} />
         </WriteMetaContainer>
      </>
   );
};

export default Write;