import React, { useEffect } from "react";
import { EntryContainerComp } from "../../styled-comp";
import useCommon from "../../useHooks/useCommon";
import { ICommonModuleProps } from "../../modules/Common/common.interface";
import usePosts from "../../useHooks/usePosts";
import { IPostsModuleProps } from "../../modules/Posts/posts.interface";
import { AboutContainer, EntryPostsContainer, SideBarContainer, SpecificTopicContainer } from "component/index";
import { Route } from "react-router-dom";
import useLoginFlag from "../../useHooks/useLoginFlag";
import useCSRF from "../../useHooks/useCSRF";
import TopMetaBar from "./TopMetaBar";
import ReactHelmet from "../../useHooks/useHelmet";


function CommonEntry({ match }: any) {
   const csrf = useCSRF();
   const { width, login, newRequest, setNewRequset }: ICommonModuleProps = useCommon();
   const { AllPosts, posts, getPosts, deletePost, getAllPosts }: IPostsModuleProps = usePosts();

   useEffect(() => {
      if (newRequest) {
         getAllPosts();
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset]);
   useLoginFlag();

   if (!AllPosts.data) return null;

   return (
      <EntryContainerComp width={width}>
         <ReactHelmet
            keywords={"nodejs 그리고 자바스크립트의 이야기들"}
            description={"자바스크립트부터 웹까지의 전반적인 이야기와 나의 성장이야기"}
            title={"junggri 블로그"} />
         <TopMetaBar width={width} match={match} />
         {match.path !== "/about" ? <SideBarContainer topic={AllPosts} login={login} /> : null}
         <Route path="/" exact render={() => (
            <EntryPostsContainer
               width={width}
               posts={AllPosts}
               deletePost={deletePost}
               getAllPosts={getAllPosts}
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
         <Route path="/about" exact render={() => (
            <AboutContainer
               width={width}
            />
         )} />
      </EntryContainerComp>
   );
}

export default CommonEntry;