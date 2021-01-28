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
exports.AboutContainerComp = exports.TemporaryPostComp = exports.TemporaryStorageComp = exports.PostsDetailComp = exports.SelectKindOfPosts = exports.SelectKindOfPostsBoxComp = exports.CreateNewTopicListItemComp = exports.AddTopicBtnComp = exports.DeleteTopicIconComp = exports.CreateNewTopicListBoxComp = exports.CreateNewTopicComp = exports.SelectTopicItemComp = exports.SelectTopicBoxComp = exports.WriteBtnComp = exports.WriteBtnBoxComp = exports.WriteConditionBox = exports.WriteBox = exports.TagsContainerComp = exports.AdminLoginBoxComp = exports.PostsContainerComp = exports.SpecificTopicItemsComp = exports.EntryPostsItemComp = exports.SpecificTopicContainerComp = exports.EntryPostsContainerComp = exports.SideBarPostsItemComp = exports.SideBarPostsContainerComp = exports.SideBarMetaDataComp = exports.SideBarThunmbNailComp = exports.SideBarComp = exports.TopMetaBarComp = exports.EntryContainerComp = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var polished_1 = require("polished");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Media_1 = require("./styles/Media");
//INTERFACE
//위의 인터페이스는 컴포넌트가 가지는 PROPS의 인터ㅔ이스
var leftWidth = 330;
var _width = typeof window === "object" ? window.screen.width * 0.57 : 1000;
exports.EntryContainerComp = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width:", ";\n  position:relative;\n  margin:0 auto;\n  ", "\n\n"], ["\n  width:", ";\n  position:relative;\n  margin:0 auto;\n  ", "\n\n"])), _width + "px", Media_1.media.desktop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["width:95%"], ["width:95%"]))));
var postsContainerMixin = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  margin-top:50px;\n  padding-left:", "; \n  width:100%;\n  position: absolute;\n  top:0;\n  & .sidebar-copyright{\n   text-align: right;\n   letter-spacing: 1.1px;\n   font-size:12px;\n   margin-top:80px;\n   margin-bottom: 20px;\n  }\n"], ["\n  ",
    ";\n  margin-top:50px;\n  padding-left:", "; \n  width:100%;\n  position: absolute;\n  top:0;\n  & .sidebar-copyright{\n   text-align: right;\n   letter-spacing: 1.1px;\n   font-size:12px;\n   margin-top:80px;\n   margin-bottom: 20px;\n  }\n"])), Media_1.media.mobile(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n   position:relative;\n   padding-left:10px;\n   padding-rigth:10px;\n  "], ["\n   position:relative;\n   padding-left:10px;\n   padding-rigth:10px;\n  "]))), leftWidth + "px");
var postsItemMixin = styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["  \n  position:relative;\n  margin-bottom:60px;\n  word-break:break-all;\n  & .item-created{  \n    display: inline-block;\n    font-size:1rem;\n    font-weight: 600;\n    opacity: 0.8;\n    ", ";\n    & .topic_link{\n      margin-left:6px;\n      color:#7DC5AF;\n    }\n    & .post_is_new{\n      display: inline-block; \n      font-weight: 600;\n      margin-left:6px;\n      color: #ff6666;\n    }\n  }\n  & .item-contentName{\n    overflow-wrap: break-word;\n    font-size:2rem;\n    line-height: 2.5rem;\n    margin-top:6px;\n    letter-spacing: 2px;\n    font-weight: 450;\n    ", ";\n    & span{\n      &:hover{\n        text-decoration:none; \n        border-bottom:1px solid black;\n         padding-bottom:1.4px\n      }\n    }\n    //white-space:nowrap;\n    //overflow: hidden;\n    //text-overflow: ellipsis;\n    //\uC704\uC5D0\uB294 ...\uD45C\uC2DC\uD558\uB294 \uBC29\uBC95\n    padding:6px 0;\n  }\n  & .item-detail{\n    font-size:1.2rem;\n    margin-top:14px;\n    font-weight: 400;\n    white-space:nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    ", "\n  }\n  & .posts-admin-box{\n    position: absolute;\n    right:0;\n    bottom:0;\n    z-index: 9;\n    span{\n      vertical-align: middle;\n      font-size:1.6rem;\n      opacity: 0.6;\n      margin-left:12px;\n      transition: 0.3s all;\n    }\n    span:hover{\n      opacity: 1;\n      cursor: pointer;\n    }   \n  }\n \n"], ["  \n  position:relative;\n  margin-bottom:60px;\n  word-break:break-all;\n  & .item-created{  \n    display: inline-block;\n    font-size:1rem;\n    font-weight: 600;\n    opacity: 0.8;\n    ", ";\n    & .topic_link{\n      margin-left:6px;\n      color:#7DC5AF;\n    }\n    & .post_is_new{\n      display: inline-block; \n      font-weight: 600;\n      margin-left:6px;\n      color: #ff6666;\n    }\n  }\n  & .item-contentName{\n    overflow-wrap: break-word;\n    font-size:2rem;\n    line-height: 2.5rem;\n    margin-top:6px;\n    letter-spacing: 2px;\n    font-weight: 450;\n    ",
    ";\n    & span{\n      &:hover{\n        text-decoration:none; \n        border-bottom:1px solid black;\n         padding-bottom:1.4px\n      }\n    }\n    //white-space:nowrap;\n    //overflow: hidden;\n    //text-overflow: ellipsis;\n    //\uC704\uC5D0\uB294 ...\uD45C\uC2DC\uD558\uB294 \uBC29\uBC95\n    padding:6px 0;\n  }\n  & .item-detail{\n    font-size:1.2rem;\n    margin-top:14px;\n    font-weight: 400;\n    white-space:nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    ", "\n  }\n  & .posts-admin-box{\n    position: absolute;\n    right:0;\n    bottom:0;\n    z-index: 9;\n    span{\n      vertical-align: middle;\n      font-size:1.6rem;\n      opacity: 0.6;\n      margin-left:12px;\n      transition: 0.3s all;\n    }\n    span:hover{\n      opacity: 1;\n      cursor: pointer;\n    }   \n  }\n \n"])), Media_1.media.tablet(templateObject_5 || (templateObject_5 = __makeTemplateObject(["font-size:0.8rem"], ["font-size:0.8rem"]))), Media_1.media.tablet(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      font-size:2rem;\n      margin-top:-4px\n    "], ["\n      font-size:2rem;\n      margin-top:-4px\n    "]))), Media_1.media.tablet(templateObject_7 || (templateObject_7 = __makeTemplateObject(["font-size:0.8rem"], ["font-size:0.8rem"]))));
var rotate = styled_components_1.keyframes(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  100%{\n    transform: rotate(360deg);\n  }\n"], ["\n  100%{\n    transform: rotate(360deg);\n  }\n"])));
exports.TopMetaBarComp = styled_components_1.default.section(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  position: fixed;\n  top:0;\n  width:", ";\n  z-index: 999;\n  height: 62px;\n  background:white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ", ";\n  ", ";\n  & .topmetabar-list{\n    display: flex;\n    & .metaItem{  \n      padding:5px 2px;\n      margin-right: 40px;\n      font-size:1.5rem;\n      opacity: 0.6;\n      font-weight: 500;\n      letter-spacing: 1.4px;      \n      ", ";\n      ", "\n      & .tmb-icon{\n        font-size: 1.3rem;\n        ", ";\n        ", "\n      }\n     &:hover{\n      opacity: 1;       \n     }\n    }\n    & .metaActive{\n      opacity: 1;\n      border-bottom:2.5px solid black;  \n      ", "    \n    }\n  }\n  & .topmetabar-count{\n    ", ";\n    ", ";\n    height: 100%;\n    display: flex;\n    align-items: center;\n    & div {\n      margin-left:12px;\n      font-weight: 100;\n      font-size:12px;\n      display: flex;\n      align-items: center;\n       & .topmetabar-countAll,.topmetabar-today{\n         margin-left:6px;\n         display: flex;\n       }\n       & .count-loading-icon{\n         animation: ", " infinite linear 5s;\n      }\n    }\n  }\n  //& .topmetabar-icons-box{\n  // position: relative;\n  // font-size:1.65rem;\n  // display: flex;\n  // align-items: center;\n  // & .icon-github,.icon-tohome,.icon-mail{\n  //   cursor: pointer;\n  //   opacity: 0.8;\n  //   display: inline-block;\n  //   margin-left:24px;\n  //   transition:0.3s all;\n  //  }\n  //}\n  //& .icon-github:hover,.icon-tohome:hover,.icon-mail:hover{\n  //  opacity: 1;\n  //}\n"], ["\n  position: fixed;\n  top:0;\n  width:", ";\n  z-index: 999;\n  height: 62px;\n  background:white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ",
    ";\n  ",
    ";\n  & .topmetabar-list{\n    display: flex;\n    & .metaItem{  \n      padding:5px 2px;\n      margin-right: 40px;\n      font-size:1.5rem;\n      opacity: 0.6;\n      font-weight: 500;\n      letter-spacing: 1.4px;      \n      ",
    ";\n      ",
    "\n      & .tmb-icon{\n        font-size: 1.3rem;\n        ",
    ";\n        ",
    "\n      }\n     &:hover{\n      opacity: 1;       \n     }\n    }\n    & .metaActive{\n      opacity: 1;\n      border-bottom:2.5px solid black;  \n      ",
    "    \n    }\n  }\n  & .topmetabar-count{\n    ",
    ";\n    ",
    ";\n    height: 100%;\n    display: flex;\n    align-items: center;\n    & div {\n      margin-left:12px;\n      font-weight: 100;\n      font-size:12px;\n      display: flex;\n      align-items: center;\n       & .topmetabar-countAll,.topmetabar-today{\n         margin-left:6px;\n         display: flex;\n       }\n       & .count-loading-icon{\n         animation: ", " infinite linear 5s;\n      }\n    }\n  }\n  //& .topmetabar-icons-box{\n  // position: relative;\n  // font-size:1.65rem;\n  // display: flex;\n  // align-items: center;\n  // & .icon-github,.icon-tohome,.icon-mail{\n  //   cursor: pointer;\n  //   opacity: 0.8;\n  //   display: inline-block;\n  //   margin-left:24px;\n  //   transition:0.3s all;\n  //  }\n  //}\n  //& .icon-github:hover,.icon-tohome:hover,.icon-mail:hover{\n  //  opacity: 1;\n  //}\n"])), _width + "px", Media_1.media.tablet(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n   width:95%;\n  "], ["\n   width:95%;\n  "]))), Media_1.media.desktop(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n   width:95%;\n  "], ["\n   width:95%;\n  "]))), Media_1.media.tablet(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n        font-size:1.2rem;\n      "], ["\n        font-size:1.2rem;\n      "]))), Media_1.media.small(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n        font-size:0.8rem;\n      "], ["\n        font-size:0.8rem;\n      "]))), Media_1.media.mobile(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n         display:none;\n        "], ["\n         display:none;\n        "]))), Media_1.media.small(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n         display:none;\n        "], ["\n         display:none;\n        "]))), Media_1.media.small(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n        border-bottom:1.5px solid black;\n      "], ["\n        border-bottom:1.5px solid black;\n      "]))), Media_1.media.desktop(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n     right:5%;\n    "], ["\n     right:5%;\n    "]))), Media_1.media.mobile(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      display:none;\n    "], ["\n      display:none;\n    "]))), rotate);
exports.SideBarComp = styled_components_1.default.section(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  display: inline-block;\n  width: ", ";\n  ", ";\n  position : fixed;\n  z-index: 9;\n  margin-top:50px;\n  //border:1px solid black;\n  & .sidebar-item-list{\n    font-weight: 300;\n    margin-top: 40px;\n    & li{\n      margin-bottom:25px;\n      font-size:1.125rem;\n      padding-bottom: 3.4px;\n      &:hover{\n        text-decoration: underline;\n        text-underline-position: under;\n      }\n    }\n    & .active{\n      //text-decoration: underline;\n      //text-underline-position: under;\n      color:#7DC5AF;\n    }\n  }\n  & .write-article-btn {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    display: inline-block;\n    padding: 7px 20px;\n    border-radius: 10px;\n    font-size: 14px;\n    font-weight: 100;\n    transition: all 0.2s;\n    margin-top:20px;\n   }\n  & .write-article-btn:hover {\n    cursor: pointer;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  }\n  & .ga-count{\n    display: flex;\n    flex-direction: column;\n    margin-top:62px;\n    padding:4px;\n    font-size:0.9rem; \n    span{\n      margin-right:10px;\n    }\n    div{\n      font-weight: 300;\n      display: flex;\n      margin-right:6px;\n      align-items: center;    \n      margin-bottom:7px;  \n      & .count-num{\n        font-weight:100;\n        //color:#7DC5AF;\n      }\n    }\n    & .loading-icon{\n      animation: ", " infinite linear 3s;\n      font-size:0.8rem;\n      margin-right:10px;\n    }\n  }\n"], ["\n  display: inline-block;\n  width: ", ";\n  ", ";\n  position : fixed;\n  z-index: 9;\n  margin-top:50px;\n  //border:1px solid black;\n  & .sidebar-item-list{\n    font-weight: 300;\n    margin-top: 40px;\n    & li{\n      margin-bottom:25px;\n      font-size:1.125rem;\n      padding-bottom: 3.4px;\n      &:hover{\n        text-decoration: underline;\n        text-underline-position: under;\n      }\n    }\n    & .active{\n      //text-decoration: underline;\n      //text-underline-position: under;\n      color:#7DC5AF;\n    }\n  }\n  & .write-article-btn {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    display: inline-block;\n    padding: 7px 20px;\n    border-radius: 10px;\n    font-size: 14px;\n    font-weight: 100;\n    transition: all 0.2s;\n    margin-top:20px;\n   }\n  & .write-article-btn:hover {\n    cursor: pointer;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  }\n  & .ga-count{\n    display: flex;\n    flex-direction: column;\n    margin-top:62px;\n    padding:4px;\n    font-size:0.9rem; \n    span{\n      margin-right:10px;\n    }\n    div{\n      font-weight: 300;\n      display: flex;\n      margin-right:6px;\n      align-items: center;    \n      margin-bottom:7px;  \n      & .count-num{\n        font-weight:100;\n        //color:#7DC5AF;\n      }\n    }\n    & .loading-icon{\n      animation: ", " infinite linear 3s;\n      font-size:0.8rem;\n      margin-right:10px;\n    }\n  }\n"])), leftWidth + "px", Media_1.media.mobile(templateObject_20 || (templateObject_20 = __makeTemplateObject(["display:none"], ["display:none"]))), rotate);
exports.SideBarThunmbNailComp = styled_components_1.default.img(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  border:1px solid rgba(0,0,0,0.06);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  position: relative;\n  width:96px;\n  height: 96px;\n  border-radius: 5px;\n"], ["\n  border:1px solid rgba(0,0,0,0.06);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  position: relative;\n  width:96px;\n  height: 96px;\n  border-radius: 5px;\n"])));
exports.SideBarMetaDataComp = styled_components_1.default.div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  margin-top:34px;\n  & .sidebar-names{\n    font-size:1.4em;\n    letter-spacing: 0.8px;\n    font-weight: 500;\n  }\n  & .sidebar-posi{\n    font-size:1.1rem;\n    font-weight: 300;\n    margin-top:24px;\n    opacity: 0.7;\n  }\n"], ["\n  margin-top:34px;\n  & .sidebar-names{\n    font-size:1.4em;\n    letter-spacing: 0.8px;\n    font-weight: 500;\n  }\n  & .sidebar-posi{\n    font-size:1.1rem;\n    font-weight: 300;\n    margin-top:24px;\n    opacity: 0.7;\n  }\n"])));
exports.SideBarPostsContainerComp = (styled_components_1.default.ul(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  margin-top:70px;\n  & .sidebar-list{\n    font-size:1.1rem;\n    margin-bottom:15px;\n    padding-bottom:10px;\n    border-bottom: 1px solid black;\n    letter-spacing: 1.2px;\n    font-weight: 500;\n  }\n"], ["\n  margin-top:70px;\n  & .sidebar-list{\n    font-size:1.1rem;\n    margin-bottom:15px;\n    padding-bottom:10px;\n    border-bottom: 1px solid black;\n    letter-spacing: 1.2px;\n    font-weight: 500;\n  }\n"]))));
exports.SideBarPostsItemComp = styled_components_1.default(react_router_dom_1.NavLink)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  height: 16px;\n  display:block;\n  margin-bottom:6px;\n  transition: all 0.6s;\n  vertical-align: middle;\n  & div{\n    vertical-align: middle;\n    font-size:1.1rem;\n    font-weight: 300;\n    opacity:1;\n    display: flex;\n    & .topic_list_items:hover{\n      text-decoration: underline;\n    }\n  }\n  & .topic_length{\n    display: inline-block;\n    font-size:1rem;\n    margin-left:5px;\n  }\n  & .topic_is_new{\n    color: #ff6666;\n    font-size:11px;\n    display: inline-block;\n    margin-left: 10px;\n    margin-top:1px;\n    z-index: 9;\n    &:hover{\n      font-weight: 600;\n    }\n  }\n  &[aria-current] {\n    color: black;\n    & .topic_list_items{\n      opacity: 1;\n      font-weight: 500;\n      color:#3a7dff\n    }\n  }\n\n"], ["\n  height: 16px;\n  display:block;\n  margin-bottom:6px;\n  transition: all 0.6s;\n  vertical-align: middle;\n  & div{\n    vertical-align: middle;\n    font-size:1.1rem;\n    font-weight: 300;\n    opacity:1;\n    display: flex;\n    & .topic_list_items:hover{\n      text-decoration: underline;\n    }\n  }\n  & .topic_length{\n    display: inline-block;\n    font-size:1rem;\n    margin-left:5px;\n  }\n  & .topic_is_new{\n    color: #ff6666;\n    font-size:11px;\n    display: inline-block;\n    margin-left: 10px;\n    margin-top:1px;\n    z-index: 9;\n    &:hover{\n      font-weight: 600;\n    }\n  }\n  &[aria-current] {\n    color: black;\n    & .topic_list_items{\n      opacity: 1;\n      font-weight: 500;\n      color:#3a7dff\n    }\n  }\n\n"])));
exports.EntryPostsContainerComp = styled_components_1.default.div(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), postsContainerMixin);
exports.SpecificTopicContainerComp = styled_components_1.default.div(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), postsContainerMixin);
exports.EntryPostsItemComp = styled_components_1.default.div(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  ", "'\n"], ["\n  ", "'\n"])), postsItemMixin);
exports.SpecificTopicItemsComp = styled_components_1.default.div(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  ", "'\n"], ["\n  ", "'\n"])), postsItemMixin);
exports.PostsContainerComp = styled_components_1.default.section(templateObject_41 || (templateObject_41 = __makeTemplateObject(["\n  width: ", ";\n  ", ";\n  ", ";\n  ", "; \n  position: relative;\n  margin: 0 auto;\n  padding-bottom: 80px;\n  background: white;\n  tab-size: 1;\n  & .posts-container-iconbox{\n    padding:20px 20px;\n    font-size:1.5rem;\n  }\n  & img{\n    height:auto;\n    width:auto;\n    max-height: 700px;\n    position: relative;\n    margin :0 auto;\n    ", ";\n    ", ";\n    ", ";\n  }\n  & .posts-name{\n    ", ";\n    padding-top:50px;\n    font-size:3.5rem;\n    text-align: center;\n    font-weight: bold;\n  }\n  & .posts-detail{\n    text-align: center;\n    margin-top:20px;\n    font-size:1.2rem\n  }\n  & .posts-content{\n    word-break:break-all;\n    font-size:1.2rem;\n    margin-top:50px;   \n    ", ";\n    ", ";\n    & *{\n      white-space: pre-wrap;\n      word-break: break-all;\n      line-height: 2.1;\n    } \n    & p br{\n      display: block;\n      content: \"\";\n      padding:10px 0px;\n    }\n    blockquote{\n      padding:10px 20px;\n      border-left:5px solid #f58320;\n      background: rgb(248 249 250);\n      ", ";\n      ", ";\n    }\n    p,ol,blockquote,span{\n      color:black\n    }\n  }\n  & .posts-created{\n    margin-top: 60px;\n    text-align: right;\n    font-size:1rem;\n    font-weight:100;\n  }\n"], ["\n  width: ", ";\n  ",
    ";\n  ",
    ";\n  ",
    "; \n  position: relative;\n  margin: 0 auto;\n  padding-bottom: 80px;\n  background: white;\n  tab-size: 1;\n  & .posts-container-iconbox{\n    padding:20px 20px;\n    font-size:1.5rem;\n  }\n  & img{\n    height:auto;\n    width:auto;\n    max-height: 700px;\n    position: relative;\n    margin :0 auto;\n    ", ";\n    ", ";\n    ", ";\n  }\n  & .posts-name{\n    ", ";\n    padding-top:50px;\n    font-size:3.5rem;\n    text-align: center;\n    font-weight: bold;\n  }\n  & .posts-detail{\n    text-align: center;\n    margin-top:20px;\n    font-size:1.2rem\n  }\n  & .posts-content{\n    word-break:break-all;\n    font-size:1.2rem;\n    margin-top:50px;   \n    ", ";\n    ", ";\n    & *{\n      white-space: pre-wrap;\n      word-break: break-all;\n      line-height: 2.1;\n    } \n    & p br{\n      display: block;\n      content: \"\";\n      padding:10px 0px;\n    }\n    blockquote{\n      padding:10px 20px;\n      border-left:5px solid #f58320;\n      background: rgb(248 249 250);\n      ", ";\n      ", ";\n    }\n    p,ol,blockquote,span{\n      color:black\n    }\n  }\n  & .posts-created{\n    margin-top: 60px;\n    text-align: right;\n    font-size:1rem;\n    font-weight:100;\n  }\n"])), _width + "px", Media_1.media.desktop(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n    width:90%;\n  "], ["\n    width:90%;\n  "]))), Media_1.media.tablet(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n    width:90%;\n  "], ["\n    width:90%;\n  "]))), Media_1.media.mobile(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n    width:85%;\n  "], ["\n    width:85%;\n  "]))), Media_1.media.desktop(templateObject_33 || (templateObject_33 = __makeTemplateObject(["max-width:100%"], ["max-width:100%"]))), Media_1.media.tablet(templateObject_34 || (templateObject_34 = __makeTemplateObject(["max-width:100%"], ["max-width:100%"]))), Media_1.media.mobile(templateObject_35 || (templateObject_35 = __makeTemplateObject(["max-width:100%"], ["max-width:100%"]))), Media_1.media.mobile(templateObject_36 || (templateObject_36 = __makeTemplateObject(["font-size:2rem"], ["font-size:2rem"]))), Media_1.media.tablet(templateObject_37 || (templateObject_37 = __makeTemplateObject(["font-size:1rem !important"], ["font-size:1rem !important"]))), Media_1.media.mobile(templateObject_38 || (templateObject_38 = __makeTemplateObject(["font-size:0.7rem !important"], ["font-size:0.7rem !important"]))), Media_1.media.tablet(templateObject_39 || (templateObject_39 = __makeTemplateObject(["font-size:1rem !important"], ["font-size:1rem !important"]))), Media_1.media.mobile(templateObject_40 || (templateObject_40 = __makeTemplateObject(["font-size:0.8rem !important"], ["font-size:0.8rem !important"]))));
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
//
exports.AdminLoginBoxComp = styled_components_1.default.div(templateObject_42 || (templateObject_42 = __makeTemplateObject(["\n  position: absolute;\n  width:30%;\n  left:50%;\n  top:40%;\n  transform: translate(-50%,-50%);\n  & .login-inputbox{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    & input{\n      padding:15px 10px;\n      outline-style: none;\n      border:1px solid rgba(0,0,0,0.2);\n      margin-bottom: 20px;\n    }\n  }\n  & .login-btn{\n    border:1px solid rgb(0,0,0,0.2);\n    width:100%;\n    height: 57px;\n    outline-style: none;\n    cursor: pointer;\n  }\n  & .certification-numberBox{ \n    display: flex;\n    button{\n      border:1px solid rgba(0,0,0,0.2);\n      outline-style: none;\n      height: 40px;\n      font-size: 12px;\n      letter-spacing: 1.2px;\n      cursor: pointer ;\n    }\n    input{\n      height: 40px;  \n      outline-style: none;\n      border:1px solid rgba(0,0,0,0.2);\n      margin-bottom: 20px;\n      margin-right: 15px;\n      font-size: 1rem;\n      padding-left: 10px;\n    }\n  }\n"], ["\n  position: absolute;\n  width:30%;\n  left:50%;\n  top:40%;\n  transform: translate(-50%,-50%);\n  & .login-inputbox{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    & input{\n      padding:15px 10px;\n      outline-style: none;\n      border:1px solid rgba(0,0,0,0.2);\n      margin-bottom: 20px;\n    }\n  }\n  & .login-btn{\n    border:1px solid rgb(0,0,0,0.2);\n    width:100%;\n    height: 57px;\n    outline-style: none;\n    cursor: pointer;\n  }\n  & .certification-numberBox{ \n    display: flex;\n    button{\n      border:1px solid rgba(0,0,0,0.2);\n      outline-style: none;\n      height: 40px;\n      font-size: 12px;\n      letter-spacing: 1.2px;\n      cursor: pointer ;\n    }\n    input{\n      height: 40px;  \n      outline-style: none;\n      border:1px solid rgba(0,0,0,0.2);\n      margin-bottom: 20px;\n      margin-right: 15px;\n      font-size: 1rem;\n      padding-left: 10px;\n    }\n  }\n"])));
exports.TagsContainerComp = styled_components_1.default.div(templateObject_44 || (templateObject_44 = __makeTemplateObject(["\n   ", ";\n   margin-top:50px;\n   padding-left:", "; \n   width:100%;\n   position: absolute;\n   top:0;\n   & .tag-slo{\n    font-size:2.3675rem;\n    margin-bottom: 70px;\n   }\n   & .tags-box{\n    display: flex;\n    flex-direction: column;\n   }\n   & .tag-hash{\n    margin-bottom: 7px;\n    font-weight: 400;\n    color:#7DC5AF;;\n    font-size:1.135rem;\n    display: inline-flex;\n    align-items: center;\n    padding:2px;\n    &:hover{\n      cursor:pointer;\n      color:#ff6b6b;\n    }\n   }\n"], ["\n   ",
    ";\n   margin-top:50px;\n   padding-left:", "; \n   width:100%;\n   position: absolute;\n   top:0;\n   & .tag-slo{\n    font-size:2.3675rem;\n    margin-bottom: 70px;\n   }\n   & .tags-box{\n    display: flex;\n    flex-direction: column;\n   }\n   & .tag-hash{\n    margin-bottom: 7px;\n    font-weight: 400;\n    color:#7DC5AF;;\n    font-size:1.135rem;\n    display: inline-flex;\n    align-items: center;\n    padding:2px;\n    &:hover{\n      cursor:pointer;\n      color:#ff6b6b;\n    }\n   }\n"])), Media_1.media.mobile(templateObject_43 || (templateObject_43 = __makeTemplateObject(["\n      position:relative;\n      padding-left:10px;\n      padding-rigth:10px;\n    "], ["\n      position:relative;\n      padding-left:10px;\n      padding-rigth:10px;\n    "]))), leftWidth + "px");
//--------------------------------write---------------------------------------
exports.WriteBox = (styled_components_1.default.div(templateObject_45 || (templateObject_45 = __makeTemplateObject(["\n   position: absolute;\n   border: 1px solid rgba(0, 0, 0, 0.2);\n   height: 100%;\n   width: 50%;\n   border-radius: 4px;\n   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n   overflow: scroll;\n"], ["\n   position: absolute;\n   border: 1px solid rgba(0, 0, 0, 0.2);\n   height: 100%;\n   width: 50%;\n   border-radius: 4px;\n   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n   overflow: scroll;\n"]))));
exports.WriteConditionBox = react_1.memo(styled_components_1.default.section(templateObject_46 || (templateObject_46 = __makeTemplateObject(["\n   position: absolute;\n   right: 0;\n   width: 50%;\n   height: 100%;\n   overflow: scroll;\n"], ["\n   position: absolute;\n   right: 0;\n   width: 50%;\n   height: 100%;\n   overflow: scroll;\n"]))));
exports.WriteBtnBoxComp = (styled_components_1.default.div(templateObject_47 || (templateObject_47 = __makeTemplateObject(["\n   padding-left:60px;\n   margin-top:30px;\n   margin-bottom: 20px;\n"], ["\n   padding-left:60px;\n   margin-top:30px;\n   margin-bottom: 20px;\n"]))));
exports.WriteBtnComp = styled_components_1.default.button(templateObject_48 || (templateObject_48 = __makeTemplateObject(["\n   border: 1px solid rgba(0, 0, 0, 0.2);\n   padding: 15px 25px;\n   font-size: 17px;\n   border-radius: 4px;\n   letter-spacing: 1.2px;\n   transition: 0.3s all;\n   background: #a5d8ff;\n   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n   color: black;\n   font-weight: 300;\n   margin-right: 30px;\n   &:hover {\n      cursor: pointer;\n      background-color: ", ";\n   }\n   \n"], ["\n   border: 1px solid rgba(0, 0, 0, 0.2);\n   padding: 15px 25px;\n   font-size: 17px;\n   border-radius: 4px;\n   letter-spacing: 1.2px;\n   transition: 0.3s all;\n   background: #a5d8ff;\n   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n   color: black;\n   font-weight: 300;\n   margin-right: 30px;\n   &:hover {\n      cursor: pointer;\n      background-color: ", ";\n   }\n   \n"])), polished_1.darken(0.1, "#a5d8ff"));
exports.SelectTopicBoxComp = styled_components_1.default.div(templateObject_49 || (templateObject_49 = __makeTemplateObject(["\n   padding-top:50px;\n   padding-left:60px;\n   padding-right: 60px;\n   & .post-select-box{\n   display: flex;\n   flex-wrap: wrap;\n   }\n   & h1{\n   font-size:1.7rem;\n   margin-bottom:40px;\n   }\n"], ["\n   padding-top:50px;\n   padding-left:60px;\n   padding-right: 60px;\n   & .post-select-box{\n   display: flex;\n   flex-wrap: wrap;\n   }\n   & h1{\n   font-size:1.7rem;\n   margin-bottom:40px;\n   }\n"])));
exports.SelectTopicItemComp = styled_components_1.default.div(templateObject_50 || (templateObject_50 = __makeTemplateObject(["\n  width:150px;\n  margin-bottom: 40px;\n  padding:0;\n  display: flex;\n  align-items: center;\n  & .select-input{\n    display: inline-block; \n    width:20px;\n    height: 20px;\n    margin-right: 15px;\n  }\n  & .select-label{\n    font-weight: 300;\n    margin-top: -1px;\n    font-size:120%;\n    cursor: pointer;\n  }\n"], ["\n  width:150px;\n  margin-bottom: 40px;\n  padding:0;\n  display: flex;\n  align-items: center;\n  & .select-input{\n    display: inline-block; \n    width:20px;\n    height: 20px;\n    margin-right: 15px;\n  }\n  & .select-label{\n    font-weight: 300;\n    margin-top: -1px;\n    font-size:120%;\n    cursor: pointer;\n  }\n"])));
exports.CreateNewTopicComp = styled_components_1.default.div(templateObject_51 || (templateObject_51 = __makeTemplateObject(["\n   padding-top:20px;\n   padding-left:60px;\n   padding-right: 60px;\n   & h1{\n    font-size:20px;\n    margin-bottom: 20px;\n   }\n   & .add-new-topic-btn{\n    color: #dee2e6;\n    font-size:30px;\n    cursor: pointer;\n    margin-top: 10px;\n   }\n   & .add-new-topic-btn:hover{\n    color: gray;\n   } \n"], ["\n   padding-top:20px;\n   padding-left:60px;\n   padding-right: 60px;\n   & h1{\n    font-size:20px;\n    margin-bottom: 20px;\n   }\n   & .add-new-topic-btn{\n    color: #dee2e6;\n    font-size:30px;\n    cursor: pointer;\n    margin-top: 10px;\n   }\n   & .add-new-topic-btn:hover{\n    color: gray;\n   } \n"])));
exports.CreateNewTopicListBoxComp = styled_components_1.default.div(templateObject_52 || (templateObject_52 = __makeTemplateObject(["\n  width:180px;\n"], ["\n  width:180px;\n"])));
exports.DeleteTopicIconComp = styled_components_1.default.div(templateObject_53 || (templateObject_53 = __makeTemplateObject(["\n  display: flex;\n  font-size:20px;\n  cursor: pointer;\n  opacity: 0;\n  color: #dee2e6;\n  & :hover{\n    color:#ff6b6b;\n  }\n"], ["\n  display: flex;\n  font-size:20px;\n  cursor: pointer;\n  opacity: 0;\n  color: #dee2e6;\n  & :hover{\n    color:#ff6b6b;\n  }\n"])));
exports.AddTopicBtnComp = styled_components_1.default.div(templateObject_54 || (templateObject_54 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  & input{\n    padding:8px;\n    border:1px solid rgba(0,0,0.6);\n  }\n  & .make-new-topic-btn{\n    color: #dee2e6;\n    font-size:30px;\n    cursor: pointer;\n    margin-left: 15px;\n  }\n  & .make-new-topic-btn:hover{\n    color: gray;\n  } \n"], ["\n  display: flex;\n  align-items: center;\n  & input{\n    padding:8px;\n    border:1px solid rgba(0,0,0.6);\n  }\n  & .make-new-topic-btn{\n    color: #dee2e6;\n    font-size:30px;\n    cursor: pointer;\n    margin-left: 15px;\n  }\n  & .make-new-topic-btn:hover{\n    color: gray;\n  } \n"])));
exports.CreateNewTopicListItemComp = styled_components_1.default.div(templateObject_55 || (templateObject_55 = __makeTemplateObject(["\n  margin-bottom:15px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  & span{\n    display: inline-block;\n    width:70%;\n    font-size:22px;\n    font-weight: 100;\n  }\n  &:hover{\n    ", "{\n      opacity: 1;\n    }\n  }\n"], ["\n  margin-bottom:15px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  & span{\n    display: inline-block;\n    width:70%;\n    font-size:22px;\n    font-weight: 100;\n  }\n  &:hover{\n    ", "{\n      opacity: 1;\n    }\n  }\n"])), exports.DeleteTopicIconComp);
exports.SelectKindOfPostsBoxComp = styled_components_1.default.div(templateObject_56 || (templateObject_56 = __makeTemplateObject(["\n   padding-top:50px;\n   padding-left:60px;\n   padding-right: 60px;\n   & .post-select-box{\n   display: flex;\n   flex-wrap: wrap;\n   }\n   & h1{\n   font-size:1.7rem;\n   margin-bottom:40px;\n   }\n"], ["\n   padding-top:50px;\n   padding-left:60px;\n   padding-right: 60px;\n   & .post-select-box{\n   display: flex;\n   flex-wrap: wrap;\n   }\n   & h1{\n   font-size:1.7rem;\n   margin-bottom:40px;\n   }\n"])));
exports.SelectKindOfPosts = styled_components_1.default.div(templateObject_57 || (templateObject_57 = __makeTemplateObject(["\n  width:150px;\n  margin-bottom: 40px;\n  padding:0;\n  display: flex;\n  align-items: center;\n  & .select-input{\n    display: inline-block; \n    width:20px;\n    height: 20px;\n    margin-right: 15px;\n  }\n  & .select-label{\n    font-weight: 300;\n    margin-top: -1px;\n    font-size:120%;\n    cursor: pointer;\n  }\n"], ["\n  width:150px;\n  margin-bottom: 40px;\n  padding:0;\n  display: flex;\n  align-items: center;\n  & .select-input{\n    display: inline-block; \n    width:20px;\n    height: 20px;\n    margin-right: 15px;\n  }\n  & .select-label{\n    font-weight: 300;\n    margin-top: -1px;\n    font-size:120%;\n    cursor: pointer;\n  }\n"])));
exports.PostsDetailComp = styled_components_1.default.div(templateObject_58 || (templateObject_58 = __makeTemplateObject(["\n   padding-top:50px;\n   padding-left:60px;\n   padding-right: 60px;\n   & h1{\n    font-size:1.7rem;\n    margin-bottom: 30px;\n   }\n   & input{\n    width:100%;\n    height: 50px;\n    outline-style: none;\n    border:none;\n    padding-left: 10px;\n    border-radius: 5px;\n    background-color: ", ";\n   }\n"], ["\n   padding-top:50px;\n   padding-left:60px;\n   padding-right: 60px;\n   & h1{\n    font-size:1.7rem;\n    margin-bottom: 30px;\n   }\n   & input{\n    width:100%;\n    height: 50px;\n    outline-style: none;\n    border:none;\n    padding-left: 10px;\n    border-radius: 5px;\n    background-color: ", ";\n   }\n"])), polished_1.lighten(0.1, "#a5d8ff"));
exports.TemporaryStorageComp = styled_components_1.default.div(templateObject_59 || (templateObject_59 = __makeTemplateObject(["\n  padding-left:60px;\n  margin-top:50px;\n  margin-bottom:40px;\n  & .tsc-slo{\n    font-size:1.7rem;\n  }\n  & .temp_item{\n    display: flex;\n    justify-content: space-between;\n    padding-right: 60px;\n    align-items: center;\n    margin-top:20px;\n    & .posts-admin-delete{\n      font-size:1.4rem;\n      display: inline-block;\n      padding-top:5px;\n      &:hover{\n        cursor: pointer;\n      }\n    }\n  }\n"], ["\n  padding-left:60px;\n  margin-top:50px;\n  margin-bottom:40px;\n  & .tsc-slo{\n    font-size:1.7rem;\n  }\n  & .temp_item{\n    display: flex;\n    justify-content: space-between;\n    padding-right: 60px;\n    align-items: center;\n    margin-top:20px;\n    & .posts-admin-delete{\n      font-size:1.4rem;\n      display: inline-block;\n      padding-top:5px;\n      &:hover{\n        cursor: pointer;\n      }\n    }\n  }\n"])));
exports.TemporaryPostComp = styled_components_1.default.div(templateObject_60 || (templateObject_60 = __makeTemplateObject(["\n  cursor:pointer;\n  font-size:1.4rem;\n  &:hover{\n    text-decoration: underline;\n  }\n"], ["\n  cursor:pointer;\n  font-size:1.4rem;\n  &:hover{\n    text-decoration: underline;\n  }\n"])));
//--------------------------------write---------------------------------------
exports.AboutContainerComp = styled_components_1.default.div(templateObject_61 || (templateObject_61 = __makeTemplateObject(["\n  position: relative;\n  width:", ";\n  padding-top:100px;\n"], ["\n  position: relative;\n  width:", ";\n  padding-top:100px;\n"])), function (props) { return props.width + "px"; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61;