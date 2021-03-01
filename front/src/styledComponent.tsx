import styled, { css, keyframes } from "styled-components";
import { media } from "./styles/Media";

const leftWidth = 330;
const tabletLeftWidth = 200;
const _width = 1200;

const postWidth = 830;

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
    width:${postWidth + "px"}
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
  max-width:1100px;
  ${mediaMixin};
  justify-content: space-between;
  align-items: center;
  @media(min-width: 360px){
    width:95%
  }
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

export const WriteBoxBtnComp = styled.div`
  border:1px solid rgba(0,0,0,0.2);
  position: absolute;
  bottom:2%;
  left:2%;
  padding:8px 14px;
  cursor:pointer;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const MainContainerComp = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 170px;
  padding-bottom:140px;
  max-width:1100px;
  & .post-item-container{
    @media(min-width:369px){
      position:relative;
    }
    @media(min-width:980px){
      position: absolute;
      right:0;  
    }
  }
`;

export const SideBarComp = styled.div`
  @media(min-width:369px){
    position: relative;
    padding:0 13px;
    width:100%;
  }
  @media(min-width:980px){
     position: fixed;
     width:200px;
  }
  margin-bottom:40px;
  header{
   @media(min-width:369px){
    padding:20px 0;
    border:none
   }
   @media(min-width:980px){
    padding-bottom: 15px;   
    border-bottom:1px solid rgba(0,0,0,0.2);
   }
   letter-spacing: 0.5px;
   display: flex;
   align-items: center;
   span{
    margin-right:4px;
    font-size:0.9rem;
   }
   & .media-icons{
    position: absolute;
    right:1%;
    font-size:1.5rem;
    cursor:pointer;
    display: none;
    transition:0.4s all ease-in-out;
    @media(max-width: 980px){
      display: block;
      }
   }
   h1{
    font-size:1.11rem;
    font-weight: 600;
    }
   }
   & .media-menu-bar{
    height: 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    transition: 0.3s all ease-in-out;
    overflow: scroll;
    @media(min-width:980px){
      display: none;
    }
    li{
      border-bottom:1px solid rgba(0,0,0,0.1);
      margin:0;
      padding:10px;
    }
   }
   
   ul{
      margin-top:15px;
      @media(max-width:980px){
        display: none;
      }
      li{
         margin-bottom:13px;
         min-width:90px;
      }
   }
   .active{
     color: #ff6666;
   }
   
   & .sidebar-meta-data{
    @media(min-width:369px){
      display: none; 
    }
    @media(min-width:980px){
      display: flex;
      flex-direction: column;
    }
    margin-top:50px;
    font-size:0.9rem;
    font-weight: 400;
    div{
      margin-bottom:8px;
      & .count-slo{
        display: inline-block;
        width:80px;
      }
      & .loading-icon{
          animation: ${rotate} infinite linear 3s;
      }
    }
   }    
`;

export const PostItemComp = styled.article`
  position: relative;
  @media(min-width:120px){
    margin: 0 auto;
    margin-bottom:30px;
  }
  @media(min-width:369px){
    margin-bottom:70px;
    padding:0 13px;
  }
  @media(min-width:700px){
    width:700px;
  }
  & .post-like__icons{
    position:absolute;
    line-height: 1.4;
    font-size:1.8rem;
    left:-25px;
    top:2px;
    cursor:pointer;
  }
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
        //padding-left:12px;
        font-weight: bolder;
        line-height: 1.4;
        @media(min-width:369px){
          font-size:1rem;
       }
        @media(min-width:500px){
          font-size:1.5rem;
        }
        @media(min-width:768px){
         font-size:1.85rem;
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
       min-width:200px;
       height:calc(200px / 1.3);
      }
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
  position: absolute;
    bottom:0;
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
  & .post-control-icon-box{
    position: absolute;
    right:0;
    bottom:2%;
    span{
      opacity: 0.8;
      cursor:pointer;
      display: inline-block;
      margin-left:20px;
      font-size:1.5rem;
    }
  }
`;

///posts containre///

export const PostsContainerComp = styled.section`
  width:${postWidth + "px"};
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
    max-height: 600px;
    position: relative;
    margin :0 auto;
    ${media.desktop`max-width:100%`};
  }
  & .posts-name{
    ${media.tablet`font-size:2.4rem`};
    ${media.mobile`font-size:2.2rem`};
    padding-top:50px;
    font-size:3.3rem;
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
      padding:7px 0px;
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
  width:50%;
  float:right;
  padding:50px;
  overflow: scroll;
  height: 100vh;
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
  margin-top:30px;
  h1{
    font-size:2rem;
    margin-bottom:20px;
  }
  h2{
    font-size:1.125rem;
    margin-top:10px;
    font-weight: 600;
    color:#ff6b6b;
  }
  & .thumbnail-imgbox{
    margin-top:20px;
    max-height: 400px;
    overflow-y: scroll;
    img{
      border:1px solid rgba(0,0,0,0.2);
      border-radius: 5px;
    }
  }
`;

export const TextEditorBoxComp = styled.div`
  display: flex;
  margin-top:30px;
  div{
    border:1px solid rgba(0,0,0,0.2);
    padding:13px 20px;
    margin-right:15px;
    border-radius: 5px;
    cursor:pointer;
  }
`;

export const TempPostContainerComp = styled.div`;
  margin-top:50px;
  margin-bottom:40px;
  & .tsc-slo{
    font-size:2rem;
  }
  & .temp_item{
    display: flex;
    justify-content: space-between;
    padding-right: 60px;
    align-items: center;
    margin-top:20px;
    & .posts-admin-delete{
      font-size:1.4rem;
      display: inline-block;
      padding-top:5px;
      &:hover{
        cursor: pointer;
      }
    }
  }
`;

export const TemporaryPostComp = styled.div<any>`
  cursor:pointer;
  font-size:1.4rem;
  &:hover{
    text-decoration: underline;
  }
`;

////////
export const AdminContainerComp = styled.div`
  position: absolute;
  width:30%;
  left:50%;
  top:40%;
  transform: translate(-50%,-50%);
  & .login-inputbox{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    & input{
      padding:15px 10px;
      outline-style: none;
      border:1px solid rgba(0,0,0,0.2);
      margin-bottom: 20px;
    }
  }
  & .login-btn{
    border:1px solid rgb(0,0,0,0.2);
    width:100%;
    height: 57px;
    outline-style: none;
    cursor: pointer;
  }
  & .certification-numberBox{ 
    display: flex;
    button{
      border:1px solid rgba(0,0,0,0.2);
      outline-style: none;
      height: 40px;
      font-size: 12px;
      letter-spacing: 1.2px;
      cursor: pointer ;
    }
    input{
      height: 40px;  
      outline-style: none;
      border:1px solid rgba(0,0,0,0.2);
      margin-bottom: 20px;
      margin-right: 15px;
      font-size: 1rem;
      padding-left: 10px;
    }
  }
`;

export const CommentContainerComp = styled.section`
  border:1px solid black;
  width:${postWidth + "px"};
  ${postMediaMixin};
  position: relative;
  margin: 0 auto;
  padding-top:30px;
`;