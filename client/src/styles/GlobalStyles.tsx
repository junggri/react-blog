import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        background-color:#FFFFFF;
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
        height:700px;
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
    .ql-editor.ql-blank{
        height:100%;
    }
    .ql-container.ql-snow{
        height:90%
    }
    .ql-toolbar.ql-snow{
        border-left:none;
        border-right:none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }
    .write-btn-box{
        width:60%;
        margin:0 auto;
        margin-top:40px;
        display:flex;
        justify-content:flex-end
    }
`;

export default GlobalStyles;
