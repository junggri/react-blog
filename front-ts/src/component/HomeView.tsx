import React from "react";
import { MainHomeView } from "../styled-comp";

import ContentNav from "./mainComp/ContentNav";

interface Props {
  width: number;
}

const HomeView = ({ width }: Props) => {
  let list = ["a", "b", "c", "d", "e"];
  return (
    <MainHomeView width={width}>
      <ContentNav list={list}></ContentNav>
    </MainHomeView>
  );
};
export default HomeView;
