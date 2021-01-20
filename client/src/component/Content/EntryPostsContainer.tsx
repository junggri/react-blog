import React from "react";
import { EntryPostsContainerComp, EntryPostsItemComp } from "../../styled-comp";
import { Link } from "react-router-dom";
import { IoColorWand } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IAllPost, IPostCommonProps } from "../../modules/Posts/posts.interface";
import isNew from "lib/isNewPost";

interface IEntryPostsContainer {
   width: number,
   posts: IAllPost
   onDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
   login: boolean,
   csrf: string
}

const EntryPostsContainer = ({ width, posts, onDelete, login, csrf }: IEntryPostsContainer) => {

   if (!posts.data) return null;
   const data = Object.values(posts.data).flat();

   return (
      <EntryPostsContainerComp width={width}>
         {data.map((e: IPostCommonProps) => (
            <EntryPostsItemComp key={e.uid}>
               <span className="item-created">🗓 {e.created}</span>
               {isNew(e.date) && <span className="post_is_new">new</span>}
               <Link to={`/topic/${e.topic}/${e.uid}`}>
                  <div className="item-contentName">
                     {e.content_name}
                  </div>
               </Link>
               <div className="item-detail">🌐 {e.detail}</div>
               <section className="posts-keyword-box">
                   <span className="posts-keywords">
                        <Link to={`/topic/${e.topic}`}>
                            {e.topic}
                        </Link>
                     </span>
               </section>
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