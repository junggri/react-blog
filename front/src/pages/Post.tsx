import React, { useEffect } from "react";
import { PostsContainerComp } from "../styledComponent";
import { Link, RouteComponentProps } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import Highlight from "react-highlight.js";
import { IPostsModuleProps } from "@modules/Posts/posts.interface";
import usePosts from "@useHooks/usePosts";
import createDOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import Meta from "@useHooks/UseMeta";
import { CommentContainer } from "@component/index";
import { usePreloader } from "@lib/PreloadContext";
import { onRequsetPost } from "@modules/Posts";

// import "../src/styles/highlight/atom-one-light.css";


interface IMatchParams {
   id: string
   topic: string
   postId: string
}

const Post = ({ match }: RouteComponentProps<IMatchParams>) => {

   const { getPost, post, onCleatPostData }: IPostsModuleProps = usePosts();
   const { data } = post;
   const dispatch = useDispatch();

   useEffect(() => {
      getPost(match.params.topic, match.params.postId);
      return () => onCleatPostData();
   }, [match.params.topic, match.params.postId, onCleatPostData, getPost]);

   const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;

   usePreloader(() => dispatch(onRequsetPost({ topic: match.params.topic, postsId: match.params.postId })));

   if (!data) return null;

   const meta = {
      title: data.content_name,
      description: data.detail,
      image: data.thumbnail === null
         ? "https://www.junggri.com/images/ogLogo.jpg"
         : `https://www.junggri.com/thumbnail/${data.thumbnail}`,
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
               {data.content_name}
            </div>
            <div className="posts-detail">
               {data.detail}
            </div>
            <Highlight language="">
               <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content" />
            </Highlight>
            <div className="posts-created">
               {data.created}
            </div>
         </PostsContainerComp>
         <CommentContainer
            topic={match.params.topic}
            postId={match.params.postId}
            contentName={data.content_name}
         />
      </>
   );
};

export default Post;