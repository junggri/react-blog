import React from "react";
import { MainView } from "../styled-comp";
import { TopView, ContentNav } from "component";

const Home = () => {
  const width = window.screen.width * 0.78;
  let list = ["a", "b", "c", "d", "e"];
  return (
    <>
      <TopView width={width} />
      <MainView width={width}>
        <ContentNav list={list}></ContentNav>
      </MainView>
    </>
  );
};

export default Home;
