import React, { useState } from "react";
import { TopView, ContentNav, ContentCenter, ContentRight } from "component";
import { MainView } from "../styled-comp"; //styled-component

interface Props {
  match: any;
}

const Content = ({ match }: Props) => {
  let params = match.params.content;
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
        <ContentCenter width={width} params={params}></ContentCenter>
        <ContentRight></ContentRight>
      </MainView>
    </>
  );
};

export default Content;
