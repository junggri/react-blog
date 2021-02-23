import React from "react";
import { MainContainerComp, PostItemComp, SideBarComp } from "../styledComponent";
import { NavBar } from "../component";
import { NavLink } from "react-router-dom";
import useLoginFlag from "../useHooks/useLoginFlag";
import useCSRF from "../useHooks/useCSRF";
import util from "../lib/axios";

const Entry = () => {
   useLoginFlag();
   const csrf = useCSRF();
   // const { login, newRequest, setNewRequset, onGetGaCount, count }: ICommonModuleProps = useCommon();
   // const { AllPosts, getAllPosts, onClearPost, getPosts, posts }: IPostsModuleProps = usePosts();
   //
   (async () => {
      if (csrf !== "") {
         const { data } = await util.graphql(csrf);
         console.log(data);
      }
   })();


   // useEffect(() => {
   //    if (newRequest && csrf !== "") {
   //       getAllPosts(csrf);
   //       setNewRequset(false);
   //    }
   // }, [getAllPosts, newRequest, setNewRequset, csrf]);

   return (
      <>
         <NavBar />
         <MainContainerComp>
            <SideBarComp>
               <header>
                  <h1>tags</h1>
               </header>
               <ul>
                  <NavLink to={"/java"}>
                     <li>java</li>
                  </NavLink>
               </ul>
            </SideBarComp>
            <PostItemComp>
               <div className="post-img">
                  <img src="/images/Logo.svg" alt="" />
               </div>
               <header>
                  <h1>content Name</h1>
                  <h2>detail</h2>
               </header>
               <footer>
                  <span>read</span>
                  <span>comment</span>
               </footer>
            </PostItemComp>
            <PostItemComp>
               <div className="post-img">
                  <img src="/images/Logo.svg" alt="" />
               </div>
               <header>
                  <h1>content Name</h1>
                  <h2>detail</h2>
               </header>
               <footer>
                  <span>read</span>
                  <span>comment</span>
               </footer>
            </PostItemComp>{" "}
            <PostItemComp>
               <div className="post-img">
                  <img src="/images/Logo.svg" alt="" />
               </div>
               <header>
                  <h1>content Name</h1>
                  <h2>detail</h2>
               </header>
               <footer>
                  <span>read</span>
                  <span>comment</span>
               </footer>
            </PostItemComp>
         </MainContainerComp>
         {/* <PostItemComp>
        <header>
          <div className="post-meta">February 15, 2021</div>
          <div className="post-img">
            <img src="/images/Logo.svg" alt="" />
          </div>
          <h1>content name</h1>
          <h2>detail</h2>
        </header>
        <footer>
          <span>read</span>
          <span>comment</span>
        </footer>
      </PostItemComp> */}
      </>
   );
};
export default Entry;
