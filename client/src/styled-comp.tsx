import styled from "styled-components";
import { darken } from "polished";
import { Width } from "./interface";
import React, { memo } from "react";

//
//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스

const leftWidth = 200;
const rightWidth = 180;


interface topView {
   width: number;
}

export const TopMainView = (styled.div<topView>`
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
`);

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
`;

export const ContentCenterArticleBox = styled.section<Width>`
   margin-top: 70px; 
   word-break: break-all;
`;

export const ContentTopicListComp = styled.div`
  position: relative;
  padding:10px 0px 60px 13px;
  //border: 1px solid #ced4da;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  cursor:pointer;
  margin-bottom: 25px;
  transition: 0.125s all ease-in;
  background: #FFFFFF;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  & > h1{
  font-size:22px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  color:#74c0fc;
  }
  & .content-create{
  position: absolute;
  color:#868e96;
  font-weight: 300;
  bottom:10%;
  }
  &:hover{
   transform: translateY(-5px);
   box-shadow: rgba(0, 0, 0, 0.04) 0px 16px 28px 0px;
  }
`;

//
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
   font-size: 0;
   &.fixed {
      position: fixed;
      top: -0px;
   }
`;

export const ContentItemsComp = styled.div`
   position: relative;
   display: inline-block;
   width: 100%;
   height: 50px;
   /* margin-bottom: 13px; */
   /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); */
   font-size: 18px;
   font-weight: 100;
   transition: all 0.2s;
   &:hover {
      color:black;
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

//--------------------------------write---------------------------------------

export const WriteBox = (styled.div`
   position: absolute;
   border: 1px solid rgba(0, 0, 0, 0.2);
   height: 100%;
   width: 50%;
   border-radius: 4px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
   overflow: scroll;
`);

export const WriteConditionBox = memo(styled.section`
   position: absolute;
   right: 0;
   width: 50%;
   height: 100%;
`);


export const WriteBtnBoxComp = styled.div`
   padding-left:60px;
   margin-top:30px;
`;

export const WriteBtnComp = styled.button`
   border: 1px solid rgba(0, 0, 0, 0.2);
   padding: 15px 25px;
   font-size: 17px;
   border-radius: 4px;
   letter-spacing: 1.2px;
   transition: 0.3s all;
   background: #a5d8ff;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
   color: black;
   font-weight: 300;
   margin-right: 30px;
   &:hover {
      cursor: pointer;
      background-color: ${darken(0.1, "#a5d8ff")};
   }
   
`;

export const SelectTopicBoxComp = styled.div`
   padding-top:50px;
   padding-left:60px;
   padding-right: 60px;
   & .post-select-box{
   display: flex;
   flex-wrap: wrap;
   }
   & h1{
   font-size:2rem;
   margin-bottom:40px;
   }
`;

export const SelectTopicItemComp = styled.div`
  width:150px;
  margin-bottom: 40px;
  padding:0;
  display: flex;
  align-items: center;
  & .select-input{
    width:100px;
    display: inline-block; 
    width:20px;
    height: 20px;
    margin-right: 15px;
  }
  & .select-label{
    font-weight: 300;
    margin-top: -1px;
    font-size:120%;
  }
`;

//--------------------------------write---------------------------------------
