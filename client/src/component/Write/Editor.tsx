import React, {MutableRefObject, useCallback, useEffect, useRef, useState} from "react";
import ReactQuill from "react-quill";
import WriteTopicName from "component/Write/WriteTopicName";
import "react-quill/dist/quill.snow.css";
import {formats, modules} from "../../config/textEditor.config";
import {WriteBox, WriteConditionBox} from "../../styled-comp";
import {CreateNewTopic, KindOfPosts, PostsDetail, SelectTopic, WriteBtnBox} from "component/index";
import useCommon from "../../useHooks/useCommon";
import useTopic from "../../useHooks/useTopic";
import util from "../../lib/axios";

const Editor = ({history}: any) => {
    const {token} = useCommon();
    const {topic} = useTopic();

    const [value, setValue] = useState<string>("");
    const [contentName, setContentName] = useState<string>("");
    const [topicName, setTopicName] = useState<string>("");
    const [kindOfPosts, setKindOfPosts] = useState<string>("");
    const [detail, setDetail] = useState<string>("");

    const ref: any = useRef(null) as MutableRefObject<any>;

    useEffect(() => {
        ref.current.focus();
    }, []);

    const onNameChange = useCallback((data: string) => {
        setContentName(data);
    }, [contentName]);


    const onIsChecked = useCallback((name: string) => {
        setTopicName(name);
    }, [topicName]);

    const onCheckKindOfPosts = useCallback((kindOf: string) => {
        setKindOfPosts(kindOf);
    }, [kindOfPosts]);

    const onChageDetail = useCallback((payload: string) => {
        setDetail(payload);
    }, [detail]);

    const rteChange = (content: any, delta: any, source: any, editor: any) => {
        setValue(ref.current.state.value);
    };

    const onSubmit = useCallback(async () => {
        const contents = {
            contentName: contentName,
            content: value,
            topic: topicName,
            kindOfPosts: kindOfPosts,
            detail: detail,
        };
        if (value && contentName && topicName) {
            let result = await util.savePost(contents, token);
            if (result) history.push("/");
        } else {
            alert("내용을 입력하세요");
            return false;
        }
    }, [contentName, value, topicName, kindOfPosts, detail]);


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
                <CreateNewTopic topic={topic} token={token}/>
                <KindOfPosts onCheck={onCheckKindOfPosts}/>
                <PostsDetail onChangeDetail={onChageDetail}/>
                <WriteBtnBox onSubmit={onSubmit}/>
            </WriteConditionBox>
        </>
    );
};


export default Editor;