import React, { useEffect, useState } from "react";
import { SpecificTopicContainerComp, SpecificTopicItemsComp } from "../../styled-comp";
import { IAllPost, IPostCommonProps } from "../../modules/Posts/posts.interface";
import { Link } from "react-router-dom";
import isNew from "../../lib/isNewPost";

interface ISpecificTopicContainer {
   width: number;
   match: any
   onGetPosts: (params: string) => void
   login: boolean
   posts: IAllPost
}

function SpecificTopicContainer({ width, match, login, posts }: ISpecificTopicContainer) {
   const params = match.params.topic;
   const [post, setPost] = useState([]);

   useEffect(() => {
      setPost((posts as any).data[params]);
   }, [params, posts]);


   return (
      <SpecificTopicContainerComp width={width}>
         {post.map((e: IPostCommonProps) => (
            <SpecificTopicItemsComp key={e.uid}>
               <span className="item-created">🗓 {e.created}</span>
               {isNew(e.date) && <span className="post_is_new">new</span>}
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