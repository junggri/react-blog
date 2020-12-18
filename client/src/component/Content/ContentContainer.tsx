import React from "react";
import { ContentNav, ContentRight, ContentTopicItems, PostContainer } from "component/index";
import { ContentCenterArticleBox, ContentCenterComp } from "../../styled-comp";
import { Route } from "react-router-dom";
import { IContentSectionProps } from "../../interface/index.interface";


const ContentContainer = ({ width, list, height, match }: IContentSectionProps) => {
   return (
      <>
         <ContentNav list={list} height={height} />
         <ContentCenterComp width={width}>
            <ContentCenterArticleBox width={width}>
               <Route path={"/content/:topic"}
                      exact
                      render={() =>
                         <ContentTopicItems match={match} />} />
               <Route path={"/content/:topic/:postid"}
                      exact
                      render={() =>
                         <PostContainer match={match} />} />
            </ContentCenterArticleBox>
         </ContentCenterComp>
         <ContentRight />
      </>
   );
};
export default ContentContainer;
