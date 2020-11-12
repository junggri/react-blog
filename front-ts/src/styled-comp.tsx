import styled, { css } from "styled-components";
import polished, { darken, lighten } from "polished";

import { Width } from "./interface";
//
//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스

const leftWidth = 300;
const rightWidth = 250;

export const TopView = styled.div<Width>`
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
  /* border: 1px solid black; */
  margin: 0 auto;
  width: ${(props) => props.width + "px"};
  max-width: ${(props) => props.width + "px"};
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

//MAIN_VIEW---------------TOP

export const ContentCenter = styled.section<Width>`
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
`;

export const ContentCenterArticleBox = styled.section<Width>`
  margin-top: 100px;
`;

//MAIN_VIEW---------------CENTER

export const MainViewRight = styled.section`
  /* border: 1px solid red;  */
  width: ${rightWidth + "px"};
  padding: 0px 35px;
  & > p {
    margin-top: 78px;
  }
`;

//
export const MainHomeView = styled.div<Width>`
  width: ${(props) => props.width + "px"};
  border: 1px solid blakc;
  margin: 0 auto;
`;

export const ContentNavComp = styled.section`
  width: ${leftWidth + "px"};
  border: 1px solid red;
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
