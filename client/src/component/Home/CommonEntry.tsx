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
import TopMetaBar from "./TopMetaBar";

function CommonEntry({ match }: any) {
   const csrf = useCSRF();
   const { topic, requestTopic }: ITopicModuleProps = useTopic();
   const { width, login, newRequest, setNewRequset }: ICommonModuleProps = useCommon();
   const { AllPosts, posts, getPosts, deletePost, getAllPosts }: IPostsModuleProps = usePosts();


   useEffect(() => {
      if (newRequest) {
         requestTopic();
         getAllPosts();
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset, requestTopic]);

   useLoginFlag();


   //TODO 최적화 진행하기!!!!!!!!!!!!!!!!!

   if (!topic) return null;

   return (
      <EntryContainerComp width={width}>
         <TopMetaBar width={width} match={match} />
         {match.path !== "/about" ? <SideBarContainer topic={topic} login={login} /> : null}
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