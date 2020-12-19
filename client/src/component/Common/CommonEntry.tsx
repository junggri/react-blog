import React from "react";
import { EntryContainerComp } from "../../styled-comp";
import useCommon from "../../useHooks/useCommon";
import useTopic from "../../useHooks/useTopic";
import { ITopicinitialState } from "../../modules/Topic/topic.interface";
import { ICommonModuleProps } from "../../modules/Common/common.interface";
import usePosts from "../../useHooks/usePosts";
import { IPostsModuleProps } from "../../modules/Posts/posts.interface";
import { EntryPostsContainer, SideBarContainer } from "component";


function CommonEntry({ match }: any) {
   const { topic, loading, error }: ITopicinitialState = useTopic();
   const { width, height, setHeight, e }: ICommonModuleProps = useCommon();
   const { AllPosts }: IPostsModuleProps = usePosts();


   if (!topic) return null;
   if (!AllPosts.data) return null;

   return (
      <EntryContainerComp width={width}>
         <SideBarContainer topic={topic} />
         <EntryPostsContainer width={width} posts={AllPosts} />
      </EntryContainerComp>
   );
};

export default CommonEntry;