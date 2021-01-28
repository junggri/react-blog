import React, { useCallback, useEffect } from "react";
import { EntryContainerComp } from "../styled-comp";
import ReactHelmet from "../useHooks/useHelmet";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import useCommon from "../useHooks/useCommon";
import usePosts from "../useHooks/usePosts";
import { EntryPostsContainer, SideBarContainer, SpecificTopicContainer, TagsContainer } from "../component";
import { IPostsModuleProps } from "../modules/Posts/posts.interface";
import { Route } from "react-router-dom";
import util from "../lib/axios";
import useCSRF from "../useHooks/useCSRF";
import useLoginFlag from "../useHooks/useLoginFlag";

function SSREntry({ match, location }: any) {
   useLoginFlag();

   const csrf = useCSRF();
   const { login, newRequest, setNewRequset, onGetGaCount, count }: ICommonModuleProps = useCommon();
   const { AllPosts, getAllPosts, onClearPost, getPosts, posts }: IPostsModuleProps = usePosts(match);


   useEffect(() => {
      if (newRequest) {
         getAllPosts();
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset]);

   const onDelete = useCallback((e: React.MouseEvent<HTMLElement>) => {
      const uid = (e.currentTarget.parentNode as HTMLElement).dataset.id as string;
      const topic = (e.currentTarget.parentNode as HTMLElement).dataset.topic as string;
      (async () => {
         await util.deletePost(uid, topic, csrf);
         getAllPosts();
      })();
   }, [csrf, getAllPosts]);

   useEffect(() => {
      onGetGaCount();
   }, []);

   return (
      <>
         <EntryContainerComp>
            <ReactHelmet
               keywords={"nodejs 그리고 자바스크립트의 이야기들"}
               description={"자바스크립트부터 웹까지의 전반적인 이야기와 나의 성장이야기"}
               title={"junggri 블로그"} />
            {/*<TopMetaBar match={match} count={count} />*/}
            <SideBarContainer topic={AllPosts} login={login} location={location} count={count} />
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
         </EntryContainerComp>
      </>
   );
}

export default SSREntry;