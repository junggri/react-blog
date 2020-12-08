import React from "react";
import { ContentCenter, ContentNav, ContentRight } from "component/index";

interface ContentProp {
   width: number;
   list: string[];
   height: number;
   params: string;
   match: any
}

const Content = ({ width, list, height, params, match }: ContentProp) => {

   return (
      <>
         <ContentNav list={list} height={height}></ContentNav>
         <ContentCenter width={width} params={params} match={match}></ContentCenter>
         <ContentRight></ContentRight>
      </>
   );
};
export default Content;
