import styled from "styled-components";
import { darken } from "polished";

import { Width } from "./interface";

//
//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스

const leftWidth = 300;
const rightWidth = 250;

const heigth = window.innerHeight;

interface topView {
   width: number;
   ref: any;
}

export const TopMainView = styled.div<topView>`
   /* border: 1px solid black; */
   position: relative;
   margin: 0 auto;
   width: ${(props) => props.width + "px"};
   height: 320px;
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
   word-break: break-all;
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
interface ListBox {
   width: number;
}

export const HomeContentListBox = styled.section<ListBox>`
   width: ${(props) => props.width - leftWidth + "px"};
   position: absolute;
   right: 0;
   /* border: 1px solid black; */
   margin-top: 70px;
   padding: 0px 0px 0px 50px;
`;

interface homeContentList {
   children: any;
}

export const HomeContentList = styled.div<homeContentList>`
   border: 1px solid rgba(0, 0, 0, 0.2);
   border-radius: 4px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.02);
   height: 350px;
   margin-bottom: 50px;
`;

export const WriteBox = styled.div`
   position: absolute;
   border: 1px solid rgba(0, 0, 0, 0.2);
   height: 100%;
   width: 50%;
   border-radius: 4px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const WriteConditionBox = styled.section`
   position: absolute;
   right: 0;
   width: 50%;
   height: 100%;
`;

export const WriteBtnComp = styled.button`
   border: 1px solid rgba(0, 0, 0, 0.2);
   padding: 15px 25px;
   font-size: 17px;
   border-radius: 4px;
   letter-spacing: 1.2px;
   transition: 0.3s all;
   margin-top: 30px;
   background: #a5d8ff;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
   color: white;
   font-weight: 600;
   &:hover {
      cursor: pointer;
      background-color: ${darken(0.1, "#a5d8ff")};
   }
`;

export const ArticleContainer = styled.section`
   position: relative;
   padding: 30px 46px;
   width: 50%;
   height: 60%;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   border-radius: 4px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
   border: 1px solid rgba(0, 0, 0, 0.1);
   & .buttonBox {
      position: absolute;
      width: 80%;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 5%;
      display: flex;
      flex-direction: column;
   }
   & .topicsBox {
      height: 60%;
      overflow-y: scroll;
      padding: 20px 20px;
      box-shadow: 0 0px 8px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 3px;
   }
`;

export const TopicItem = styled.li`
   height: 30px;
   font-size: 18px;
   font-weight: 100;
   display: flex;
   align-content: center;
   margin-bottom: 15px;
   & div {
      padding-top: 6px;
      margin-left: 8px;
      transition: all 0.3s;
      display: inline-block;
   }
   & div:hover {
      cursor: pointer;
      font-weight: 600;
   }
   &:before {
      content: " ";
      //border: 1px solid black;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      width: 4px;
      background: #a5d8ff;
   }
`;
