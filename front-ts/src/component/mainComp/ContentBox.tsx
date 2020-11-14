import React, { useEffect } from "react";
import axios from "axios";
import { MainView } from "../../styled-comp";
import ContentNav from "./ContentNav";
import ContentCenter from "./ContentCenter";
import ContentRight from "./ContentRight";

interface Props {
  width: number;
  children?: string;
}

function Main({ width }: Props) {
  let list = ["a", "b", "c", "d", "e"];
  return (
    <MainView width={width}>
      <ContentNav list={list}></ContentNav>
      <ContentCenter width={width}></ContentCenter>
      <ContentRight></ContentRight>
    </MainView>
  );
}

export default Main;
