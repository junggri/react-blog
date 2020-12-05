import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
 ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
        background-color:#F9F9FB;
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
    html,body{
        position:relative;
        height:100%;
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
        background-color:#F9F9FB;
    }
    .writeBox-inputs{
        border:1px solid black;
        width:50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
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
    .ql-toolbar.ql-snow{
        border-left:none;
        border-right:none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }
    .posts-name{
        font-size: 50px;
  
    }
    .posts-content{
        margin-top:40px;
    }
`;

export default GlobalStyles;
