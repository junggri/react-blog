import styled, { css, keyframes } from "styled-components";
import { media } from "./styles/Media";

const leftWidth = 330;
const tabletLeftWidth = 200;
const _width = 1200;

const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

const mediaMixin = css`
  @media (max-width: 369px) {
    //369이하일때 적용되는 것들
    width: 92%;
  }
  @media (min-width: 369px) {
    //369이상일떄 적용되는 것들
    width: 95%;
  }
  @media (min-width: 1025px) {
    width: 98%;
  }
  @media(min-width:1099px){
    width:1100px
  }
`;

const postMediaMixin = css`
  @media (max-width: 369px) {
    width: 92%;
  }
  @media (min-width: 369px) {
    width: 92%;
  }
  @media (min-width: 768px) {
    width: 92%;
  }
  @media (min-width: 1024px) {
    width: 92%;
  }
  @media (min-width: 1025px) {
    width: 800px;
  }
`;


// export const EntryContainerComp = styled.div`
//   position: relative;
//   margin: 0 auto;
//   border: 1px solid black;
//   ${mediaMixin}
//   `;
export const NavBarContainer = styled.div`
  width:100%;
`;

export const NavBarComp = styled.section`
  z-index: 9;
  display: flex;
  position: fixed;
  left:50%;
  transform: translate(-50%,0);  
  ${mediaMixin};
  justify-content: space-between;
  align-items: center;
  & .navbar-logo {
    height: 40px;
    width: 100px;
    display: flex;
    align-items: center;
    & .logo-icons{
      font-size:1.3rem;
      opacity: 0.7;
      transition:0.3s all;
      &:hover{
        opacity:0.9
      }
    }
  }
  nav > ul {
    display: flex;
  }
  li {
    margin: 0 10px;
    opacity: 0.5;
    font-weight: 400;
    font-size: 0.86rem;
    transition: 0.2s all;
    &:hover {
      color: #ff6666;
      cursor: pointer;
    }
  }
  & .navbar-icons-box {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & .navbar-icon{
      height: 100%;
      font-size:1.9rem;
      opacity: 0.6;
      &:hover{
        cursor:pointer;
        opacity: 1
      }
    }
  }
  & .active {
    color: #ff6666;
  }
`;
export const SearchBoxComp = styled.section`
  border:1px solid black;
  position: absolute;
  width:100%;
  height:200px;
  background: black;
  z-index: 10;
  transform: translateY(-200px);
  transition: 0.6s all ease-in-out;
  & .search-box-cancel-icon{
    font-size:2rem;
    position: absolute;
    right:10%;
    bottom:10%;
    color:white;
    cursor: pointer;
  }
  input{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:30%;
    padding:20px;
    outline-style: none;
    color:white;
    font-size:2rem;
    border:1px solid white;
    &::placeholder{
      font-size:2rem;
      color:white;
      caret-color:white;
    }
  }
`;
export const MainContainerComp = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 170px;
  padding-bottom:140px;
  width:780px;
  max-width:780px;
  @media(min-width:369px){
    width:95%
  }
`;

export const SideBarComp = styled.div`
  width:17%;
  position: absolute;
  left:-30%;
  //margin-top:2,;0px;
  @media(max-width:1240px){
    position:relative;
    left:0;
    width:100%;
    margin-bottom:50px;
  }
  header{
   padding-bottom: 15px;
   letter-spacing: 0.5px;
   border-bottom:1px solid rgba(0,0,0,0.4);
   @media(max-width:1240px){
    text-align: center;
    border:none;
   }
   h1{
    font-size:1.18rem;
    font-weight: 600;
    }
  }
   ul{
      margin-top:15px;
      @media(max-width:1240px){
      display: flex;
      padding:10px;
      align-items: center;
      overflow-x: scroll;
      &::-webkit-scrollbar{
        height: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ff6666;
        border-radius: 2px;
      }
   }
   li{
      margin-bottom:13px;
      min-width:90px;
      @media(max-width:1240px){
      padding:5px 12px;
      border:1px solid rgba(0,0,0,0.2);
      border-radius:10px;
      margin: 0 8px;
      font-size:0.8rem;
      text-align: center;
      span{
        opacity: 0.8;
      }
      }
     }
   }
   .active{
     color: #ff6666;
   }
`;


export const PostItemComp = styled.article`
  margin-bottom:70px;
  border-bottom:1px solid rgba(0,0,0,0.1);
  padding-bottom: 35px;
  & .post-metadata-box{
    display: flex;
    justify-content: space-between;
    & .divide{
      width:20px;
    }
    & .content-metadata{
      flex-grow: 1;    
      h1{
        position: relative;
        word-break: break-all;
        padding-left:12px;
        font-size:2.3rem;
        font-weight: 600;
        line-height: 1.4;
        display:flex;
        align-items: center;
        &::before{
          content:"";
          display:block;
          height:95%;
          position: absolute;
          width:4px;
          background: #ff6666;
          left:0;
        }
        @media(min-width:369px){
          font-size:1.4rem;
       }
        @media(min-width:500px){
          font-size:1.8rem;
        }
        @media(min-width:768px){
         font-size:2rem;
        }
      }
      h2{
        margin-top:10px;
        font-size:1.1rem;
        line-height: 1.2;
        @media(min-width:369px){
          font-size:0.9rem;
        }
        @media(min-width:500px){
          font-size:1.1rem;
        }
      }
    }
    & .post-imgBox{
      position: relative;
      @media(max-width:368px){
        display: none;
      }
      @media(min-width:369px){
        min-width:100px;
        height: calc(100px / 1.3);
      }
      @media(min-width:500px){
        min-width:180px;
        height: calc(180px / 1.3);
      }
      @media(min-width:768px){
       min-width:230px;
       height:calc(230px / 1.3);
      }
      //min-width:260px;
      //height:calc(260px / 1.3);
      img{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height: 100%;
      }
    }
  }
  footer{
    margin-top:26px;
    display: flex;
    align-items: center;
    & .comment{
      display: flex;
      align-items: center;
      span{
        margin-right:3px;
      }
    }
    div{
      margin-right:12px;
      font-size:0.95rem;
      opacity:0.7;
    }
  }
`;

///posts containre///

export const PostsContainerComp = styled.section`
  width:800px;
  ${postMediaMixin};
  position: relative;
  margin: 0 auto;
  padding-bottom: 30px;
  background: white;
  tab-size: 1;
  & .posts-container-iconbox{
    padding:20px 20px;
    font-size:1.5rem;
  }
  & img{
    height:auto;
    width:auto;
    max-height: 700px;
    position: relative;
    margin :0 auto;
    ${media.desktop`max-width:100%`};
  }
  & .posts-name{
    ${media.tablet`font-size:2.4rem`};
    ${media.mobile`font-size:2.2rem`};
    padding-top:50px;
    font-size:3.5rem;
    text-align: center;
    font-weight: bold;
    white-space: pre-wrap;
    word-break: break-all;
  }
  & .posts-detail{
    text-align: center;
    margin-top:20px;
    font-size:1.2rem
  }
  & .posts-content{
    word-break:break-all;
    font-size:1.2rem;
    margin-top:50px;
    a {
      color:#06c !important;
      text-decoration: underline;
      span{
        color:#06c !important;
      } 
    }
    & *{
      white-space: pre-wrap;
      word-break: break-all;
      line-height: 2.1;
    } 
    & p br{
      display: block;
      content: "";
      padding:10px 0px;
    }
    blockquote{
      padding:4px 13px;
      border-left:4px solid #3ab09e;;
      background: #FBFCFD;
      ${media.tablet`
       font-size:1rem;
       padding:2px 10px;
       border-left:3px solid #3ab09e;
      `};
      ${media.mobile`
       border-left:2px solid #3ab09e;
       padding:2px 10px;
      `}
    }
    p,ol,blockquote,span{
      color:black
    }
  }
  & .posts-created{
    margin-top: 60px;
    text-align: right;
    font-size:1rem;
    font-weight:100;
  }
  & .ql-syntax{
    padding:20px;
    ${media.tablet`
      font-size:0.9rem;
      padding:15px 15px;
   `};
   ${media.mobile`
      padding:10px 10px;
      font-size:0.8rem;
      white-space: pre;
      overflow:scroll;
   `};
   } 
`;

export const WriteMetaContainer = styled.section`
  border:1px solid red;
  width:50%;
  float:right;
  padding:20px;
`;

export const TextEditContentNameComp = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.2);
  h1{
    font-size:2rem;
  }
  input{
    margin-top:14px;
    width:100%;
    font-size:1.5rem;
    outline-style: none;
    border:none;
    padding:10px 0px;
    &::placeholder{
      font-size:1.5rem;
    }
  }
  & .summary_content{
    h1{
      font-size:2rem;
      margin-top:20px;
    }
    input{
    font-size:1.125rem;
    &::placeholder{
      font-size:1.12rem;
      }
    }
  }
`;

export const SelectTopicComp = styled.div`
  margin-top:30px;
  h1{
    font-size:2rem;
    margin-bottom:15px;
  }
  & .select-item-box{
    max-height: 300px;
    overflow-y: scroll;
  }
   & .select-items{
    position:relative;
    display: flex;
    align-items: center;
    margin-bottom:14px;
    width:150px;
   }
   & .make_new_topic_box{
    width:150px;
    display: flex;
    align-items: center;
    input{
      border:1px solid rgba(0,0,0,0.2);
      padding:5px;
      margin-right: 10px;
      outline-style:none;
    }
    span{
      font-size:1.2rem;
      cursor: pointer;
    }
   }
`;

export const DeleteBtnComp = styled.div`
   position: absolute;
   right:0;
   font-size:1.5rem;
   margin-left:15px;
   cursor: pointer;
   display: flex;
   align-items: center;
   opacity: 0;
   &:hover{
    opacity:1
   }
`;

export const SelectTopicItempComp = styled.li`
  padding:0;
  display: flex;
  align-items: center;
  & .select-input{
    display: inline-block; 
    width:15px;
    height: 15px;
    margin-right: 15px;
  }
  & .select-label{
    font-weight: 300;
    margin-top: -1px;
    font-size:120%;
    cursor: pointer;
  }
`;

export const KindofPostItemComp = styled.div`
  padding:0;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  & .select-input{
    display: inline-block;
    width:15px;
    height: 15px;
    margin-right: 15px;
  }
  & .select-label{
    font-weight: 300;
    margin-top: -1px;
    font-size:120%;
    cursor: pointer;
  }
`;

export const KindofPostsComp = styled.div`
  margin-top:30px;
  h1{
    font-size:2rem;
    margin-bottom:20px;
  }
`;

export const ThumbnailComp = styled.div`
  border:1px solid black;
`;