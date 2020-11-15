import styled, { css } from "styled-components";
import polished, { darken, lighten } from "polished";

import { Width } from "./interface";

//
//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스

const leftWidth = 300;
const rightWidth = 250;

const heigth = window.innerHeight;

export const TopMainView = styled.div<Width>`
  border: 1px solid black;
  position: relative;
  margin: 0 auto;
  height: 320px;
  width: ${(props) => props.width + "px"};
  max-width: ${(props) => props.width + "px"};
  & .write-article-btn {
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: inline-block;
    padding: 7px 20px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 100;
    position: absolute;
    bottom: 30px;
    right: 30px;
    transition: all 0.2s;
  }
  & .write-article-btn:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
  @media (max-width: ${window.screen.width * 0.7}px) {
    width: ${window.screen.width * 0.5}px;
  }
`;

//MAIN_VIEW---------------COMPONENTS

export const MainView = styled.div<Width>`
  margin: 0 auto;
  position: relative;
  width: ${(props) => props.width + "px"};
  max-width: ${(props) => props.width + "px"};
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

//MAIN_VIEW---------------TOP

export const ContentCenter = styled.section<Width>`
  position: absolute;
  left: ${leftWidth + "px"};
  width: ${(props) => props.width - (leftWidth + rightWidth) + "px"};
  padding: 0px 20px;
  & > h1 {
    font-size: 30px;
    text-align: center;
    margin-top: 78px;
    margin-bottom: 20px;
  }
  & > .content-date {
    display: inline;
    font-size: 14px;
    font-weight: 100;
    float: right;
  }
  border: 1px solid black;
`;

export const ContentCenterArticleBox = styled.section<Width>`
  margin-top: 100px;
`;

export const ContentRight = styled.section`
  position: absolute;
  right: 0;
  width: ${rightWidth + "px"};
  padding: 0px 35px;
  & > p {
    margin-top: 78px;
  }
`;

export const ContentNavComp = styled.section`
  position: absolute;
  width: ${leftWidth + "px"};
  & .main-left-slo {
    font-size: 32px;
    text-align: center;
    margin-top: 78px;
  }
`;

export const ContentBoxComp = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 70px;
`;

export const ContentItemsComp = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: inline-block;
  width: 100px;
  padding: 7px;
  margin-bottom: 13px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  &:hover {
    cursor: pointer;
    background-color: ${darken(0.1, "#FFCD64")};
  }
  & > .list-num {
    color: red;
    margin-right: 5px;
  }
`;

//home Content
export const HomeContentListBox = styled.section<Width>`
  width: ${(props) => props.width - leftWidth + "px"};
  padding: 20px 20px;
`;

export const HomeContentList = styled.div`
  border: 1px solid black;
  height: 200px;
  margin-bottom: 50px;
`;

interface Props {
  ref: any;
  children?: any;
}
export const WritePreview = styled.div<Props>`
  height: ${heigth + "px"};
  flex-grow: 1;
`;
export const WriteBox = styled.div`
  border: 1px solid black;
  height: 100%;
  display: flex;
`;
