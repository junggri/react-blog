import React from "react";
import { TopView, ContentNav, HomeContentBox } from "component";

import { MainView } from "../styled-comp"; //styled-component

const Home = () => {
  const width = window.screen.width * 0.78;
  let list = ["a", "b", "c", "d", "e"];
  return (
    <>
      <TopView width={width} />
      <MainView width={width}>
        <ContentNav list={list}></ContentNav>
        <HomeContentBox width={width}></HomeContentBox>
      </MainView>
    </>
  );
};

export default Home;
