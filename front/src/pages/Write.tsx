import React, { RefObject, useCallback, useEffect, useRef, useState } from "react";
import util from "@lib/axios";
import QueryString, * as qs from "qs";
import { Snow } from "../styles/snow";
import { RouteComponentProps } from "react-router-dom";
import { formats, modules } from "@config/textEditor.config";
import { WriteMetaContainer } from "../styledComponent";
import { KindofPosts, SelectTopic, TemporaryPost, TextEditContentName, TextEditorBtnBox, ThumbNail } from "../component";
import useCSRF from "@useHooks/useCSRF";
import useTopic from "@useHooks/useTopic";
import useCommon from "@useHooks/useCommon";
import useTextEdit from "@useHooks/useTextEdit";
import checkUserState from "@lib/checkUserState";
import validationWrite from "@lib/validationWrite";
import { ITopicModuleProps } from "@modules/Topic/topic.interface";
import { ITextEditModuleProps } from "@modules/TextEditor/textEdit.interface";
import { ICommonModuleProps } from "@modules/Common/common.interface";
import { IGetDataFromMode, IGetDataFromModeData, ITextEditRefObject } from "@src/globalInterface";
import { AxiosPromise } from "axios";

//TODO 임시저장 저장/또 임시저장 그리고 axios extension 공부하기


const Write = ({ history, location }: RouteComponentProps) => {
   const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
   const csrf: string | null = useCSRF();
   const [mode, setMode] = useState<string>("write");
   const textEdit = useRef<ITextEditRefObject>(null);
   const [fetch, setFetch] = useState<boolean>(false);
   const { setNewRequset, login }: ICommonModuleProps = useCommon();
   const { tableName, tempPostList, requestTopicAndTempPostData }: ITopicModuleProps = useTopic();
   const { data, setContent, setContentName, setTopic, setKindOfPosts, setDetail, setTempData, setThumbnail }: ITextEditModuleProps = useTextEdit();


   const getDataFromMode = async (mode: string, cb: AxiosPromise<IGetDataFromMode<IGetDataFromModeData>>) => {
      const { data } = await cb;
      if (textEdit.current) textEdit.current.editor.scrollingContainer.innerHTML = data.data.getDataFromMode.content;
      setTempData({
         contentName: data.data.getDataFromMode.postdata.content_name,
         topicName: data.data.getDataFromMode.postdata.topic,
         kindofPosts: data.data.getDataFromMode.postdata.kindofPosts,
         detail: data.data.getDataFromMode.postdata.detail,
         thumbnail: data.data.getDataFromMode.postdata.thumbnail,
      });
   };

   useEffect(() => {
      if (Object.entries(qs.parse(location.search))[0]) {//수정이나 임시저장을 불러올때 사용되는 것들
         const mode: string = Object.entries(qs.parse(location.search))[0][0];
         const identifier: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined = Object.entries(qs.parse(location.search))[0][1];
         if (mode === "?temp" && csrf && typeof identifier === "string" && !fetch) {
            getDataFromMode(mode, util.getDataFromMode(csrf, identifier));
            setFetch(true);
         } else if (mode === "?update" && csrf && typeof identifier === "string") {
            const topic: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined = Object.entries(qs.parse(location.search))[1][1];
            if (typeof topic === "string") getDataFromMode(mode, util.getDataFromMode(csrf, identifier, topic));
         }
         setMode(mode.split("?")[1]);
      } else {
         setMode("write");
      }
   }, [location, csrf, tempPostList]);


   useEffect(() => {
      const status = checkUserState();
      if (csrf && !tempPostList && !tableName) requestTopicAndTempPostData(csrf);
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


   const onSubmit = async (): Promise<void> => {
      const valiidation: boolean = validationWrite(data);
      const identifier = Object.values(qs.parse(location.search))[0] as string;
      if (valiidation && csrf) {
         const result = mode === "write"
            ? await util.savePost({ data, csrf })
            : mode === "temp"
               ? await util.deleteTemporaryPostAndSavePost(data, identifier, csrf)
               : await util.updatePost(data, identifier, csrf);
         setNewRequset(true);
         onRequestAfterMakeOrDeleteTopic(csrf);
         history.push("/");
      } else {
         alert("정보를 입력하세요");
      }
   };

   const onSubmitTemporaryPost = async (): Promise<void> => {
      if (data.contentName === "") return;
      const temp_uid = Object.values(qs.parse(location.search))[0];
      if (csrf) {
         const result = await util.saveTemporaryPost(data, csrf, temp_uid as string);
         onRequestAfterMakeOrDeleteTopic(csrf);
         if (result.status == 200) history.push("/");
      }
   };

   const deleteTemporaryPost = async (identifier: string, ref: RefObject<HTMLSpanElement>) => {
      if (csrf && ref.current) {
         await util.deleteTemporaryPost(identifier, csrf);
         onRequestAfterMakeOrDeleteTopic(csrf);
         ref.current.style.display = "none";
      }
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
               onRequestAfterMakeOrDeleteTopic={onRequestAfterMakeOrDeleteTopic}
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