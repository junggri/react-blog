import React from "react";
import queryString from "query-string";
import TopView from "component/topView";
import ContentView from "component/mainComp/ContentBox";

const Content = (props: any) => {
  console.log(props);
  const width = window.screen.width * 0.78;

  return (
    <>
      <TopView width={width} />
      <ContentView width={width} />
    </>
  );
};

export default Content;
