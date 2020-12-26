import React, { useCallback } from "react";
import { EntryPostsContainerComp, EntryPostsItemComp } from "../../styled-comp";
import { IAllPosts } from "../../modules/Posts/posts.interface";
import { MdDelete } from "react-icons/md";
import { IoColorWand } from "react-icons/io5";
import { Link } from "react-router-dom";
import util from "../../lib/axios";
import useCSRF from "useHooks/useCSRF";

interface IEntryPostsContainer {
   width: number,
   posts: IAllPosts
   deletePost: () => void
}

const EntryPostsContainer = ({ width, posts, deletePost }: IEntryPostsContainer) => {
   const csrf = useCSRF();


   const onModified = useCallback((e: React.MouseEvent<HTMLElement>) => {
      console.log(2);
   }, [csrf]);

   const onDelete = useCallback((e: React.MouseEvent<HTMLElement>) => {
      const uid = (e.currentTarget.parentNode as HTMLElement).dataset.id as string;
      const topic = (e.currentTarget.parentNode as HTMLElement).dataset.topic as string;
      (async () => {
         await util.deletePost(uid, topic, csrf);
         deletePost();
         //posts 모듈에서 해야한다
      })();
   }, [csrf, deletePost]);


   if (!posts.data) return null;
   return (
      <EntryPostsContainerComp width={width}>
         <div>
            {posts.data.map((e) => (
               <EntryPostsItemComp key={e.uid}>
                  <span className="item-created">{e.created}</span>
                  <Link to={`/topic/${e.topic}/${e.uid}`}>
                     <div className="item-contentName">{e.content_name}</div>
                  </Link>
                  <div className="item-detail">{e.detail}</div>
                  <section className="posts-keyword-box">
                     <span className="posts-keywords">
                        <span>
                           {e.topic}
                        </span>
                     </span>
                  </section>
                  <div className="posts-admin-box" data-id={e.uid} data-topic={e.topic}>
                     <span className='posts-admin-modify' onClick={onModified}>
                        <IoColorWand />
                     </span>
                     <span className='posts-admin-delete' onClick={onDelete}>
                        <MdDelete />
                     </span>
                  </div>
               </EntryPostsItemComp>
            ))}
         </div>
      </EntryPostsContainerComp>
   );
};

export default EntryPostsContainer;