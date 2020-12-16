import React from "react";
import {ContentNav, ContentRight, ContentTopicItems, PostsBox} from "component/index";
import {ContentCenterArticleBox, ContentCenterComp} from "../../styled-comp";
import {Route} from "react-router-dom";

interface ContentProp {
    width: number;
    list: any
    height: number;
    match: any
}

const Content = ({width, list, height, match}: ContentProp) => {
    return (
        <>
            <ContentNav list={list} height={height}/>
            <ContentCenterComp width={width}>
                <ContentCenterArticleBox width={width}>
                    <Route path={"/content/:topic"}
                           exact
                           render={() =>
                               <ContentTopicItems match={match}/>}/>
                    <Route path={"/content/:topic/:postid"}
                           exact
                           render={() =>
                               <PostsBox match={match}/>}/>
                </ContentCenterArticleBox>
            </ContentCenterComp>
            <ContentRight></ContentRight>
        </>
    );
};
export default Content;
