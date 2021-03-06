import React from "react";
import { PostItemComp } from "@src/styledComponent";
import { Link } from "react-router-dom";
import { IPostCommonProps } from "@modules/Posts/posts.interface";
import { FiDelete } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import isNewPost from "@src/lib/isNewPost";

interface IPostItem {
   data: IPostCommonProps
   onDelete: (topic: string, identifier: string) => void
   login: boolean
}

const PostItem = ({ data, onDelete, login }: IPostItem) => {

   const onClickDeleteBtn = (e: React.MouseEvent): void => {
      const check: boolean = window.confirm("삭제할꺼야??");
      if (check) onDelete(data.topic, data.uid);
   };


   // const onClickLikeBtn = (e: React.MouseEvent): void => {
   //
   // };

   return (
      <PostItemComp>
         {isNewPost(data.created) &&
         <img src="./images/new.svg" alt="새로운 포스트" className="newpost__img" />
         }
         <div className="categories">
            <Link to={`/tag/${data.topic}`}>{data.topic}</Link>
         </div>
         <section className="post-metadata-box">
            <Link to={`/topic/${data.topic}/${data.uid}`}>
               <div className="content-metadata">
                  <h1>
                     <span>
                        {data.content_name}
                     </span>
                  </h1>
                  <h2>{data.detail}</h2>
               </div>
            </Link>
            <footer>
               <div className="post-created">
                  <span>{data.created}</span>
               </div>
               <div className="comment">
                  <span>{data.comment}</span>
                  <span>comment</span>
               </div>
            </footer>
            <div className="divide" />
            <Link to={`/topic/${data.topic}/${data.uid}`}>
               <div className="post-imgBox">
                  <img src={process.env.NODE_ENV === "development"
                     ? "/images/Logo.svg"
                     : !data.thumbnail
                        ? "/images/Logo.svg"
                        : `https://www.junggri.com/thumbnail/${data.thumbnail}`} alt="썸네일" />
               </div>
            </Link>
         </section>
         {login &&
         <section className="post-control-icon-box">
            <span><Link to={`/write?update=${data.uid}&topic=${data.topic}`}><AiTwotoneEdit /></Link></span>
            <span onClick={onClickDeleteBtn}><FiDelete /></span>
         </section>
         }
      </PostItemComp>
   );
};
export default React.memo(PostItem);

