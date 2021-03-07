import React, { RefObject, useCallback, useEffect, useRef, useState } from "react";
import util from "@lib/axios";
import QueryString, * as qs from "qs";
import { Snow } from "../styles/snow";
import { RouteComponentProps } from "react-router-dom";
import { formats, modules } from "@config/textEditor.config";
import { WriteLeftBoxContainer, WriteMetaContainer } from "../styledComponent";
import { KindofPosts, SelectTopic, TemporaryPost, TextEditContentName, ThumbNail } from "../component";
import useCSRF from "@useHooks/useCSRF";
import useTopic from "@useHooks/useTopic";
import useCommon from "@useHooks/useCommon";
import useTextEdit from "@useHooks/useTextEdit";
import validationWrite from "@lib/validationWrite";
import { ITopicModuleProps, IWriteData } from "@modules/Topic/topic.interface";
import { ITextEditModuleProps } from "@modules/TextEditor/textEdit.interface";
import { ICommonModuleProps } from "@modules/Common/common.interface";
import { IGetDataFromMode, ITextEditRefObject } from "@src/globalInterface";
import { AxiosPromise } from "axios";
// import "../styles/highlight/atom-one-light.css";
//TODO 임시저장 저장/또 임시저장 그리고 axios extension 공부하기


const Write = ({ history, location }: RouteComponentProps) => {
   const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
   const csrf: string | null = useCSRF();
   const [mode, setMode] = useState<string>("write");
   const textEdit = useRef<ITextEditRefObject>(null);
   const { setNewRequset }: ICommonModuleProps = useCommon();
   const { textEditorData, requestTopicAndTempPostData }: ITopicModuleProps = useTopic();
   const { data, setContent, setContentName, setTopic, setKindOfPosts, setDetail, setTempData, setThumbnail }: ITextEditModuleProps = useTextEdit();
   const { posts, tables }: IWriteData = textEditorData;

   const getDataFromMode = useCallback(async (cb: AxiosPromise<IGetDataFromMode>) => {
      const { data } = await cb;
      if (textEdit.current) textEdit.current.editor.scrollingContainer.innerHTML = data.content;
      setTempData({
         contentName: data.content_name,
         topicName: data.topic,
         content: data.content,
         kindofPosts: data.kindofPosts,
         detail: data.detail,
         thumbnail: data.thumbnail ? data.thumbnail : null,
      });
   }, [setTempData]);

   useEffect(() => {
      if (Object.entries(qs.parse(location.search))[0]) {//수정이나 임시저장을 불러올때 사용되는 것들
         const mode: string = Object.entries(qs.parse(location.search))[0][0];
         const identifier: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined = Object.entries(qs.parse(location.search))[0][1];
         if (mode === "?temp" && typeof identifier === "string") {
            getDataFromMode(util.getDataFromMode(identifier));
         } else if (mode === "?update" && typeof identifier === "string") {
            const topic: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined = Object.entries(qs.parse(location.search))[1][1];
            if (typeof topic === "string") getDataFromMode(util.getDataFromMode(identifier, topic));
         }
         setMode(mode.split("?")[1]);
      } else {
         setMode("write");
      }
   }, [location, getDataFromMode]);

   useEffect(() => {
      document.addEventListener("keydown", async (e) => {
         if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e["key"] === "s") {
            e.preventDefault();

         }
      }, false);
   }, []);
   // const refresh = (data: any) => {
   //    localStorage.data = (JSON.stringify(data));
   // };


   useEffect(() => {
      requestTopicAndTempPostData();
      if (textEdit.current) textEdit.current.focus();
      return () => setTempData({
         contentName: "",
         content: "",
         topicName: "",
         kindofPosts: "",
         detail: "",
         thumbnail: null,
      });
   }, [requestTopicAndTempPostData, setTempData]);


   const setInLocalStorage = () => {
      localStorage.
   };

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

   const onDetailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDetail(e.target.value);
   }, [setDetail]);

   const onChangeThumbnail = useCallback((img: string) => {
      setThumbnail(img);
   }, [setThumbnail]);

   const onRequestAfterMakeOrDeleteTopic = useCallback(() => {
      requestTopicAndTempPostData();
   }, [requestTopicAndTempPostData]);


   const onSubmit = async (): Promise<void> => {
      const valiidation: boolean = validationWrite(data);
      if (!valiidation) alert("정보를 입력하세요");
      const identifier = Object.values(qs.parse(location.search))[0] as string;
      if (valiidation && csrf) {
         mode === "write"
            ? await util.savePost({ data, csrf })
            : mode === "temp"
            ? await util.deleteTemporaryPostAndSavePost(data, identifier, csrf)
            : await util.updatePost(data, identifier, csrf);
         setNewRequset(true);
         onRequestAfterMakeOrDeleteTopic();
         history.push("/");
      }
   };

   const onSubmitTemporaryPost = async (): Promise<void> => {
      if (data.contentName === "") return;
      const temp_uid = Object.values(qs.parse(location.search))[0];
      if (csrf) {
         const result = await util.saveTemporaryPost(data, csrf, temp_uid as string);
         onRequestAfterMakeOrDeleteTopic();
         if (result.status === 200) history.push("/");
      }
   };


   const deleteTemporaryPost = async (identifier: string, ref: RefObject<HTMLSpanElement>) => {
      if (csrf && ref.current) {
         const { data } = await util.deleteTemporaryPost(identifier, csrf);
         if (data.state) {
            onRequestAfterMakeOrDeleteTopic();
            ref.current.style.display = "none";
         } else {
            alert("오류가 났습니다");
         }
      }
   };

   return (
      <>
         <Snow />
         <WriteLeftBoxContainer>
            <TextEditContentName
               onContentChange={onContentChange}
               contentName={data.contentName}
            />
            <ReactQuill
               theme="snow"
               modules={modules}
               formats={formats}
               onChange={rteChange}
               placeholder="입력하기"
               ref={textEdit}
            />
            <div className="write-btn-box-container">
               <div className="btn-box">
                  <button onClick={onSubmitTemporaryPost}>임시저장</button>
                  <button onClick={onSubmit}>게시하기</button>
               </div>
            </div>
         </WriteLeftBoxContainer>
         <WriteMetaContainer>
            <div className="detail">
               <h1>요약을 작성해주세요.</h1>
               <input type="text" name="content_detail" placeholder="요약을 작성하세요." className="summary" onChange={onDetailChange} value={data.detail} />
            </div>
            <SelectTopic
               topic={tables}
               onIsChecked={onIsChecked}
               checked={data.topicName}
               onRequestAfterMakeOrDeleteTopic={onRequestAfterMakeOrDeleteTopic}
               token={csrf}
            />
            <KindofPosts onCheck={onCheckKindOfPosts} checked={data.kindofPosts} />
            <ThumbNail token={csrf} onChangeThumbnail={onChangeThumbnail} />
            <TemporaryPost
               temp={posts}
               deleteTemporaryPost={deleteTemporaryPost}
            />
         </WriteMetaContainer>
      </>
   );
};

export default Write;