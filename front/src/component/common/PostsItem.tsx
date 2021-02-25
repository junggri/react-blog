import React from "react";
import { PostItemComp } from "../../styledComponent";
import { Link } from "react-router-dom";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";

interface IPostItem {
   data: IPostCommonProps
}

const PostItem = ({ data }: IPostItem) => {
   return (
      <PostItemComp>
         <section className="post-metadata-box">
            <Link to={`/topic/${data.topic}/${data.uid}`}>
               <div className="content-metadata">
                  <h1>{data.content_name}</h1>
                  <h2>{data.detail}</h2>
               </div>
            </Link>
            <div className="divide" />
            <Link to={`/topic/${data.topic}/${data.uid}`}>
               <div className="post-imgBox">
                  <img src="/images/Logo.svg" alt="" />
               </div>
            </Link>
         </section>
         <footer>
            <div className="post-created">
               <span>{data.created}</span>
            </div>
            <div className="comment">
               <span>{data.comment}</span>
               <span>comment</span>
            </div>
         </footer>
      </PostItemComp>
   );
};
export default PostItem;

