import React from "react";
import { MainViewCenter, MainViewCenterContentBox } from "../../styled-comp";

interface Props {
  width: number;
}

function CenterView({ width }: Props) {
  return (
    <MainViewCenter width={width}>
      <h1>CONTENT NAME</h1>
      <span className="content-date">2020-11-11</span>
      <MainViewCenterContentBox width={width}></MainViewCenterContentBox>
    </MainViewCenter>
  );
}

export default CenterView;
