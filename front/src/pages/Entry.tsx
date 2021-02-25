import React, { useEffect } from "react";
import { MainContainerComp } from "../styledComponent";
import { EntryPostContainer, NavBar, SideNavBar, TagPostContainer } from "../component";
import { Route, RouteComponentProps } from "react-router-dom";
import useLoginFlag from "../useHooks/useLoginFlag";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import { IPostsModuleProps } from "../modules/Posts/posts.interface";
import usePosts from "../useHooks/usePosts";
import useCommon from "../useHooks/useCommon";
import useCSRF from "../useHooks/useCSRF";
import { usePreloader } from "../lib/PreloadContext";
import { onPreloadAllPosts } from "../modules/Posts";
import { useDispatch } from "react-redux";


interface IMatchParams {
   id: string
   topic: string
}

const Entry = ({ match }: RouteComponentProps<IMatchParams>) => {
   useLoginFlag();
   const dispatch = useDispatch();
   const csrf = useCSRF();
   const { login, newRequest, setNewRequset, onGetGaCount, count }: ICommonModuleProps = useCommon();
   const { AllPosts, getAllPosts, onClearPost, getPosts, posts }: IPostsModuleProps = usePosts();

   usePreloader(() => dispatch(onPreloadAllPosts({})));

   useEffect(() => {
      if (newRequest && csrf) {
         getAllPosts(csrf);
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset, csrf]);

   return (
      <>
         <NavBar />
         <MainContainerComp>
            <SideNavBar data={AllPosts.data} />
            <Route path={["/"]} exact render={() =>
               <EntryPostContainer data={AllPosts.data} />
            } />
            <Route path="/tag/:topic" exact render={() =>
               <TagPostContainer data={AllPosts.data} topic={match.params.topic} />
            } />
         </MainContainerComp>
      </>
   );
};
export default Entry;
