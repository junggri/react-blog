import React from "react";
import { TopView } from "../styled-comp";

interface Props {
  name?: string;
  children?: string;
  width: string;
}

function topView({ width }: Props) {
  console.log(window.screen.width * 0.7 + "px");
  return <TopView width={width}></TopView>;
}
export default topView;
