import React, { useEffect } from "react";
import { EntryContainerComp } from "../styled-comp";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import useCommon from "../useHooks/useCommon";
import usePosts from "../useHooks/usePosts";
import { AboutContainer, SideBarContainer, SpecificTopicContainer, TagsContainer } from "../component";
import { IPostsModuleProps } from "../modules/Posts/posts.interface";
import { Route } from "react-router-dom";
import useLoginFlag from "../useHooks/useLoginFlag";

function Entry2({ match, location }: any) {
   useLoginFlag();

   const { login, onGetGaCount, count }: ICommonModuleProps = useCommon();
   const { AllPosts, onClearPost, getPosts, posts }: IPostsModuleProps = usePosts();

   useEffect(() => {
      onGetGaCount();
   }, []);

   return (
      <EntryContainerComp>
         <SideBarContainer topic={AllPosts} login={login} location={location} count={count} />
         <Route path="/tag/:topic" exact={true} render={() => (
            <SpecificTopicContainer
               match={match}
               posts={posts}
               login={login}
               onClearPost={onClearPost}
               getPosts={getPosts}
            />
         )} />
         <Route path="/tag" exact={true} render={() => (
            <TagsContainer Allposts={AllPosts} />
         )} />
         <Route path="/about" exact={true} render={() => (
            <AboutContainer />
         )} />
      </EntryContainerComp>
   );
}

export default Entry2;