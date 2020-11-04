import React from "react";
import { MainView, MainViewLeft, MainViewCenter } from "../styled-comp";

interface Props {
  children?: string;
  width: string;
}

function mainView({ width }: Props) {
  console.log(width);
  return (
    <MainView width={width}>
      <MainViewLeft></MainViewLeft>
      <MainViewCenter></MainViewCenter>
    </MainView>
  );
}

export default mainView;
