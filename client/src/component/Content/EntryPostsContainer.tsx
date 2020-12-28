import React, { useCallback } from "react";
import { EntryPostsContainerComp, EntryPostsItemComp } from "../../styled-comp";
import { IAllPosts } from "../../modules/Posts/posts.interface";
import { Link } from "react-router-dom";
import util from "../../lib/axios";
import { IoColorWand } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface IEntryPostsContainer {
   width: number,
   posts: IAllPosts
   deletePost: (posts: any) => void
   login: boolean
   csrf: string
}

const EntryPostsContainer = ({ width, posts, deletePost, login, csrf }: IEntryPostsContainer) => {


   const onModified = useCallback((e: React.MouseEvent<HTMLElement>) => {
      console.log(2);
   }, [csrf]);

   const onDelete = useCallback((e: React.MouseEvent<HTMLElement>) => {
      const uid = (e.currentTarget.parentNode as HTMLElement).dataset.id as string;
      const topic = (e.currentTarget.parentNode as HTMLElement).dataset.topic as string;
      (async () => {
         await util.deletePost(uid, topic, csrf);
         const newPostsState = posts.data?.filter(item => (item.uid !== uid));
         deletePost(newPostsState);
      })();
   }, [csrf, deletePost, posts.data]);

   return (
      <EntryPostsContainerComp width={width}>
         <div>
            {posts.data?.map((e) => (
               <EntryPostsItemComp key={e.uid}>
                  <span className="item-created">{e.created}</span>
                  <Link to={`/topic/${e.topic}/${e.uid}`}>
                     <div className="item-contentName">{e.content_name}</div>
                  </Link>
                  <div className="item-detail">{e.detail}</div>
                  <section className="posts-keyword-box">
                     <span className="posts-keywords">
                           <Link to={`/topic/${e.topic}`}>
                           {e.topic}
                           </Link>
                     </span>
                  </section>
                  {login &&
                  <div className="posts-admin-box" data-id={e.uid} data-topic={e.topic}>
                     <span className='posts-admin-modify' onClick={onModified}><IoColorWand /></span>
                     <span className='posts-admin-delete' onClick={onDelete}><MdDelete /></span>
                  </div>
                  }
               </EntryPostsItemComp>
            ))}
         </div>
      </EntryPostsContainerComp>
   );
};

export default EntryPostsContainer;