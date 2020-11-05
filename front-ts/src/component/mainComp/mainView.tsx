import React from "react";
import { MainView } from "../../styled-comp";
import LeftView from "./leftView";
import CenterView from "./centerView";
import RightView from "./rightView";

interface Props {
  width: string;
  children?: string;
}

function mainView({ width }: Props) {
  return (
    <MainView width={width}>
      <LeftView></LeftView>
      <CenterView></CenterView>
      <RightView></RightView>
    </MainView>
  );
}

export default mainView;
