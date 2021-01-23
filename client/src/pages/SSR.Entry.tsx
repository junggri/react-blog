import React, { useEffect } from "react";
import { EntryContainerComp } from "../styled-comp";
import ReactHelmet from "../useHooks/useHelmet";
import TopMetaBar from "../component/Home/TopMetaBar";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import useCommon from "../useHooks/useCommon";
import usePosts from "../useHooks/usePosts";
import { SideBarContainer } from "../component";
import { IPostsModuleProps } from "../modules/Posts/posts.interface";

function SSREntry({ match }: any) {
   const { login, count, newRequest, setNewRequset }: ICommonModuleProps = useCommon();
   const { AllPosts, getAllPosts }: IPostsModuleProps = usePosts();

   useEffect(() => {
      if (newRequest) {
         getAllPosts();
         setNewRequset(false);
      }
   }, [getAllPosts, newRequest, setNewRequset]);

   return (
      <>
         <EntryContainerComp>
            <ReactHelmet
               keywords={"nodejs 그리고 자바스크립트의 이야기들"}
               description={"자바스크립트부터 웹까지의 전반적인 이야기와 나의 성장이야기"}
               title={"junggri 블로그"} />
            <TopMetaBar match={match} count={count} />
            {match.path !== "/about" ? <SideBarContainer topic={AllPosts} login={login} /> : null}
         </EntryContainerComp>
      </>
   );
}

export default SSREntry;