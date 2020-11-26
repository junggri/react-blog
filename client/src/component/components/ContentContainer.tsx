import React from "react";

import { ContentNav, ContentCenter, ContentRight } from "component";

import { MainView } from "../../styled-comp"; //styled-component
interface ContentProp {
  width: number;
  list: string[];
  height: number;
  params: string;
}

const Content = ({ width, list, height, params }: ContentProp) => {
  return (
    <MainView width={width}>
      <ContentNav list={list} height={height}></ContentNav>
      <ContentCenter width={width} params={params}></ContentCenter>
      <ContentRight></ContentRight>
    </MainView>
  );
};
export default Content;
