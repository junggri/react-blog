import React from "react";
import { MainView } from "../../styled-comp";
import ContentNav from "./ContentNav";
import ContentCenter from "./ContentCenter";
import ContentRight from "./ContentRight";

interface Props {
  width: number;
  children?: string;
  params: any;
}

function Main({ width, params }: Props) {
  let list = ["a", "b", "c", "d", "e"];
  return (
    <MainView width={width}>
      {/* <ContentNav list={list}></ContentNav> */}
      <ContentCenter width={width} params={params}></ContentCenter>
      <ContentRight></ContentRight>
    </MainView>
  );
}

export default Main;
