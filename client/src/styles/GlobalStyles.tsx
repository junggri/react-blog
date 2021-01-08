import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
        height: ${window.innerHeight - 100 + "px"};
    }
    .quill img{
        height: auto;
        width:auto;
        max-height: 700px;
        position: relative;
        margin :0 auto;
    }
    .ql-container.ql-snow{
        border:none; 
    } 
    .ql-size-huge{
        font-size:4rem !important;
    }
    .content-title{
        width:100%;
        height:100px;
        resize:none;
        border:none;
        outline-style:none;
        padding:25px;
        font-size:3rem;
    }
    .writeBox-inputs{
        border:1px solid black;
        width:50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
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
    .ql-container.ql-snow{
        height:90%
    }
    .ql-editor .ql-syntax{
        background: rgb(248 249 250) !important;
    }
    .ql-syntax{
     font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
     padding:30px 30px; 
     border-radius: 4px;
     font-size: 0.9rem;
     background: rgb(248 249 250);
     font-weight: 300 !important;
     white-space: pre-wrap !important;
     & span{
        font-weight:300 !important;
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
`;

export default GlobalStyles;