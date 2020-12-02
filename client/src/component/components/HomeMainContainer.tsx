import React from "react";
import { ContentNav, TopicsContainer } from "component";
import { MainView } from "../../styled-comp"; //styled-component

interface HomeContentProp {
   width: number;
   list: any[];
   height: number;

}

const HomeMain = ({ width, list, height }: HomeContentProp) => {

   return (
      <MainView width={width}>
         <ContentNav list={list} height={height}></ContentNav>
         <TopicsContainer width={width} list={list}></TopicsContainer>
      </MainView>
   );
};

export default HomeMain;
