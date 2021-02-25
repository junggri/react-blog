import React, { useEffect } from "react";
import { PostsContainerComp } from "../styledComponent";
import { Link, RouteComponentProps } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import Highlight from "react-highlight.js";
import { IPostsModuleProps } from "../modules/Posts/posts.interface";
import usePosts from "../useHooks/usePosts";
import useCSRF from "../useHooks/useCSRF";
import createDOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import Meta from "../useHooks/UseMeta";
import { usePreloader } from "../lib/PreloadContext";
import { onPreloadPost } from "../modules/Posts";

interface IMatchParams {
   id: string
   topic: string
   postId: string
}

const Post = ({ match }: RouteComponentProps<IMatchParams>) => {
   const csrf: string | null = useCSRF();
   const { getPost, post, onCleatPostData }: IPostsModuleProps = usePosts();
   const { data } = post;
   const dispatch = useDispatch();

   // usePreloader(() => dispatch(onPreloadPost({ topic: match.params.topic, postsId: match.params.postId })));
   // usePreloader(() => dispatch(onGetComment(match.params.postId)));

   useEffect(() => {
      if (csrf) {
         getPost(match.params.topic, match.params.postId, csrf);
      }
      return () => onCleatPostData();
   }, [match.params.topic, match.params.postId, onCleatPostData, getPost, csrf]);


   const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;

   usePreloader(() => dispatch(onPreloadPost({ topic: match.params.topic, postsId: match.params.postId })));

   if (!data) return null;
   const meta = {
      title: data.result[0].content_name,
      description: data.result[0].detail,
      image: !data.result[0].thumbnail
         ? "https://www.junggri.com/images/og.jpg"
         : `https://www.junggri.com/thumbnail/${data.result[0].thumbnail}`,
      type: "website",
   };
   const MakeHtml = () => ({
      __html: typeof window === "object" ? (DOMPurify as any).sanitize(data.content) : null,
   });

   return (
      <>
         <Meta data={meta} />
         <PostsContainerComp>
            <div className="posts-container-iconbox">
               <Link to="/">
                  <CgHome className="icon-tohome" />
               </Link>
            </div>
            <div className="posts-name">
               {data.result[0].content_name}
            </div>
            <div className="posts-detail">
               {data.result[0].detail}
            </div>
            <Highlight language="react">
               <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content" />
            </Highlight>
            <div className="posts-created">
               {data.result[0].created}
            </div>
         </PostsContainerComp>
         {/*<CommentContainer*/}
         {/*   postname={(data as IPostDataProps).result[0].content_name}*/}
         {/*   postid={match.params.postsId}*/}
         {/*   topic={match.params.topic}*/}
         {/*/>*/}
      </>
   );
};

export default Post;