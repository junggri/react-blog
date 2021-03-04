import React, { useEffect } from "react";
import { MainContainerComp, WriteBoxBtnComp } from "../styledComponent";
import { EntryPostContainer, SideNavBar, TagPostContainer } from "@src/component/index";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import useLoginFlag from "@useHooks/useLoginFlag";
import { ICommonModuleProps } from "@modules/Common/common.interface";
import { IPostsModuleProps } from "@modules/Posts/posts.interface";
import usePosts from "@useHooks/usePosts";
import useCommon from "@useHooks/useCommon";
import useCSRF from "@useHooks/useCSRF";
import { useDispatch } from "react-redux";
import { NavBar } from "@component/index";
import { usePreloader } from "@lib/PreloadContext";
import { onRequestAllPosts } from "@modules/Posts";

interface IMatchParams {
   id: string;
   topic: string;
}

const Entry = ({ match }: RouteComponentProps<IMatchParams>) => {
   useLoginFlag();
   const dispatch = useDispatch();
   const csrf = useCSRF();
   const { login, newRequest, setNewRequset, onGetGaCount, count }: ICommonModuleProps = useCommon();
   const { AllPosts, getAllPosts, onClearPost, getPosts, posts }: IPostsModuleProps = usePosts();

   usePreloader(() => dispatch(onRequestAllPosts({})));

   useEffect(() => {
      if (newRequest) {
         getAllPosts();
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset]);

   useEffect(() => {
      onGetGaCount();
   }, []);
   //
   const deletePost = async (topic: string, identifier: string) => {
      // if (csrf) await util.deletePost(topic, identifier, csrf);
      setNewRequset(true);
   };

   return (
      <>
         {login && (
            <WriteBoxBtnComp>
               <Link to="/write">새글쓰기</Link>
            </WriteBoxBtnComp>
         )}
         <NavBar />
         <MainContainerComp>
            <SideNavBar data={AllPosts.data} count={count} />
            <div className="post-item-container">
               <Route path={["/"]} exact render={() => <EntryPostContainer data={AllPosts.data} onDelete={deletePost} />} />
               <Route path="/tag/:topic" exact render={() => <TagPostContainer data={AllPosts.data} topic={match.params.topic} onDelete={deletePost} />} />
            </div>
            <footer>
               <div className="sidebar-copyright">Copyright 2021. junggri All rights reserved.</div>
            </footer>
         </MainContainerComp>
      </>
   );
};
export default Entry;
