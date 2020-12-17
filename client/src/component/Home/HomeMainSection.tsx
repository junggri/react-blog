import React from "react";
import { ContentNav, TopicsContainer } from "component/index";
import { IHomeMainSectionProps } from "../../interface/index.interface";


const HomeMainSection = ({ width, list, height }: IHomeMainSectionProps) => {
   return (
      <>
         <ContentNav list={list} height={height}></ContentNav>
         <TopicsContainer width={width} list={list}></TopicsContainer>
      </>
   );
};

export default HomeMainSection;
