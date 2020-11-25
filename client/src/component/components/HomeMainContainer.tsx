import React from "react";
import { ContentNav, HomeContentBox } from "component";
import { MainView } from "../../styled-comp"; //styled-component

interface HomeContentProp {
  width: number;
  list: any[];
  height: number;
  loading: boolean;
}

const HomeMain = ({ width, list, height, loading }: HomeContentProp) => {
  return (
    <MainView width={width}>
      <ContentNav list={list} height={height}></ContentNav>
      <HomeContentBox width={width} list={list} loading={loading}></HomeContentBox>
    </MainView>
  );
};

export default HomeMain;
