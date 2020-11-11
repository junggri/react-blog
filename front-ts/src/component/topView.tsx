import React from "react";
import { TopView } from "../styled-comp";

interface Props {
  width: number;
}
//프롭스의 인터페이스존재해야한다.

function topView({ width }: Props) {
  return <TopView width={width}></TopView>;
}
export default topView;
