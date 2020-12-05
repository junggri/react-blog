import React from "react";
import { ContentCenter, ContentNav, ContentRight } from "component";
import { MainView } from "../../styled-comp";

interface ContentProp {
   width: number;
   list: string[];
   height: number;
   params: string;
   match: any
}

const Content = ({ width, list, height, params, match }: ContentProp) => {


   return (
      <MainView width={width}>
         <ContentNav list={list} height={height}></ContentNav>
         <ContentCenter width={width} params={params} match={match}></ContentCenter>
         <ContentRight></ContentRight>
      </MainView>
   );
};
export default Content;
