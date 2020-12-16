import React, {useEffect} from "react";
import usePosts from "../../useHooks/usePosts";
import {useSelector} from "react-redux";
import {RootState} from "../../modules";
import {PostsBoxComp} from "../../styled-comp";
import Highlight from "react-highlight.js";

interface IPostsBoxProps {
    match: any
}

interface IPostProps {
    data: any,
    loading: boolean | null
    error: Error | null
}

const PostsBox = ({match}: IPostsBoxProps) => {
    const {getPost} = usePosts();
    const {post} = useSelector((state: RootState) => state.posts);
    const {data, loading, error}: IPostProps = post;

    useEffect(() => {
        getPost(match.params.topic, match.params.postid);
    }, [match.params.topic, match.params.postid]);


    const MakeHtml = () => ({__html: data.content});

    if (loading) return <div>...로딩중</div>;
    if (data == null) return null;

    return (
        <PostsBoxComp>
            <div className="posts-name">
                {data.result[0].content_name}
            </div>
            <Highlight language='react'>
                <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content"></div>
            </Highlight>
        </PostsBoxComp>
    );

};
export default PostsBox;