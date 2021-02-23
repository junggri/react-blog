import styled, { css, keyframes } from "styled-components";

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
  padding-top: 130px;
  width:780px;
`;

export const SideBarComp = styled.div`
  width:20%;
  position: absolute;
  left:-24%;
  header{
    padding-bottom: 10px;
    border-bottom:1px solid rgba(0,0,0,0.4);
    h1{
      font-size:1.125rem;
      font-weight: 500;
    }
  }
  ul{
    margin-top:10px;
    li{
      
    }
  }
  .active{
    color: #ff6666;
  }
`;

export const PostContainerComp = styled.div`
  flex-grow:1
`;

export const PostItemComp = styled.article`
  margin-bottom:70px;
  border-bottom:1px solid rgba(0,0,0,0.2);
  padding-bottom: 35px;
  width: 100%;
  header{
    margin-bottom:10px;
    h1{
      font-size:2rem;
      margin-top:20px;
      transition:0.2s all;
      &:hover{
        cursor:pointer;
        color: #ff6666;
      }
    }
    h2{
      font-size:1.1rem;
      opacity: 0.8;
      margin-top:7px;
    }
  }
  & .post-img{
    position: relative;
    width:100%;
    padding-bottom:47.8%;
    border:1px solid black;
    img{
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
  }
  footer{
    margin-top:22px;
    span{
      margin-right:7px;
      font-size:0.95rem;
      opacity:0.9;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
`;
// export const PostItemComp = styled.div`
//   flex-grow: 1;
//   border: 1px solid black;
//
//   & .post-meta {
//     margin-bottom: 4px;
//     font-weight: 400;
//     opacity: 0.6;
//   }
//   & .post-img {
//     position: relative;
//     width: 80%;
//     padding-bottom: 42%;
//     border: 1px solid black;
//     margin-bottom: 25px;
//     img {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//     }
//   }
//   header {
//     h1 {
//       font-size: 2.2rem;
//       font-weight: 500;
//     }
//     h2 {
//       font-size: 1.2rem;
//       margin-top: 5px;
//     }
//   }
//   footer {
//     margin-top: 10px;
//     span {
//       margin-right: 10px;
//       opacity: 0.8;
//       cursor: pointer;
//       &:hover {
//         text-decoration: underline;
//       }
//     }
//   }
// `;
