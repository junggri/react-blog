import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContentTopicListComp } from "../../styled-comp";
import usePosts from "../../useHooks/usePosts";
import { AiFillNotification } from "react-icons/ai";
import { ITopicItemsProps } from "../../interface/index.interface";
import { IPostCommonProps, IPostsModuleProps, IPostsProps } from "../../modules/Posts/posts.interface";


function ContentTopicItems({ match }: ITopicItemsProps) {
   // const {posts, getPosts}: IPostsModuleProps<IPostProps<IPostItemProps>> = usePosts();
   const { posts, getPosts }: IPostsModuleProps = usePosts();

   const { data, loading, error }: IPostsProps<IPostCommonProps> = posts;

   const params = match.params.topic;

   useEffect(() => {
      getPosts(params);
   }, [params]);


   if (loading) return (<ContentTopicListComp>...로딩중</ContentTopicListComp>);
   if (data === null) return null;

   return (
      <>
         {data.map((v: IPostCommonProps) => (
            <Link to={`/content/${params}/${v.uid}`} key={v.uid}>
               <div data-uid={v.uid}>
                  <ContentTopicListComp>
                     <div className="content-meta-data">
                        <div className="posts-contentName-box">
                           {v.kindofPosts === "notice"
                              ? <div className="posts-notice-icon">
                                 <AiFillNotification />
                              </div>
                              : ""}
                           <h1>{v.content_name}</h1>
                        </div>
                        <div className="content-detail-meta-data">
                           <span>{v.detail}</span>
                        </div>
                        <div className="content-create">{v.created}</div>
                     </div>
                  </ContentTopicListComp>
               </div>
            </Link>
         ))}
      </>
   );
};

export default React.memo(ContentTopicItems);