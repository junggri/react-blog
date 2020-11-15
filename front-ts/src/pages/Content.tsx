import React from "react";
import { TopView, ContentBox } from "component";

interface Props {
  match: any;
}

const Content = ({ match }: Props) => {
  let params = match.params.content;
  const width = window.screen.width * 0.78;
  return (
    <>
      <TopView width={width} />
      <ContentBox width={width} params={params}></ContentBox>
    </>
  );
};

export default Content;
