import React from "react";
import { HomeContentListBox, HomeContentList } from "../styled-comp";

const HomeContent = ({ width, list, loading }: { width: number; list: any[]; loading: boolean }) => {
  if (!loading) return <HomeContentListBox width={width}>...로딩중</HomeContentListBox>;
  return (
    <HomeContentListBox width={width}>
      {list.map((e, i) => (
        <HomeContentList key={i}>
          <div>{e["Tables_in_contents"]}</div>
        </HomeContentList>
      ))}
    </HomeContentListBox>
  );
};

export default HomeContent;
