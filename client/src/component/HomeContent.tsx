import React from "react";
import { HomeContentList, HomeContentListBox } from "../styled-comp";

const HomeContent = ({ width, list }: { width: number; list: any[]; }) => {

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
