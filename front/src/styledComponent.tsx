import styled, { css, keyframes } from "styled-components";


const leftWidth = 330;
const tabletLeftWidth = 200;
const _width = typeof window === "object" ? window.screen.width * 0.57 : 1000;


const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

const mediaMixin = css`
  @media(max-width:369px){
    width:92%;
  }
  @media(min-width:369px){
    width:92%;
  }
  @media(min-width:768px){
    width:97%;
  }
  @media(min-width:1025px){
    width:1025px
  }
`;

const postMediaMixin = css`
  @media(max-width:369px){
    width:92%;
  }
  @media(min-width:369px){
    width:92%;
  }
  @media(min-width:768px){
    width:92%;
  }
  @media(min-width:1024px){
    width:92%
  }
  @media(min-width:1025px){
    width:800px;
  }
`;

export const NavBarComp = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .navbar-logo{
    height:40px;
    width:100px  
  }
  nav > ul{
    display: flex;
  }
  li{
    margin: 0 10px;
    opacity: 0.5;
    font-weight: 400;
    font-size:0.86rem;
    transition: 0.2s all;
    &:hover{
      color: #ff6666;
      cursor:pointer;
    }
  }
  & .navbar-icons{
    border:1px solid black;
    width:100px;
    height:20px;
  }
  & .active{
    color: #ff6666;
  }
`;

export const EntryContainerComp = styled.div`
  position:relative;
  width:100%;
`;

export const DisplayCotainerComp = styled.article`
  width:1000px;
  margin:0 auto;
  padding: 200px 0 0 0;
  @media(max-width:1070px){
    width:93%
  }
`;

export const EntryItemComp = styled.div`
   border:1px solid black;
   width:100%;
   
`;
export const DisplayItemComp = styled.div`
  position: relative;
  h1{
    font-size:2.8rem;
    text-align: center;
    cursor:pointer;
    transition: 0.3s all ease-in-out;
    color:#1c1c1c;
    &:hover{
      color: #ff6666;
    }
  }
  h2{
    font-size:1.2rem;
    text-align: center;
    margin-top:4px;
    opacity: 0.6;
    cursor:pointer
  }
  & .item-img{  
    margin-top:30px;
    border-radius: 4px;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom:61.8%;
    border:1px solid black;
    background-image: url('./images/Logo.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }
  margin-bottom:120px;
`;