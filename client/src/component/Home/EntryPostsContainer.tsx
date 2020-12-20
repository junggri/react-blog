import React from "react";
import { EntryPostsContainerComp, EntryPostsItemComp } from "../../styled-comp";
import { IPostsProps } from "../../modules/Posts/posts.interface";

interface IEntryPostsContainer {
   width: number,
   posts: IPostsProps
}

function EntryPostsContainer({ width, posts }: IEntryPostsContainer) {

   if (!posts) return null;
   return (
      <EntryPostsContainerComp width={width}>
         <div>
            {posts.data.map((e) => (
               <EntryPostsItemComp key={e.uid} to={`/topic/${e.topic}/${e.uid}`}>
                  <span className="item-created">{e.created}</span>
                  <div className="item-contentName">{e.content_name}</div>
                  <div className="item-detail">{e.detail}</div>
                  <section className="posts-keyword-box">
                     <span className="posts-keywords">
                        <span>
                           {e.topic}
                        </span>
                     </span>
                  </section>
               </EntryPostsItemComp>
            ))}
         </div>
      </EntryPostsContainerComp>
   );
}

export default EntryPostsContainer;