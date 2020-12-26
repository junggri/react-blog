import React from "react";
import { EntryContainerComp } from "../styled-comp";
import useCommon from "../useHooks/useCommon";
import useTopic from "../useHooks/useTopic";
import { ITopicinitialState } from "../modules/Topic/topic.interface";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import usePosts from "../useHooks/usePosts";
import { IPostsModuleProps } from "../modules/Posts/posts.interface";
import { EntryPostsContainer, SideBarContainer, SpecificTopicContainer } from "component/index";
import { Route } from "react-router-dom";
import useLoginFlag from "../useHooks/useLoginFlag";

function CommonEntry({ match }: any) {
   useLoginFlag();
   //TODO 최적화 진행하기!!!!!!!!!!!!!!!!!
   //TODO 데이터를 다받아오고 한번만 실행해볼까?? 즉 state가 변경되지 않으면 기존 데이터로 해볼까?
   const { topic, loading, error }: ITopicinitialState = useTopic();
   const { width, e, login }: ICommonModuleProps = useCommon();
   const { AllPosts, posts, getPosts, deletePost }: IPostsModuleProps = usePosts();


   if (!topic) return null;
   if (!AllPosts.data) return null;

   return (
      <EntryContainerComp width={width}>
         <SideBarContainer topic={topic} login={login} />
         <Route path="/" exact render={() => (
            <EntryPostsContainer width={width} posts={AllPosts} deletePost={deletePost} />
         )} />
         <Route path="/topic/:topic" exact render={() => (
            <SpecificTopicContainer width={width} match={match} onGetPosts={getPosts} posts={posts} />
         )} />
      </EntryContainerComp>
   );
}

export default CommonEntry;