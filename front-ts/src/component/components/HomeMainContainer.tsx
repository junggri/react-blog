import React from "react";
import { ContentNav, HomeContentBox } from "component";
import { MainView } from "../../styled-comp"; //styled-component

interface HomeContentProp {
  width: number;
  list: string[];
  height: number;
}

const HomeMain = ({ width, list, height }: HomeContentProp) => {
  return (
    <MainView width={width}>
      <ContentNav list={list} height={height}></ContentNav>
      <HomeContentBox width={width}></HomeContentBox>
    </MainView>
  );
};

export default HomeMain;
