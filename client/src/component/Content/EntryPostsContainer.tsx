import React from "react";
import { EntryPostsContainerComp, EntryPostsItemComp } from "../../styled-comp";
import { Link } from "react-router-dom";
import { IoColorWand } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { IAllPost, IPostCommonProps } from "../../modules/Posts/posts.interface";
import isNew from "../../lib/isNewPost";
import ReactHelmet from "../../useHooks/useHelmet";

interface IEntryPostsContainer {
   posts: IAllPost
   onDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
   login: boolean,
   csrf: string
}

const EntryPostsContainer = ({ posts, onDelete, login, csrf }: IEntryPostsContainer) => {
   if (!posts.data) return null;
   const data = Object.values(posts.data).flat();

   return (
      <EntryPostsContainerComp>
         <ReactHelmet
            title={"정그리의 블로그입니다."}
            keywords={"자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드"}
            description={"자바스크립트와 웹 프로그래밍, 매일 매일 성장해 나가기를 원하는 블로입니다."}
         />
         {data.map((e: IPostCommonProps) => (
            <EntryPostsItemComp key={e.uid}>
               <span className="item-created">🗓
                  {e.created}
                  <Link to={`/tag/${e.topic}`}>
                     <span className="topic_link">{(e.topic).toUpperCase()}</span>
                  </Link>
                  {isNew(e.date) && <span className="post_is_new">NEW</span>}
               </span>
               <Link to={`/topic/${e.topic}/${e.uid}`}>
                  <div className="item-contentName">
                     <span>{e.content_name}</span>
                  </div>
               </Link>
               <div className="item-detail">{e.detail}</div>
               {login &&
               <div className="posts-admin-box" data-id={e.uid} data-topic={e.topic}>
                  <span className='posts-admin-modify'>
                     <Link to={`/write?modify=${e.uid}&topic=${e.topic}`}><IoColorWand /></Link>
                  </span>
                  <span className='posts-admin-delete' onClick={onDelete}><MdDelete /></span>
               </div>
               }
               <div className="content-cmt-box">
                  <FaRegComment className="content-cmt-icons" />
                  <span>{e.comment}</span>
               </div>
            </EntryPostsItemComp>
         ))}
         <div className="sidebar-copyright">Copyright 2021. junggri All rights reserved.</div>
      </EntryPostsContainerComp>
   );
};

export default (EntryPostsContainer);