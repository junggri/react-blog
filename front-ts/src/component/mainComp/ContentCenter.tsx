import React from "react";
import { ContentCenter, ContentCenterArticleBox } from "../../styled-comp";

interface Props {
  width: number;
}

function MainCenterView({ width }: Props) {
  return (
    <ContentCenter width={width}>
      <h1>CONTENT NAME</h1>
      <span className="content-date">2020-11-11</span>
      <ContentCenterArticleBox width={width}></ContentCenterArticleBox>
    </ContentCenter>
  );
}

export default MainCenterView;
