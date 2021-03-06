import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { media } from "./Media";

const GlobalStyles = createGlobalStyle`
 ${reset}
    *{
        box-sizing:border-box;
    }
    body,html{
        font-size:14px;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif !important;
        color:rgb(36, 41, 46);
        position:relative;
        height:100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: auto;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
    }
  
    b { 
        font-weight: bold !important; 
    }
    i { 
        font-style : italic;
    }
    .quill{
     position:relative;
     border-right:1px solid rgba(0,0,0,0.2);
     border-top:1px solid rgba(0,0,0,0.2);
     border-bottom:1px solid rgba(0,0,0,0.2);
     width:50%;
     height:100vh;
     display: inline-block;
    }
    .ql-container.ql-snow{
      height:93%;
      position: relative;
      border:none;
    }
    .ql-size-huge{
        font-size:4rem !important;
    }
    .react,.hljs,.stata{
       background: white !important;
    }
    .content-title::placeholder{
        font-size:3rem;
        font-style:italic
    }
    .preview-title{
        border:1px solid black;
        font-size:3rem;
        word-break:break-all;
        margin-bottom:100px;
    }
    .ql-editor .ql-syntax{
        background: rgb(248 249 250) !important;
    }
    .ql-syntax{
      font-family: "Fira Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
      padding:25px 25px; 
      letter-spacing: 0.2px;
      border-radius: 4px;
      font-size: 0.9rem;
      background: #FBFCFD;
      font-weight: 300 !important;
      white-space: pre-wrap;
      tab-size: 1 !important;
     & span{
        font-weight:300 !important;
        ${media.mobile`
         white-space: pre !important;
       `};
      }
    }
    .ql-snow .ql-editor pre.ql-syntax{
      color:black !important;
     }
    .ql-toolbar.ql-snow{
        border-left:none;
        border-right:none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }   
    .hljs-function{
      .hljs-params{
         //color:rgb(36, 41, 46);
      }
    }
    .ql-editor blockquote{
      padding:10px 20px;
      border-left:5px solid #f58320 !important;
      background: rgb(248 249 250);
    }
    .hljs-params,.hljs-attr{
      color:rgb(36, 41, 46) !important;
    }
    .ql-syntax .hljs-tag{
      color:black;
      & .hljs-name{
        color:#a626a4 !important;
      }
      & .hljs-attr{
        color: #4078f2 !important;
      } 
    }
    .ql-size-huge{
      font-size:3.5rem !important;
    }
    .ql-size-large{
      font-size: 2.3rem !important;
      ${media.mobile`font-size:1.5rem !important`};
    }
    .ql-size-small{
      font-size:1rem !important
    }
`;

export default GlobalStyles;