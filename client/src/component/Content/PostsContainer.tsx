import React, {useEffect} from "react";
import {PostsContainerComp} from "../../styled-comp";
import {ICommonModuleProps} from "../../modules/Common/common.interface";
import useCommon from "../../useHooks/useCommon";
import {IPostDataProps, IPostsModuleProps} from "../../modules/Posts/posts.interface";
import usePosts from "../../useHooks/usePosts";
import {Link} from "react-router-dom";
import {CgHome} from "react-icons/cg";
import Highlight from "react-highlight.js";
import createDOMPurify from "dompurify";
import ReactHelmet from "../../useHooks/useHelmet";
import icons from "../../image/Logo.svg"

const DOMPurify = createDOMPurify(window);

function PostsContainer({match}: any) {
    const {width}: ICommonModuleProps = useCommon();
    const {getPost, post, onClearPost}: IPostsModuleProps = usePosts();
    const {data} = post;

    useEffect(() => {
        getPost(match.params.topic, match.params.postsId);
        return () => onClearPost();
    }, [match.params.topic, match.params.postsId, onClearPost, getPost]);

    const MakeHtml = () => ({__html: DOMPurify.sanitize((data as IPostDataProps).content)});

    if (!post.data) return null;

    return (
        <PostsContainerComp width={width}>
            <ReactHelmet
                keywords={(data as IPostDataProps).result[0].content_name}
                description={(data as IPostDataProps).result[0].detail}
                title={(data as IPostDataProps).result[0].content_name}
                favicon={icons}
            />
            <div className="posts-container-iconbox">
                <Link to="/">
                    <CgHome className="icon-tohome"/>
                </Link>
            </div>
            <div className="posts-name">
                {(data as IPostDataProps).result[0].content_name}
            </div>
            <div className="posts-detail">
                {(data as IPostDataProps).result[0].detail}
            </div>
            <Highlight language='react'>
                <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content"/>
            </Highlight>
            <div className="posts-created">
                {(data as IPostDataProps).result[0].created}
            </div>
        </PostsContainerComp>
    );
}

export default PostsContainer;