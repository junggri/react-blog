import React from "react";
import { EntryPostsContainerComp, EntryPostsItemComp } from "../../styled-comp";

interface IEntryPostsContainer {
   width: number,
   posts: any
}

function EntryPostsContainer({ width, posts }: IEntryPostsContainer) {

   if (!posts) return null;

   return (
      <EntryPostsContainerComp width={width}>
         <div>
            {posts.data.map((e: any) => (
               <EntryPostsItemComp key={e.uid} to={e.uid}>
                  <span className="item-created">{e.created}</span>
                  <div className="item-contentName">{e.content_name}</div>
                  <div className="item-detail">{e.detail}</div>
                  <section className="posts-keyword-box">
                           <span className="posts-keywords">
                              js
                           </span>
                     <span className="posts-keywords">
                              jsasdsafaf
                           </span>
                  </section>
               </EntryPostsItemComp>
            ))}
         </div>
      </EntryPostsContainerComp>
   );
}

export default EntryPostsContainer;