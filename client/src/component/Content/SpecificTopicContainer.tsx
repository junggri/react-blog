import React, { useEffect } from "react";
import { SpecificTopicContainerComp, SpecificTopicItemsComp } from "../../styled-comp";
import { IPostCommonProps, IPostsProps } from "../../modules/Posts/posts.interface";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import isNew from "../../lib/isNewPost";
import { usePreloader } from "../../lib/PreloadContext";
import { onRequestPosts } from "../../modules/Posts";
import ReactHelmet from "../../useHooks/useHelmet";

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
      getPosts(params);
      return () => onClearPost();
   }, [params]);

   usePreloader(() => dispatch(onRequestPosts({ params })));

   return (
      <SpecificTopicContainerComp>
         <ReactHelmet
            title={`${params}에 관련된 게시글들입니다.`}
            keywords={"자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드"}
            description={"자바스크립트부터 nodejs 그리고 알고리즘과 함께 성장해나가기를 기원하는 블로그입니다. 점점 더 발전해나가는 기술들을 함께 익히고 정그리 블로그를 찾아주는 사람들에게 감사드립니다."}
         />
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