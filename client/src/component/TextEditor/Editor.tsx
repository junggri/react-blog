import React, {useCallback, useEffect, useRef, useState} from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/TextEditor/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import {formats, modules} from "../../config/textEditor.config";
import {WriteBox, WriteConditionBox} from "../../styled-comp";
import {CreateNewTopic, KindOfPosts, PostsDetail, SelectTopic, StoragePost, TextEditBtnBox} from "component/index";
import useTopic from "../../useHooks/useTopic";
import useTextEdit from "../../useHooks/useTextEdit";
import {ITextEditModuleProps} from "../../modules/TextEditor/textEdit.interface";
import util from "../../lib/axios";
import {ITopicModuleProps} from "../../modules/Topic/topic.interface";
import useCSRF from "../../useHooks/useCSRF";
import {ICommonModuleProps} from "../../modules/Common/common.interface";
import useCommon from "../../useHooks/useCommon";


const Editor = ({history, match}: any) => {
    const [temp, setTemp] = useState(null)
    const csrf = useCSRF();
    const {setNewRequset}: ICommonModuleProps = useCommon();
    const {topic, makeOrDeleteAndReqNewTopics}: ITopicModuleProps = useTopic();
    const {
        data,
        setContent,
        setContentName,
        setTopic,
        setKindOfPosts,
        setDetail,
    }: ITextEditModuleProps = useTextEdit();

    const ref = useRef<any>(null);
    const TitleRef = useRef<string>(null)
    const DetailRef = useRef<string>(null)
    const TopicRef = useRef<string>(null)
    const KindRef = useRef<string>(null)

    useEffect(() => {
        if (match.params.tempId) {
            console.log(match.params.tempId)
        }
    }, [match])

    useEffect(() => {
        (async () => {
            const {data} = await util.getTempPost();
            setTemp(data);
        })();
    }, [])

    useEffect(() => {
        (async () => {
            const {data} = await util.checkJWTToken();
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

    return (
        <>
            <WriteBox>
                <WriteTopicName onNameChange={onNameChange}/>
                <ReactQuill theme="snow"
                            onChange={rteChange}
                            modules={modules}
                            formats={formats}
                            placeholder="입력하세요."
                            ref={ref}/>
            </WriteBox>
            <WriteConditionBox>
                <SelectTopic onIsChecked={onIsChecked} topic={topic}/>
                <CreateNewTopic topic={topic} token={csrf} onMakeOrDelteTopic={onMakeOrDelteTopic}/>
                <KindOfPosts onCheck={onCheckKindOfPosts}/>
                <PostsDetail onChangeDetail={onChangeDetail}/>
                <TextEditBtnBox onSubmit={onSubmit} onTemporaryPost={onTemporaryPost}/>
                <StoragePost temp={temp}/>
            </WriteConditionBox>
        </>
    );
};


export default Editor;