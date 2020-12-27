import React, { useEffect } from "react";
import { SpecificTopicContainerComp, SpecificTopicItemsComp } from "../../styled-comp";
import { IPostsProps } from "../../modules/Posts/posts.interface";

interface ISpecificTopicContainer {
   width: number;
   match: any
   onGetPosts: (params: string) => void
   posts: IPostsProps
}

function SpecificTopicContainer({ width, match, onGetPosts, posts }: ISpecificTopicContainer) {
   const params = match.params.topic;


   useEffect(() => {
      onGetPosts(params);
   }, [params]);

   if (!posts.data) return null;

   return (

      <SpecificTopicContainerComp width={width}>
         {posts.data.map((e) => (
            <SpecificTopicItemsComp key={e.uid} to={`/topic/${e.topic}/${e.uid}`}>
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
            </SpecificTopicItemsComp>
         ))}
      </SpecificTopicContainerComp>
   );
}

export default SpecificTopicContainer;