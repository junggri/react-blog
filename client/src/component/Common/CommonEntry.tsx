import React from "react";
import { EntryContainerComp } from "../../styled-comp";
import useCommon from "../../useHooks/useCommon";
import useTopic from "../../useHooks/useTopic";
import { ITopicinitialState } from "../../modules/Topic/topic.interface";
import { ICommonModuleProps } from "../../modules/Common/common.interface";
import usePosts from "../../useHooks/usePosts";
import { IPostsModuleProps } from "../../modules/Posts/posts.interface";
import { EntryPostsContainer, SideBarContainer, SpecificTopicContainer } from "component";
import { Route } from "react-router-dom";

function CommonEntry({ match }: any) {
   //TODO 최적화 진행하기!!!!!!!!!!!!!!!!!


   const { topic, loading, error }: ITopicinitialState = useTopic();
   const { width, e }: ICommonModuleProps = useCommon();
   const { AllPosts, posts, getPosts }: IPostsModuleProps = usePosts();


   if (!topic) return null;
   if (!AllPosts.data) return null;

   return (
      <EntryContainerComp width={width}>
         <SideBarContainer topic={topic} />
         <Route path="/" exact render={() => (
            <EntryPostsContainer width={width} posts={AllPosts} />
         )} />
         <Route path="/topic/:topic" exact render={() => (
            <SpecificTopicContainer width={width} match={match} onGetPosts={getPosts} posts={posts} />
         )} />
      </EntryContainerComp>
   );
};

export default CommonEntry;