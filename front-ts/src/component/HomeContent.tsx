import React from "react";
import { HomeContentListBox, HomeContentList } from "../styled-comp";

const HomeContent = ({ width }: { width: number }) => {
  return (
    <HomeContentListBox width={width}>
      <HomeContentList />
      <HomeContentList />
      <HomeContentList />
      <HomeContentList />
    </HomeContentListBox>
  );
};

export default HomeContent;
