import React from "react";
import { TopView } from "../styled-comp";

interface Props {
  name?: string;
  children?: string;
  width: string;
}

function topView({ width }: Props) {
  return <TopView width={width}></TopView>;
}
export default topView;
