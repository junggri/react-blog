import React, { useEffect } from "react";
import { PostsContainerComp } from "../../styled-comp";
import { IPostDataProps, IPostsModuleProps } from "../../modules/Posts/posts.interface";
import usePosts from "../../useHooks/usePosts";
import { Link } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import Highlight from "react-highlight.js";
import createDOMPurify from "dompurify";
import ReactHelmet from "../../useHooks/useHelmet";
import { usePreloader } from "../../lib/PreloadContext";
import { onRequsetPost } from "../../modules/Posts";
import { useDispatch } from "react-redux";
import CommentContainer from "./Comment";
import { onGetComment } from "../../modules/Comment";

const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;

function PostsContainer({ match }: any) {
   const { getPost, post, onCleatPostData }: IPostsModuleProps = usePosts();
   const { data } = post;
   const dispatch = useDispatch();

   usePreloader(() => dispatch(onRequsetPost({ topic: match.params.topic, postsId: match.params.postsId })));
   usePreloader(() => dispatch(onGetComment(match.params.postsId)));

   useEffect(() => {
      getPost(match.params.topic, match.params.postsId);
      return () => onCleatPostData();
   }, [match.params.topic, match.params.postsId, onCleatPostData, getPost]);

   const MakeHtml = () => ({
      __html: typeof window === "object" ? (DOMPurify as any).sanitize((data as IPostDataProps).content) : null,
   });

   if (!post.data) return null;
   return (
      <>
         <PostsContainerComp>
            <ReactHelmet
               title={(data as IPostDataProps).result[0].content_name}
               keywords={(data as IPostDataProps).result[0].content_name}
               description={(data as IPostDataProps).result[0].detail}
            />
            <div className="posts-container-iconbox">
               <Link to="/">
                  <CgHome className="icon-tohome" />
               </Link>
            </div>
            <div className="posts-name">
               {(data as IPostDataProps).result[0].content_name}
            </div>
            <div className="posts-detail">
               {(data as IPostDataProps).result[0].detail}
            </div>
            <Highlight language="react">
               <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content" />
            </Highlight>
            <div className="posts-created">
               {(data as IPostDataProps).result[0].created}
            </div>
         </PostsContainerComp>
         <CommentContainer postid={match.params.postsId} topic={match.params.topic} />
      </>
   );
}

export default PostsContainer;