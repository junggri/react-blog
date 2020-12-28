import React, { useEffect } from "react";
import { EntryContainerComp } from "../../styled-comp";
import useCommon from "../../useHooks/useCommon";
import useTopic from "../../useHooks/useTopic";
import { ICommonModuleProps } from "../../modules/Common/common.interface";
import usePosts from "../../useHooks/usePosts";
import { IPostsModuleProps } from "../../modules/Posts/posts.interface";
import { EntryPostsContainer, SideBarContainer, SpecificTopicContainer } from "component/index";
import { Route } from "react-router-dom";
import useLoginFlag from "../../useHooks/useLoginFlag";
import useCSRF from "../../useHooks/useCSRF";
import { ITopicModuleProps } from "../../modules/Topic/topic.interface";

function CommonEntry({ match }: any) {
   const csrf = useCSRF();

   const { topic, loading, error, requestTopic }: ITopicModuleProps = useTopic();
   const { width, e, login, newRequest, setNewRequset }: ICommonModuleProps = useCommon();
   const {
      AllPosts,
      posts,
      getPosts,
      deletePost,
      getAllPosts,
   }: IPostsModuleProps = usePosts();


   useEffect(() => {
      if (newRequest) {
         requestTopic();
         getAllPosts();
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset]);

   useLoginFlag();


   //TODO 최적화 진행하기!!!!!!!!!!!!!!!!!
   //TODO 데이터를 다받아오고 한번만 실행해볼까?? 즉 state가 변경되지 않으면 기존 데이터로 해볼까?

   if (!topic) return null;
   if (!AllPosts.data) return null;

   return (
      <EntryContainerComp width={width}>
         <SideBarContainer topic={topic} login={login} />
         <Route path="/" exact render={() => (
            <EntryPostsContainer
               width={width}
               posts={AllPosts}
               deletePost={deletePost}
               login={login}
               csrf={csrf}
            />
         )} />
         <Route path="/topic/:topic" exact render={() => (
            <SpecificTopicContainer
               width={width}
               match={match}
               onGetPosts={getPosts}
               posts={posts}
            />
         )} />
      </EntryContainerComp>
   );
}

export default CommonEntry;