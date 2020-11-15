import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const width = window.innerWidth;
console.log(width);
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
        height:600px;
    }
    .ql-container.ql-snow{
        border:none;
    } 
`;

export default GlobalStyles;
