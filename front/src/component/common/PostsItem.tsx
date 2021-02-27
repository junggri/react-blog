import React from "react";
import { PostItemComp } from "../../styledComponent";
import { Link } from "react-router-dom";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { FiDelete } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";

interface IPostItem {
   data: IPostCommonProps
   onDelete: (topic: string, identifier: string) => void
}

const PostItem = ({ data, onDelete }: IPostItem) => {
   const onClickDeleteBtn = (e: React.MouseEvent) => {
      onDelete(data.topic, data.uid);
   };

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
         <section className="post-control-icon-box">
            <span><Link to={`/write?update=${data.uid}&topic=${data.topic}`}><AiTwotoneEdit /></Link></span>
            <span onClick={onClickDeleteBtn}><FiDelete /></span>
         </section>
      </PostItemComp>
   );
};
export default PostItem;

