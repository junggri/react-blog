import styled, { css } from "styled-components";
import polished, { darken, lighten } from "polished";

import { Width } from "./interface";

//
//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스

const leftWidth = 300;
const rightWidth = 250;

const heigth = window.innerHeight;

interface topView {
  width: number;
  ref?: any;
}

export const TopMainView = styled.div<topView>`
  /* border: 1px solid black; */
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

export const TopNavBarComp = styled.nav`
  height: 56px;
  display: flex;
  justify-content: space-between;
  & > * {
    display: inline-block;
    margin: auto 0;
  }
  & .tnb-rightBox span {
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 100;
    transition: 0.3s all;
  }

  & .tnb-rightBox span:hover {
    font-weight: 600;
  }
  & > *:hover {
    cursor: pointer;
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
  padding: 0px 40px;
  word-break: break-all;
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
  /* border: 1px solid black; */
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

interface ContentBox {
  ref: any;
}

export const ContentNavComp = styled.section<ContentBox>`
  position: absolute;
  width: ${leftWidth + "px"};
  margin-top: 70px;
  &.fixed {
    position: fixed;
    top: -0px;
  }
`;

export const ContentBoxComp = styled.div`
  /* display: grid;
  
  justify-items: center;
  grid-template-columns: repeat(2, 1fr); */

  /* border: 1px solid black; */
  font-size: 0;
  & .click {
    font-weight: 600;
  }
`;

export const ContentItemsComp = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 50px;
  /* margin-bottom: 13px; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); */
  font-size: 15px;
  font-weight: 100;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;

//home Content
export const HomeContentListBox = styled.section<Width>`
  width: ${(props) => props.width - leftWidth + "px"};
  position: absolute;
  right: 0;
  /* border: 1px solid black; */
  margin-top: 70px;
  padding: 0px 0px 0px 50px;
`;

export const HomeContentList = styled.div`
  border: 1px solid black;
  height: 350px;
  margin-bottom: 50px;
`;

export const WriteBox = styled.div`
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

interface Props {
  children?: any;
}

export const WritePreview = styled.div<Props>`
  height: ${heigth + "px"};
  background: #dee2e6;
  padding: 20px 40px;
  /* & blockquote {
  } */
`;

export const WriteBtnComp = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 15px 25px;
  font-size: 17px;
  border-radius: 4px;
  font-weight: 100;
  letter-spacing: 1.2px;
  transition: 0.3s all;
  position: absolute;
  right: 0;
  &:hover {
    cursor: pointer;
    background-color: ${darken(0.1, "#FFCD64")};
  }
`;
