import styled, { css, keyframes } from "styled-components";
import { darken, lighten } from "polished";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { media } from "./styles/Media";

export interface Width {
   width: number;
}

export interface topView {
   width: number;
   logo: any
   ref: any
}

export interface contentBox {
   ref: any;
}

interface IDeleteTopicIconComp {
   onClick: any
}

interface ICommentItems {
   depth: number
}

//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스

const leftWidth = 330;
const tabletLeftWidth = 200;
const _width = typeof window === "object" ? window.screen.width * 0.57 : 1000;

interface IEntryContainerComp {
   width: number
}

const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;


const postsContainerMixin = css`
  ${media.mobile`
   position:relative;
   padding-left:10px;
   padding-rigth:10px;
  `};
  ${media.tablet`
   padding-left:180px;
  `}
  ${media.bigMoblie`
    padding-left:180px;
  `}
  ${media.mobile`
    padding-left:0px;
  `};
  margin-top:50px;
  padding-left:${leftWidth + "px"}; 
  width:100%;
  position: absolute;
  top:0;
  & .content-cmt-box{
    display: flex;
    opacity: 0.6;
    margin-top:20px;
    font-size:1.12rem;  
    & .content-cmt-icons{
      margin-right: 4px;
    }
  }
  & .sidebar-copyright{
   text-align: right;
   letter-spacing: 1.1px;
   font-size:12px;
   margin-top:80px;
   margin-bottom: 20px;
  }
`;

export const EntryContainerComp = styled.div`
  position:relative;
  margin:0 auto;
  @media(min-width:${_width + "px"}){
    max-width:${_width + "px"};
  };
  ${media.desktop`
    width:80%;
  `}  
  ${media.mobile`
    width:90%;
  `};
`;

const postsItemMixin = css`  
  position:relative;
  margin-bottom:60px;
  word-break:break-all;
  & .item-created{  
    display: inline-block;
    font-size:1rem;
    font-weight: 600;
    opacity: 0.8;
    ${media.tablet`font-size:0.8rem`};
    & .topic_link{
      margin-left:6px;
      color:#3ab09e;
    }
    & .post_is_new{
      display: inline-block; 
      font-weight: 600;
      margin-left:6px;
      color: #ff6666;
    }
  }
  & .item-contentName{
    overflow-wrap: break-word;
    font-size:2rem;
    line-height: 2.5rem;
    margin-top:6px;
    letter-spacing: 2px;
    font-weight: 450;
    ${media.tablet`
      font-size:2rem;
      margin-top:-4px
    `};
    & span{
      &:hover{
        text-decoration:none; 
        border-bottom:1px solid black;
         padding-bottom:1.4px
      }
    }
    //white-space:nowrap;
    //overflow: hidden;
    //text-overflow: ellipsis;
    //위에는 ...표시하는 방법
    padding:6px 0;
  }
  & .item-detail{
    font-size:1.2rem;
    margin-top:14px;
    font-weight: 400;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${media.tablet`font-size:0.8rem`}
  }
  & .posts-admin-box{
    position: absolute;
    right:0;
    bottom:0;
    z-index: 9;
    span{
      vertical-align: middle;
      font-size:1.6rem;
      opacity: 0.6;
      margin-left:12px;
      transition: 0.3s all;
    }
    span:hover{
      opacity: 1;
      cursor: pointer;
    }   
  }
 
`;


export const TopMetaBarComp = styled.section`
  position: fixed;
  top:0;
  width:${_width + "px"};
  z-index: 999;
  height: 62px;
  background:white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet`
   width:95%;
  `};
  ${media.desktop`
   width:95%;
  `};
  & .topmetabar-list{
    display: flex;
    & .metaItem{  
      padding:5px 2px;
      margin-right: 40px;
      font-size:1.5rem;
      opacity: 0.6;
      font-weight: 500;
      letter-spacing: 1.4px;      
      ${media.tablet`
        font-size:1.2rem;
      `};
      ${media.small`
        font-size:0.8rem;
      `}
      & .tmb-icon{
        font-size: 1.3rem;
        ${media.mobile`
         display:none;
        `};
        ${media.small`
         display:none;
        `}
      }
     &:hover{
      opacity: 1;       
     }
    }
    & .metaActive{
      opacity: 1;
      border-bottom:2.5px solid black;  
      ${media.small`
        border-bottom:1.5px solid black;
      `}    
    }
  }
  & .topmetabar-count{
    ${media.desktop`
     right:5%;
    `};
    ${media.mobile`
      display:none;
    `};
    height: 100%;
    display: flex;
    align-items: center;
    & div {
      margin-left:12px;
      font-weight: 100;
      font-size:12px;
      display: flex;
      align-items: center;
       & .topmetabar-countAll,.topmetabar-today{
         margin-left:6px;
         display: flex;
       }
       & .count-loading-icon{
         animation: ${rotate} infinite linear 5s;
      }
    }
  }
`;

export const SideBarComp = styled.section`
  display: inline-block;
  width: ${leftWidth + "px"};
  position : fixed;
  z-index: 9;
  margin-top:50px;
  & .sidebar-item-list{
    font-weight: 300;
    margin-top: 40px;
    & li{
      font-size:1.125rem;
      padding:13px 0px;
      display: flex;
      align-items: center;
      &:hover{
        text-decoration: underline;
        text-underline-position: under;
      }
      ${media.mobile`
        margin-bottom:14px;
     `};
    }
    & .active{
      color:#3ab09e;
    }
  }
  & .write-article-btn {
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: inline-block;
    padding: 7px 20px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 100;
    transition: all 0.2s;
    margin-top:20px;
   }
  & .write-article-btn:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
  & .ga-count{
    ${media.mobile`
      margin-top:30px;
    `};
    display: flex;
    flex-direction: column;
    margin-top:62px;
    padding:4px;
    font-size:0.9rem; 
    span{
      margin-right:10px;
    }
    div{
      font-weight: 300;
      display: flex;
      margin-right:6px;
      align-items: center;    
      margin-bottom:7px;  
      & .count-num{
        font-weight:100;
      }
    }
    & .loading-icon{
      animation: ${rotate} infinite linear 3s;
      font-size:0.8rem;
      margin-right:10px;
    }
  }
  ${media.tablet`
   width:180px;
  `}
  ${media.bigMoblie`
   width:180px;
  `};
  ${media.mobile`
   position:relative;
   width:100%;
  `};
`;

export const SideBarThunmbNailComp = styled.img`
  border:1px solid rgba(0,0,0,0.06);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  width:96px;
  height: 96px;
  border-radius: 5px;
  ${media.mobile`
   display:none;
  `};
`;

export const SideBarMetaDataComp = styled.div`
  margin-top:34px;
  & .sidebar-names{
    font-size:1.4em;
    letter-spacing: 0.8px;
    font-weight: 500;
  }
  & .sidebar-posi{
    font-size:1.1rem;
    font-weight: 300;
    margin-top:24px;
    opacity: 0.7;
  }
  ${media.mobile`
   margin-top:0px;
  `};
`;

export const SideBarPostsContainerComp = (styled.ul`
  margin-top:70px;
  & .sidebar-list{
    font-size:1.1rem;
    margin-bottom:15px;
    padding-bottom:10px;
    border-bottom: 1px solid black;
    letter-spacing: 1.2px;
    font-weight: 500;
  }
`);

export const SideBarPostsItemComp = styled(NavLink)<any>`
  height: 16px;
  display:block;
  margin-bottom:6px;
  transition: all 0.6s;
  vertical-align: middle;
  & div{
    vertical-align: middle;
    font-size:1.1rem;
    font-weight: 300;
    opacity:1;
    display: flex;
    & .topic_list_items:hover{
      text-decoration: underline;
    }
  }
  & .topic_length{
    display: inline-block;
    font-size:1rem;
    margin-left:5px;
  }
  & .topic_is_new{
    color: #ff6666;
    font-size:11px;
    display: inline-block;
    margin-left: 10px;
    margin-top:1px;
    z-index: 9;
    &:hover{
      font-weight: 600;
    }
  }
  &[aria-current] {
    color: black;
    & .topic_list_items{
      opacity: 1;
      font-weight: 500;
      color:#3a7dff
    }
  }

`;

export const EntryPostsContainerComp = styled.div`
  ${postsContainerMixin}
`;

export const SpecificTopicContainerComp = styled.div`
  ${postsContainerMixin};
`;

export const EntryPostsItemComp = styled.div`
  ${postsItemMixin}'
`;

export const SpecificTopicItemsComp = styled.div`
  ${postsItemMixin}'
`;

export const PostsContainerComp = styled.section`
  width: ${_width * 0.8 + "px"};
  ${media.desktop`
    width:80%;
  `}  
  ${media.mobile`
    width:90%;
  `};
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


export const CommentContainerComp = styled.div`
  position: relative;
  margin:60px auto;
  width: ${_width * 0.8 + "px"};
  ${media.desktop`
    width:80%;
  `}  
  ${media.mobile`
    width:90%;
  `};
  & .blank_space{
    height:100px;
  }  
  & .cmt-slo-box{
   display: flex;
   align-items: flex-end;
   margin-bottom:30px;
   position: relative;
   & .cmt-icons{
    font-size:1.7rem;
    margin-right:12px;    
   }
   & .cmt-slo{
    font-size:2rem;
   }
  }
`;
export const CommentInputItem = styled.div`
  textarea{
    resize: none;
    width:100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
    outline-style: none;
    border-radius: 4px;
    border:1px solid rgba(0,0,0,0.1);
    padding:15px 15px;
    font-size:1.125rem;
  }
  textarea::placeholder{
    font-size:1.125rem;
  }
  & .cmt-login{
    margin-top:20px;
    position: relative;
    ${media.mobile`
      display:flex;
      flex-direction:column;
   `};
    input {
      border:1px solid rgba(0,0,0,0.2);
      outline-style: none;
      border-radius: 2px;
      margin-right:15px;
      padding:12.5px 7px;
      background: white;
      ${media.mobile`
         margin:0;
         margin-bottom:6px;
      `}
    }
    & .cmt-submit-btn{
      ${media.mobile`
         position:relative;
         width:100%;
         padding:12.5px 0px;
      `};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      position: absolute;
      background:#3ab09e;
      color:white;
      cursor:pointer;
      top:0;
      right:0;
      height: 100%;
      width:100px;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:1.125rem
    }
  }
  & .visible{
    display: block;
  }
`;

export const CommentItmesComp = styled.div<ICommentItems>`
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0,0,0,0.2);
  position: relative;
  padding:30px 15px;
  &.depth2{
    background: rgba(0,0,0,0.02); 
    border: 1.5px solid rgba(0,0,0,0.02);
    border-radius: 5px;
  }
  &.depth3{
    background: rgba(0,0,0,0.024);
    border: 1.5px solid rgba(0,0,0,0.024);
    border-radius: 5px;          
  }
  &.depth4{
    background:rgba(0,0,0,0.03);
    border: 1.5px solid rgba(0,0,0,0.03);
    border-radius: 5px;
  }
  & .cmt-whoami{
    display: flex;
    & .cmt-delete-icons{ 
      position: absolute;
      right:10px; 
      font-size:1.6rem;
      opacity: 0.6;
    }
    & .cmt-delete-box{
      display: none;
    }
    & .visible{
      display: block;
    }
    & .cmt-delete-inputbox{
      display:flex;
      position: absolute;
      right:10px;
      top:70px;
      flex-direction: column;
      input{
        outline-style: none;
        border:1px solid rgba(0,0,0,0.2);
        padding:5px;
        margin-bottom: 10px;
      }  
      & .delete-btn{
        text-align: center;
        padding:6.5px;
        background: #3ab09e;
        border:1px solid #3ab09e;
        color:white;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
    }
    & .cmt-delete-icons:hover{
      opacity: 1;
      cursor: pointer;
    }
    & img{
      width:60px;
      height: 60px;
      border-radius: 100px;
      border:1px solid rgba(0,0,0,0.08);
      display: inline-block;
      margin-right: 40px;
    }
    & .cmt-whoami-sub{
      display: flex;
      flex-direction: column;
      justify-content: center;
       & .cmt-writer{
         display: inline-block;
         font-size:1.125rem;
         font-weight: bold;
         margin-bottom: 6px;
       }
       & .cmt-created{
         display: inline-block;
         font-size:1rem;
         opacity: 0.7
       }
    }
  }
  & .cmt-content{
    margin-top:40px;
    font-size:1.175rem;
  }
  & .cmt-reply-box{
    margin-top:40px;
    & .depth-reply-btn{
      background: #3ab09e;
      border:1px solid #3ab09e;
      text-align: center;
      padding:17px;
      border-radius: 5px;
      cursor: pointer;
      display: none;
      margin-top:23px;
      font-size:1.125rem;
      color:white;
      &:hover{
        background: white;
        border:1px solid #3ab09e;
        color:#3ab09e;
      }
    }
    & .cmt-btn-reply{
      font-size:1rem;
      cursor:pointer;
      display: inline-flex;
      align-items: center;
      border-radius: 4px;
      & .reply-icons{
        margin-right:6px;
        font-size:1.125rem;
        color:#3ab09e;
      }
    }
    & .reply-depth{
      display:none;
      margin-top:20px;
    }
    & .visible{
      display: block;
    }
  }
  & .depth-reply-box{
    display: none;
    margin-top: 20px;
    background: transparent;
    border-radius: 4px;
  }
    
`;
////////////////////////////////////////
export const AdminLoginBoxComp = styled.div`
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

export const TagsContainerComp = styled.div`
   ${media.mobile`
      position:relative;
      padding-left:10px;
      padding-rigth:10px;
    `};
   margin-top:50px;
   padding-left:${leftWidth + "px"}; 
   width:100%;
   position: absolute;
   top:0;
   & .tag-slo{
    font-size:2.3675rem;
    margin-bottom: 70px;
   }
   & .tags-box{
    display: flex;
    flex-direction: column;
   }
   & .tag-hash{
    margin-bottom: 7px;
    font-weight: 400;
    color:#7DC5AF;
    font-size:1.135rem;
    display: inline-flex;
    align-items: center;
    padding:2px;
    &:hover{
      cursor:pointer;
      color:#ff6b6b;
    }
   }
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
   overflow: scroll;
`);


export const WriteBtnBoxComp = (styled.div`
   padding-left:60px;
   margin-top:30px;
   margin-bottom: 20px;
`);

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
   font-size:1.7rem;
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
    display: inline-block; 
    width:20px;
    height: 20px;
    margin-right: 15px;
  }
  & .select-label{
    font-weight: 300;
    margin-top: -1px;
    font-size:120%;
    cursor: pointer;
  }
`;

export const CreateNewTopicComp = styled.div`
   padding-top:20px;
   padding-left:60px;
   padding-right: 60px;
   & h1{
    font-size:20px;
    margin-bottom: 20px;
   }
   & .add-new-topic-btn{
    color: #dee2e6;
    font-size:30px;
    cursor: pointer;
    margin-top: 10px;
   }
   & .add-new-topic-btn:hover{
    color: gray;
   } 
`;

export const CreateNewTopicListBoxComp = styled.div`
  width:180px;
`;

export const DeleteTopicIconComp = styled.div<IDeleteTopicIconComp>`
  display: flex;
  font-size:20px;
  cursor: pointer;
  opacity: 0;
  color: #dee2e6;
  & :hover{
    color:#ff6b6b;
  }
`;

export const AddTopicBtnComp = styled.div`
  display: flex;
  align-items: center;
  & input{
    padding:8px;
    border:1px solid rgba(0,0,0.6);
  }
  & .make-new-topic-btn{
    color: #dee2e6;
    font-size:30px;
    cursor: pointer;
    margin-left: 15px;
  }
  & .make-new-topic-btn:hover{
    color: gray;
  } 
`;

export const CreateNewTopicListItemComp = styled.div`
  margin-bottom:15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & span{
    display: inline-block;
    width:70%;
    font-size:22px;
    font-weight: 100;
  }
  &:hover{
    ${DeleteTopicIconComp}{
      opacity: 1;
    }
  }
`;


export const SelectKindOfPostsBoxComp = styled.div`
   padding-top:50px;
   padding-left:60px;
   padding-right: 60px;
   & .post-select-box{
   display: flex;
   flex-wrap: wrap;
   }
   & h1{
   font-size:1.7rem;
   margin-bottom:40px;
   }
`;


export const SelectKindOfPosts = styled.div`
  width:150px;
  margin-bottom: 40px;
  padding:0;
  display: flex;
  align-items: center;
  & .select-input{
    display: inline-block; 
    width:20px;
    height: 20px;
    margin-right: 15px;
  }
  & .select-label{
    font-weight: 300;
    margin-top: -1px;
    font-size:120%;
    cursor: pointer;
  }
`;

export const PostsDetailComp = styled.div`
   padding-top:50px;
   padding-left:60px;
   padding-right: 60px;
   & h1{
    font-size:1.7rem;
    margin-bottom: 30px;
   }
   & input{
    width:100%;
    height: 50px;
    outline-style: none;
    border:none;
    padding-left: 10px;
    border-radius: 5px;
    background-color: ${lighten(0.1, "#a5d8ff")};
   }
`;

export const TemporaryStorageComp = styled.div`
  padding-left:60px;
  margin-top:50px;
  margin-bottom:40px;
  & .tsc-slo{
    font-size:1.7rem;
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
//--------------------------------write---------------------------------------


export const AboutContainerComp = styled.div`
  ${postsContainerMixin};
  & .about-icon-box{
    a {
     display: flex;
     align-items: center;
    }
    display: flex;
    font-size:3rem;
    margin-top:7px;
    & .aib-mail{
      cursor:pointer; 
      font-size:1.2rem;
      margin-left:15px;
      opacity: 0.6;
    }
    & .aib-github{
      opacity: 0.6;
      cursor:pointer;
    }
    & .aib-mail:hover,
    & .aib-github:hover{
      opacity: 1; 
    }    
  }
  & .about-me{
    font-size:2.1rem;
    font-weight: 600;
  }
  & .about-me-nickname{
    margin-top:10px;
    font-size: 1.2rem;
    letter-spacing: 1.2px;
  }
  & .about-detail{
    margin-top:30px;
    & .about-detail-slo{
      display: flex;
      align-items: center;
      font-size:1.4rem;
      font-weight: 600;
      margin-bottom: 15px;
    }
  }
  & .about-tech{
    & .about-tech-slo{
      display: flex;
      align-items: center;
      font-size:1.4rem;
      font-weight: 600;
      margin-bottom:15px;
    }
    margin-top:30px;
  }
  & .about-book{
    & .about-book-slo{
      display: flex;
      align-items: center;
      font-size:1.4rem;
      font-weight: 600;
      margin-bottom:15px;
    }
    margin-top:30px;
  }
  li{
    line-height: 1.2;
    margin-bottom:7px;
    display: flex;
    align-items: center;
  }
  & .slo-icons{
    color: #3ab09e;
    margin-right:12px;
  }
  padding-bottom: 40px;
`;