import React, { useState } from "react";
import { TopView, ContentNav, HomeContentBox } from "component";

import { MainView } from "../styled-comp"; //styled-component

const Home = () => {
  const [height, setHeight] = useState(0);
  const width = window.screen.width * 0.78;
  let list = ["a", "b", "c", "d", "e"];

  const getHeigth = (ref: any) => {
    setHeight(ref.current.offsetHeight);
  };

  return (
    <>
      <TopView width={width} getHeight={getHeigth} />
      <MainView width={width}>
        <ContentNav list={list} height={height}></ContentNav>
        <HomeContentBox width={width}></HomeContentBox>
      </MainView>
    </>
  );
};

export default Home;
