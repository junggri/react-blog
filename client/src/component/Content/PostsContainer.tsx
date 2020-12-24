import React, { useEffect } from "react";
import { PostsContainerComp } from "../../styled-comp";
import { ICommonModuleProps } from "../../modules/Common/common.interface";
import useCommon from "../../useHooks/useCommon";
import { IPostDataProps, IPostsModuleProps } from "../../modules/Posts/posts.interface";
import usePosts from "../../useHooks/usePosts";
import Highlight from "react-highlight.js";
import { Link } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import createDOMPurify from "dompurify";

const DOMPurify = createDOMPurify(window);

function PostsContainer({ match }: any) {
   const { width }: ICommonModuleProps = useCommon();
   const { getPost, post }: IPostsModuleProps = usePosts();

   const { data, loading, error } = post;

   useEffect(() => {
      getPost(match.params.topic, match.params.postsId);
   }, [match.params.topic, match.params.postsId]);


   const MakeHtml = () => ({ __html: DOMPurify.sanitize((data as IPostDataProps).content) });


   if (!post.data) return null;

   return (
      <PostsContainerComp width={width}>
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
         <Highlight language="react typescript javascript react">
            <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content" />
         </Highlight>
         <div className="posts-created">
            {(data as IPostDataProps).result[0].created}
         </div>
      </PostsContainerComp>
   );
}

export default PostsContainer;

