import React from "react";

import { MainView } from "../styled-comp";
import { TopView, ContentNav, ContentCenter, ContentRight } from "component";

const Content = () => {
  const width = window.screen.width * 0.78;
  let list = ["a", "b", "c", "d", "e"];
  return (
    <>
      <TopView width={width} />
      <MainView width={width}>
        <ContentNav list={list}></ContentNav>
        <ContentCenter width={width}></ContentCenter>
        <ContentRight></ContentRight>
      </MainView>
    </>
  );
};

export default Content;
