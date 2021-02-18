import React, { useCallback, useEffect } from "react";
import { EntryContainerComp } from "../styled-comp";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import useCommon from "../useHooks/useCommon";
import usePosts from "../useHooks/usePosts";
import { AboutContainer, EntryPostsContainer, SideBarContainer, SpecificTopicContainer, TagsContainer } from "../component";
import { IPostsModuleProps } from "../modules/Posts/posts.interface";
import { Route } from "react-router-dom";
import util from "../lib/axios";
import useCSRF from "../useHooks/useCSRF";
import useLoginFlag from "../useHooks/useLoginFlag";

function SSREntry({ match, location }: any) {
   useLoginFlag();
   const csrf = useCSRF();
   const { login, newRequest, setNewRequset, onGetGaCount, count }: ICommonModuleProps = useCommon();
   const { AllPosts, getAllPosts, onClearPost, getPosts, posts }: IPostsModuleProps = usePosts();

   // useEffect(() => {
   //    if (!csrf) return;
   //    (async () => {
   //       const { data } = await util.graphql(csrf);
   //       console.log(data);
   //    })();
   // }, [csrf]);

   useEffect(() => {
      if (newRequest) {
         getAllPosts();
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset]);

   const onDelete = useCallback((e: React.MouseEvent<HTMLElement>) => {
      if (confirm("삭제할거야???")) {
         const uid = (e.currentTarget.parentNode as HTMLElement).dataset.id as string;
         const topic = (e.currentTarget.parentNode as HTMLElement).dataset.topic as string;
         (async () => {
            await util.deletePost(uid, topic, csrf);
            getAllPosts();
         })();
      }
   }, [csrf, getAllPosts]);

   useEffect(() => {
      onGetGaCount();
   }, []);

   return (
      <>
         <EntryContainerComp>
            <SideBarContainer login={login} location={location} count={count} />
            <Route path={["/", "/post"]} exact render={() => (
               <EntryPostsContainer
                  posts={AllPosts}
                  onDelete={onDelete}
                  login={login}
                  csrf={csrf}
               />
            )} />
            <Route path="/tag/:topic" exact render={() => (
               <SpecificTopicContainer
                  match={match}
                  posts={posts}
                  login={login}
                  onClearPost={onClearPost}
                  getPosts={getPosts}
               />
            )} />
            <Route path="/tag" exact render={() => (
               <TagsContainer Allposts={AllPosts} />
            )} />
            <Route path="/about" exact render={() => (
               <AboutContainer />
            )} />
         </EntryContainerComp>
      </>
   );
}

export default SSREntry;
