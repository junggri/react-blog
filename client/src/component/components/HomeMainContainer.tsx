import React from "react";
import { ContentNav, HomeContentBox } from "component";
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
         <HomeContentBox width={width} list={list}></HomeContentBox>
      </MainView>
   );
};

export default HomeMain;
