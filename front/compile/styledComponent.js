"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostItemComp = exports.PostContainerComp = exports.SideBarComp = exports.MainContainerComp = exports.SearchBoxComp = exports.NavBarComp = exports.NavBarContainer = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var leftWidth = 330;
var tabletLeftWidth = 200;
var _width = 1200;
var rotate = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100%{\n    transform: rotate(360deg);\n  }\n"], ["\n  100%{\n    transform: rotate(360deg);\n  }\n"])));
var mediaMixin = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (max-width: 369px) {\n    //369\uC774\uD558\uC77C\uB54C \uC801\uC6A9\uB418\uB294 \uAC83\uB4E4\n    width: 92%;\n  }\n  @media (min-width: 369px) {\n    //369\uC774\uC0C1\uC77C\uB584 \uC801\uC6A9\uB418\uB294 \uAC83\uB4E4\n    width: 95%;\n  }\n  @media (min-width: 1025px) {\n    width: 98%;\n  }\n  @media(min-width:1099px){\n    width:1100px\n  }\n"], ["\n  @media (max-width: 369px) {\n    //369\uC774\uD558\uC77C\uB54C \uC801\uC6A9\uB418\uB294 \uAC83\uB4E4\n    width: 92%;\n  }\n  @media (min-width: 369px) {\n    //369\uC774\uC0C1\uC77C\uB584 \uC801\uC6A9\uB418\uB294 \uAC83\uB4E4\n    width: 95%;\n  }\n  @media (min-width: 1025px) {\n    width: 98%;\n  }\n  @media(min-width:1099px){\n    width:1100px\n  }\n"])));
var postMediaMixin = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  @media (max-width: 369px) {\n    width: 92%;\n  }\n  @media (min-width: 369px) {\n    width: 92%;\n  }\n  @media (min-width: 768px) {\n    width: 92%;\n  }\n  @media (min-width: 1024px) {\n    width: 92%;\n  }\n  @media (min-width: 1025px) {\n    width: 800px;\n  }\n"], ["\n  @media (max-width: 369px) {\n    width: 92%;\n  }\n  @media (min-width: 369px) {\n    width: 92%;\n  }\n  @media (min-width: 768px) {\n    width: 92%;\n  }\n  @media (min-width: 1024px) {\n    width: 92%;\n  }\n  @media (min-width: 1025px) {\n    width: 800px;\n  }\n"])));
// export const EntryContainerComp = styled.div`
//   position: relative;
//   margin: 0 auto;
//   border: 1px solid black;
//   ${mediaMixin}
//   `;
exports.NavBarContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width:100%;\n"], ["\n  width:100%;\n"])));
exports.NavBarComp = styled_components_1.default.section(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  z-index: 9;\n  display: flex;\n  position: fixed;\n  left:50%;\n  transform: translate(-50%,0);  \n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  & .navbar-logo {\n    height: 40px;\n    width: 100px;\n  }\n  nav > ul {\n    display: flex;\n  }\n  li {\n    margin: 0 10px;\n    opacity: 0.5;\n    font-weight: 400;\n    font-size: 0.86rem;\n    transition: 0.2s all;\n    &:hover {\n      color: #ff6666;\n      cursor: pointer;\n    }\n  }\n  & .navbar-icons-box {\n    width: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    & .navbar-icon{\n      height: 100%;\n      font-size:1.9rem;\n      opacity: 0.6;\n      &:hover{\n        cursor:pointer;\n        opacity: 1\n      }\n    }\n  }\n  & .active {\n    color: #ff6666;\n  }\n"], ["\n  z-index: 9;\n  display: flex;\n  position: fixed;\n  left:50%;\n  transform: translate(-50%,0);  \n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  & .navbar-logo {\n    height: 40px;\n    width: 100px;\n  }\n  nav > ul {\n    display: flex;\n  }\n  li {\n    margin: 0 10px;\n    opacity: 0.5;\n    font-weight: 400;\n    font-size: 0.86rem;\n    transition: 0.2s all;\n    &:hover {\n      color: #ff6666;\n      cursor: pointer;\n    }\n  }\n  & .navbar-icons-box {\n    width: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    & .navbar-icon{\n      height: 100%;\n      font-size:1.9rem;\n      opacity: 0.6;\n      &:hover{\n        cursor:pointer;\n        opacity: 1\n      }\n    }\n  }\n  & .active {\n    color: #ff6666;\n  }\n"])), mediaMixin);
exports.SearchBoxComp = styled_components_1.default.section(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border:1px solid black;\n  position: absolute;\n  width:100%;\n  height:200px;\n  background: black;\n  z-index: 10;\n  transform: translateY(-200px);\n  transition: 0.6s all ease-in-out;\n  & .search-box-cancel-icon{\n    font-size:2rem;\n    position: absolute;\n    right:10%;\n    bottom:10%;\n    color:white;\n    cursor: pointer;\n  }\n  input{\n    position:absolute;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%);\n    width:30%;\n    padding:20px;\n    outline-style: none;\n    color:white;\n    font-size:2rem;\n    border:1px solid white;\n    &::placeholder{\n      font-size:2rem;\n      color:white;\n      caret-color:white;\n    }\n  }\n"], ["\n  border:1px solid black;\n  position: absolute;\n  width:100%;\n  height:200px;\n  background: black;\n  z-index: 10;\n  transform: translateY(-200px);\n  transition: 0.6s all ease-in-out;\n  & .search-box-cancel-icon{\n    font-size:2rem;\n    position: absolute;\n    right:10%;\n    bottom:10%;\n    color:white;\n    cursor: pointer;\n  }\n  input{\n    position:absolute;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%);\n    width:30%;\n    padding:20px;\n    outline-style: none;\n    color:white;\n    font-size:2rem;\n    border:1px solid white;\n    &::placeholder{\n      font-size:2rem;\n      color:white;\n      caret-color:white;\n    }\n  }\n"])));
exports.MainContainerComp = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n  margin: 0 auto;\n  padding-top: 130px;\n  width:780px;\n"], ["\n  position: relative;\n  margin: 0 auto;\n  padding-top: 130px;\n  width:780px;\n"])));
exports.SideBarComp = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width:20%;\n  position: absolute;\n  left:-24%;\n  header{\n    padding-bottom: 10px;\n    border-bottom:1px solid rgba(0,0,0,0.4);\n    h1{\n      font-size:1.125rem;\n      font-weight: 500;\n    }\n  }\n  ul{\n    margin-top:10px;\n    li{\n      \n    }\n  }\n  .active{\n    color: #ff6666;\n  }\n"], ["\n  width:20%;\n  position: absolute;\n  left:-24%;\n  header{\n    padding-bottom: 10px;\n    border-bottom:1px solid rgba(0,0,0,0.4);\n    h1{\n      font-size:1.125rem;\n      font-weight: 500;\n    }\n  }\n  ul{\n    margin-top:10px;\n    li{\n      \n    }\n  }\n  .active{\n    color: #ff6666;\n  }\n"])));
exports.PostContainerComp = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  flex-grow:1\n"], ["\n  flex-grow:1\n"])));
exports.PostItemComp = styled_components_1.default.article(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-bottom:70px;\n  border-bottom:1px solid rgba(0,0,0,0.2);\n  padding-bottom: 35px;\n  width: 100%;\n  header{\n    margin-bottom:10px;\n    h1{\n      font-size:2rem;\n      margin-top:20px;\n      transition:0.2s all;\n      &:hover{\n        cursor:pointer;\n        color: #ff6666;\n      }\n    }\n    h2{\n      font-size:1.1rem;\n      opacity: 0.8;\n      margin-top:7px;\n    }\n  }\n  & .post-img{\n    position: relative;\n    width:100%;\n    padding-bottom:47.8%;\n    border:1px solid black;\n    img{\n      position: absolute;\n      top:0;\n      left:0;\n      width:100%;\n      height:100%;\n    }\n  }\n  footer{\n    margin-top:22px;\n    span{\n      margin-right:7px;\n      font-size:0.95rem;\n      opacity:0.9;\n      cursor: pointer;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n"], ["\n  margin-bottom:70px;\n  border-bottom:1px solid rgba(0,0,0,0.2);\n  padding-bottom: 35px;\n  width: 100%;\n  header{\n    margin-bottom:10px;\n    h1{\n      font-size:2rem;\n      margin-top:20px;\n      transition:0.2s all;\n      &:hover{\n        cursor:pointer;\n        color: #ff6666;\n      }\n    }\n    h2{\n      font-size:1.1rem;\n      opacity: 0.8;\n      margin-top:7px;\n    }\n  }\n  & .post-img{\n    position: relative;\n    width:100%;\n    padding-bottom:47.8%;\n    border:1px solid black;\n    img{\n      position: absolute;\n      top:0;\n      left:0;\n      width:100%;\n      height:100%;\n    }\n  }\n  footer{\n    margin-top:22px;\n    span{\n      margin-right:7px;\n      font-size:0.95rem;\n      opacity:0.9;\n      cursor: pointer;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
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
