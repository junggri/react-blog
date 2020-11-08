import styled, { css } from "styled-components";
import polished, { darken, lighten } from "polished";

import { Width } from "./interface";
//INTERFACE

const leftWidth = 300;
const rightWidth = 250;

export const TopView = styled.div<Width>`
  /* border: 1px solid black; */
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  height: 320px;
  width: ${(props) => props.width + "px"};
  max-width: ${(props) => props.width + "px"};
  @media (max-width: ${window.screen.width * 0.7}px) {
    width: ${window.screen.width * 0.5}px;
  }
`;

//MAIN_VIEW---------------COMPONENTS

export const MainView = styled.div<Width>`
  border: 1px solid black;
  margin: 0 auto;
  width: ${(props) => props.width + "px"};
  max-width: ${(props) => props.width + "px"};
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

//MAIN_VIEW---------------TOP
export const MainViewLeft = styled.section`
  width: ${leftWidth + "px"};

  & .main-left-slo {
    font-size: 32px;
    text-align: center;
    margin-top: 78px;
  }
`;

export const MainViewLeftSubjectBox = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 70px;
`;

export const MainSubList = styled.div`
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

////MAIN_VIEW---------------LEFT

export const MainViewCenter = styled.section<Width>`
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

export const MainViewCenterContentBox = styled.section<Width>`
  border: 1px solid black;
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
