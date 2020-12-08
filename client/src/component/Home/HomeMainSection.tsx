import React from "react";
import { ContentNav, TopicsContainer } from "component/index";

interface HomeContentProp {
   width: any;
   list: Array<any>;
   height: any;
}

const HomeMainSection = ({ width, list, height }: HomeContentProp) => {
   return (
      <>
         <ContentNav list={list} height={height}></ContentNav>
         <TopicsContainer width={width} list={list}></TopicsContainer>
      </>
   );
};

export default HomeMainSection;
