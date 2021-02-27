import React, { RefObject, useCallback, useEffect, useRef, useState } from "react";
import util from "../lib/axios";
import qs from "qs";
import { Snow } from "../styles/snow";
import { RouteComponentProps } from "react-router-dom";
import { formats, modules } from "../config/textEditor.config";
import { WriteMetaContainer } from "../styledComponent";
import { KindofPosts, SelectTopic, TemporaryPost, TextEditContentName, TextEditorBtnBox, ThumbNail } from "../component";
import useCSRF from "../useHooks/useCSRF";
import useTopic from "../useHooks/useTopic";
import useCommon from "../useHooks/useCommon";
import useTextEdit from "../useHooks/useTextEdit";
import usePosts from "../useHooks/usePosts";
import checkUserState from "../lib/checkUserState";
import validationWrite from "../lib/validationWrite";
import { ITopicModuleProps } from "../modules/Topic/topic.interface";
import { ITempPost, ITextEditModuleProps } from "../modules/TextEditor/textEdit.interface";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import { IPostCommonProps, IPostsModuleProps } from "../modules/Posts/posts.interface";

interface ITextEdit extends HTMLElement {
   state: any
   editor: any
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

//TODO 임시저장 저장/또 임시저장 그리고 axios extension 공부하기

const Write = ({ history, location }: RouteComponentProps) => {
   const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
   const csrf = useCSRF();
   const textEdit = useRef<ITextEdit>(null);
   const [fetch, setFetch] = useState<boolean>(false);
   const { AllPosts, getAllPosts }: IPostsModuleProps = usePosts();
   const { setNewRequset, login }: ICommonModuleProps = useCommon();
   const { tableName, tempPostList, requestTopicAndTempPostData }: ITopicModuleProps = useTopic();
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


   const getDataFromModeAndSetData = async (mode: string, cb: any, content: ITempPost | IPostCommonProps) => {
      const { data } = await cb;
      console.log(data);
      if (textEdit.current) {
         mode === "temp"
            ? textEdit.current.editor.scrollingContainer.innerHTML = data.data.getTemporaryContent.content
            : textEdit.current.editor.scrollingContainer.innerHTML = data.data.getPostDataUpdate.content;
      }
      setTempData({
         contentName: content.content_name,
         topicName: content.topic,
         kindofPosts: mode === "temp" ? "" : (content as IPostCommonProps).kindofPosts,
         detail: content.detail,
      });
   };

   useEffect(() => {
      if (Object.keys(qs.parse(location.search))[0] !== undefined) {
         const mode: string = Object.keys(qs.parse(location.search))[0].split("?")[1];
         const uid = Object.entries(qs.parse(location.search))[0][1] as string;
         const temp_post_data: ITempPost[] | undefined = tempPostList?.filter((e: ITempPost) => e.uid === uid);
         if (mode === "temp" && csrf && temp_post_data) {
            getDataFromModeAndSetData(mode, util.getTemporaryContent(uid, csrf), temp_post_data[0]);
            setFetch(false);
         } else if (mode === "update" && csrf && !fetch) {
            if (!AllPosts.data) getAllPosts(csrf);
            if (AllPosts.data) {
               const post_data = AllPosts.data.filter((e: IPostCommonProps) => e.uid === uid);
               getDataFromModeAndSetData(mode, util.getPostDataForUpdate(uid, csrf), post_data[0]);
               setFetch(true);
            }
         }
      }
   }, [location, csrf, tempPostList, AllPosts.data]);

   useEffect(() => {
      if (csrf && !tempPostList && !tableName) requestTopicAndTempPostData(csrf);
      const status = checkUserState();
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
      if (valiidation && csrf) {
         const result = await util.savePost({ data, csrf });
         if (result?.status === 200) history.push("/");
         setNewRequset(true);
      } else {
         alert("정보를 입력하세요");
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
      if (csrf && ref.current) {
         await util.deleteTemporaryPost(identifier, csrf);
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