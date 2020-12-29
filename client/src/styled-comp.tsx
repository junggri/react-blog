import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

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

interface ISideBarThunmbNailComp {
   style: any
}

//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스

const leftWidth = 320;
const rightWidth = 180;

interface IEntryContainerComp {
   width: number
}

const postsContainerMxin = css<Width>`
  padding-top:60px;
  padding-left:55px;
  padding-right:20px;
  position: absolute;
  right:0;
  width:${props => props.width - leftWidth + "px"};
  margin-bottom:60px;
`;

const postsItemMixin = css`
  display: block;
  position:relative;
  margin-bottom:60px;
  & .item-created{
    display: inline-block;
    font-size:1.1rem;
    font-weight: 600;
    opacity: 0.8;
  }
  & .item-contentName{
    font-size:2.7rem;
    margin-top:6px;
    letter-spacing: 2px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding:6px 0;
  }
  & .item-detail{
    font-size:1.2rem;
    margin-top:40px;
  }
  & .posts-keyword-box{
    margin-top:20px;
    & .posts-keywords{
      transition: 0.3s all;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    & .posts-keywords:hover{
      background: ${lighten(0.07, "#f58320")};
    }
  }
  & .posts-keywords{
    background: #f58320;
    color:white;
    display: inline-block;
    padding:4px 12px;
    border-radius: 15px;
    letter-spacing: 1.2px;
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

export const EntryContainerComp = styled.div<IEntryContainerComp>`
  width:${props => props.width + "px"};
  position:relative;
  margin:0 auto;
`;

export const SideBarComp = styled.section`
  display: inline-block;
  height: 100vh;
  position: fixed;
  width:320px; 
  & .sidebar-icons-box{
    font-size:1.7rem;
    display: flex;
    margin-top:60px;
    cursor: pointer;
    & .icon-github,.icon-tohome,.icon-mail{
      display: inline-block;
      margin-right:18px;
    }
  }
  & .sidebar-copyright{
    position: absolute;
    bottom:20%;
    letter-spacing: 1.1px;
    font-size:12px;
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
  //& .sidebar-divider{
  //  width:2px;
  //  position: absolute;
  //  left:95%;
  //  top:0;
  //  height: 600px;
  //  background: linear-gradient(rgb(230, 230, 230)0px, rgb(230, 230, 230)48%, rgb(255, 255, 255));
  //}
`;


export const SideBarThunmbNailComp = styled.div<ISideBarThunmbNailComp>`
  border:1px solid rgba(0,0,0,0.06);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  width:35%;
  padding-bottom: 35%;
  border-radius: 5px;
  margin-top:60px;
`;

export const SideBarMetaDataComp = styled.div`
  margin-top:50px;
  & .sidebar-names{
    font-size:2rem;
    letter-spacing: 1.2px;
  }
  & .sidebar-posi{
    letter-spacing: 1.2px;
    font-size:1rem;
    font-weight: 300;
    &.posi1{
      margin-top:30px;
    }
    &.posi2{
      margin-top:6px;
    }
  }
`;

export const SideBarPostsContainerComp = (styled.ul`
  margin-top:50px;
  perspective: 600px;
`);

export const SideBarPostsItemComp = styled(NavLink)<any>`
  height: 16px;
  display:block;
  margin-bottom:10px;
  transition: all 0.6s;
  & span{
    vertical-align: middle;
    font-size:1.1rem;
    font-weight: 300;
    opacity:1;
    &:hover{
      text-decoration: underline;
    }
  }
  &[aria-current] {
    color: black;
    & span{
      opacity: 1;
      font-weight: 300;
    }
  }

`;

export const EntryPostsContainerComp = styled.div<Width>`
  ${postsContainerMxin}
`;

export const EntryPostsItemComp = styled.div`
  ${postsItemMixin}'
`;

export const SpecificTopicContainerComp = styled.ul`
  ${postsContainerMxin};
`;
export const SpecificTopicItemsComp = styled(NavLink)`
  ${postsItemMixin}'
`;

export const PostsContainerComp = styled.section<Width>`
  position: relative;
  margin: 0 auto;
  width: ${(props) => props.width - 80 + "px"};
  padding-bottom: 80px;
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
  }
  & .posts-name{
    padding-top:50px;
    font-size:3.5rem;
    text-align: center;
    font-weight: bold;
  }
  & .posts-detail{
    text-align: center;
    margin-top:20px;
    font-size:1.2rem
  }
  & .posts-content{
    word-break:break-all;
    font-size:1.125rem;
    margin-top:50px;    
    & *{
      white-space: pre-wrap !important;
      word-break: break-all;
      line-height: 2;
    }
  }
  & .posts-created{
    margin-top: 60px;
    text-align: right;
    font-size:1rem;
    font-weight:100;
  }
`;
// & .posts-content{
//    word-break:break-all;
//    line-height: 1.5;
//    padding: 10px 10px;
//    border-radius: 5px;
// & img{
//       height:auto;
//       width:auto;
//       max-height: 500px;
//       position: relative;
//       margin :0 auto;
//    }
// }

export const TopCommonSectionComp = (styled.div<topView>`
   position: relative;
   margin: 0 auto;
   width: ${(props) => props.width + "px"};
   height: 280px;
   max-width: ${(props) => props.width + "px"};
   background-image: url(${props => props.logo});
   background-repeat:no-repeat ;
   background-size: contain;
   background-position: 50% 40%;
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
   @media (max-width: 1024px) {
      width:768px;
   }
   @media(max-width:768px){
      width:100%;
   }
`);


//
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
    border-radius: 5px;
    background-color: ${lighten(0.1, "#a5d8ff")};
   }
`;

//--------------------------------write---------------------------------------
