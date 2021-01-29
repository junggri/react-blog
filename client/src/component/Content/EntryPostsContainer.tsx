import React from "react";
import { EntryPostsContainerComp, EntryPostsItemComp } from "../../styled-comp";
import { Link } from "react-router-dom";
import { IoColorWand } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
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
            title={"정그리 블로그의 모든 게시글들"}
            keywords={"자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드"}
            description={"자바스크립트부터 nodejs 그리고 알고리즘과 함께 성장해나가기를 기원하는 블로그입니다. 점점 더 발전해나가는 기술들을 함께 익히고 정그리 블로그를 찾아주는 사람들에게 감사드립니다."}
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
            </EntryPostsItemComp>
         ))}
         <div className="sidebar-copyright">Copyright 2021. junggri All rights reserved.</div>
      </EntryPostsContainerComp>
   );
};

export default (EntryPostsContainer);