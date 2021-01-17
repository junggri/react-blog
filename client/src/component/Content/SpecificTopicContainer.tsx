import React, { useEffect } from "react";
import { SpecificTopicContainerComp, SpecificTopicItemsComp } from "../../styled-comp";
import { IPostCommonProps, IPostsProps } from "../../modules/Posts/posts.interface";
import { Link } from "react-router-dom";

interface ISpecificTopicContainer {
   width: number;
   match: any
   onGetPosts: (params: string) => void
   posts: IPostsProps
   login: boolean
}

function SpecificTopicContainer({ width, match, onGetPosts, posts, login }: ISpecificTopicContainer) {
   const params = match.params.topic;

   useEffect(() => {
      onGetPosts(params);
   }, [params, onGetPosts]);

   if (!posts.data) return null;


   return (
      <SpecificTopicContainerComp width={width}>
         {posts.data.map((e: IPostCommonProps) => (
            <SpecificTopicItemsComp key={e.uid}>
               <span className="item-created">🗓 {e.created}</span>
               <Link to={`/topic/${e.topic}/${e.uid}`}>
                  <div className="item-contentName">
                     {e.content_name}
                  </div>
               </Link>
               <div className="item-detail">🌐 {e.detail}</div>
               {login &&
               <div className="posts-admin-box" data-id={e.uid} data-topic={e.topic}>
                  {/*<span className='posts-admin-modify' onClick={onModified}><IoColorWand /></span>*/}
                  {/*<span className='posts-admin-delete' onClick={onDelete}><MdDelete /></span>*/}
               </div>
               }
            </SpecificTopicItemsComp>
            // <SpecificTopicItemsComp key={e.uid} to={`/topic/${e.topic}/${e.uid}`}>
            //    <span className="item-created">{e.created}</span>
            //    <div className="item-contentName">{e.content_name}</div>
            //    <div className="item-detail">{e.detail}</div>
            //    <section className="posts-keyword-box">
            //       <span className="posts-keywords">
            //          <span>
            //             {e.topic}
            //          </span>
            //       </span>
            //    </section>
            // </SpecificTopicItemsComp>
         ))}
      </SpecificTopicContainerComp>
   );
}

export default SpecificTopicContainer;