import React, { useEffect } from "react";
import { SpecificTopicContainerComp, SpecificTopicItemsComp } from "../../styled-comp";
import { IPostCommonProps, IPostsProps } from "../../modules/Posts/posts.interface";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import isNew from "../../lib/isNewPost";
import { usePreloader } from "../../lib/PreloadContext";
import { onRequestPosts } from "../../modules/Posts";

interface ISpecificTopicContainer {
   match: any
   login: boolean
   posts: IPostsProps
   onClearPost: any
   getPosts: any
}

function SpecificTopicContainer({ match, login, posts, onClearPost, getPosts }: ISpecificTopicContainer) {
   const params = match.params.topic;
   const dispatch = useDispatch();


   useEffect(() => {
      if (posts.data) return;
      getPosts(params);
      return () => onClearPost();
   }, [params]);

   usePreloader(() => dispatch(onRequestPosts({ params: decodeURI(params) })));


   return (
      <SpecificTopicContainerComp>
         {posts.data !== null &&
         (posts.data).map((e: IPostCommonProps) => (
            <SpecificTopicItemsComp key={e.uid}>
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
                  {/*<span className='posts-admin-modify' onClick={onModified}><IoColorWand /></span>*/}
                  {/*<span className='posts-admin-delete' onClick={onDelete}><MdDelete /></span>*/}
               </div>}

            </SpecificTopicItemsComp>
         ))}
      </SpecificTopicContainerComp>
   );
}

export default SpecificTopicContainer;