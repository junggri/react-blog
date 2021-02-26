import React, { useCallback, useEffect, useRef, useState } from "react";
import util from "../../lib/axios";
import { formats, modules } from "../../config/textEditor.config";
import { WriteBox, WriteConditionBox } from "../../styled-comp";
import useTopic from "../../useHooks/useTopic";
import useTextEdit from "../../useHooks/useTextEdit";
import useCSRF from "../../useHooks/useCSRF";
import useCommon from "../../useHooks/useCommon";
import { ITextEditModuleProps } from "../../modules/TextEditor/textEdit.interface";
import { ITopicModuleProps } from "../../modules/Topic/topic.interface";
import { ICommonModuleProps } from "../../modules/Common/common.interface";
import { ITempPost } from "../../interface/index.interface";
import { CreateNewTopic, KindOfPosts, PostsDetail, SelectTopic, StoragePost, TextEditBtnBox, Thumbnail, WriteTopicName } from "../index";
import qs from "query-string";
import checkUserState from "../../lib/checkUserState";


const Editor = ({ history, location }: any) => {
   const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
   const csrf = useCSRF();
   const ref = useRef<any>(null);
   const [mode, setMode] = useState<string>("write");
   const [temp, setTemp] = useState([]);
   const { setNewRequset, login }: ICommonModuleProps = useCommon();
   const { topic, requestTopic }: ITopicModuleProps = useTopic();
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
      (async () => {
         const { data } = await util.getTempPost();
         setTemp(data);
      })();
      return () => setTempData({
         contentName: "",
         content: "",
         topicName: "",
         kindofPosts: "",
         detail: "",
      });
   }, [setTempData]);

   useEffect(() => {
      const token = localStorage.getItem("_jt");
      const status = checkUserState(token);
      if (status) {
         requestTopic();
         ref.current.focus();
      } else {
         history.push("/");
      }
   }, [history, requestTopic, login]);


   const howToSave = useCallback((mode: string, cb: any, _data?: ITempPost) => {
      // if (!_data) return history.push("/write");
      setMode(mode);
      (async () => {
         const { data } = await cb;
         ref.current.editor.scrollingContainer.innerHTML = mode === "temp" ? data : data.content;
         setTempData({
            contentName: mode === "temp" ? _data?.content_name : data.result[0].content_name,
            content: mode === "temp" ? "" : data.content,
            topicName: mode === "temp" ? _data?.topic : data.result[0].topic,
            kindofPosts: mode === "temp" ? "" : data.result[0].kindofPosts,
            detail: mode === "temp" ? _data?.detail : data.result[0].detail,
         });
      })();
   }, [setTempData]);

   useEffect(() => {
      const _qs = qs.parse(location.search);
      if (Object.keys(_qs)[0] === "temp" && temp.length !== 0) {
         const post: ITempPost[] = temp.filter((e: ITempPost) => e.uid === Object.values(_qs)[0]);
         howToSave("temp", util.getTempPostFromId(Object.values(_qs)[0] as string), post[0]);
      } else if (Object.keys(_qs)[0] === "modify") {
         howToSave("modify", util.getPostFromPostId(Object.values(_qs)[1] as string, Object.values(_qs)[0] as string));
      }
   }, [setTempData, temp, location, howToSave]);


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

   const onChangeThumbnail = useCallback((img: string) => {
      setThumbnail(img);
   }, [setThumbnail]);

   const onMakeOrDelteTopic = useCallback(() => {
      requestTopic();
   }, [requestTopic]);


   const onSubmit = async (): Promise<void> => {
      if (data.content === "" || data.contentName === "" || data.detail === "" || data.kindofPosts === "" || data.topicName === "") {
         alert("정보를 입력하세요");
      } else {
         const result = mode === "write"
            ? await util.savePost(data, csrf)
            : mode === "temp"
               ? await util.saveTempPost(data, Object.values(qs.parse(location.search))[0] as string, csrf)
               : await util.modifyPost(data, Object.values(qs.parse(location.search))[0] as string, csrf);
         if (result.request.status === 200) history.push("/");
         setNewRequset(true);
      }
   };

   const onSaveTemporaryPost = async (): Promise<void> => {
      const temp_postId = Object.values(qs.parse(location.search))[0] as string;
      const result = await util.temporaryPost(data, csrf, temp_postId);
      if (result.request.status === 200) history.push("/");
   };

   const onDelete = useCallback((target: string) => {
      (async () => {
         await util.deleteTempPost(target, csrf);
      })();
      const new_temp = temp.filter((e: ITempPost) => e.uid !== target);
      setTemp(new_temp);
   }, [temp, csrf]);


   return (
      <>
         <WriteBox>
            <WriteTopicName onNameChange={onNameChange} value={data.contentName} />
            <ReactQuill theme="snow"
                        onChange={rteChange}
                        modules={modules}
                        formats={formats}
                        placeholder="입력하세요."
                        ref={ref} />
         </WriteBox>
         <WriteConditionBox>
            <SelectTopic onIsChecked={onIsChecked} topic={topic} checked={data.topicName} />
            <CreateNewTopic topic={topic} token={csrf} onMakeOrDelteTopic={onMakeOrDelteTopic} />
            <KindOfPosts onCheck={onCheckKindOfPosts} checked={data.kindofPosts} />
            <PostsDetail onChangeDetail={onChangeDetail} detailValue={data.detail} />
            <Thumbnail token={csrf} onChangeThumbnail={onChangeThumbnail} />
            <TextEditBtnBox onSubmit={onSubmit} onSaveTemporaryPost={onSaveTemporaryPost} />
            <StoragePost temp={temp} onDelete={onDelete} />
         </WriteConditionBox>
      </>
   );
};


export default Editor;
