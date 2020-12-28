import React from "react";
import { SideBarComp, SideBarMetaDataComp, SideBarThunmbNailComp } from "../../styled-comp";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { CgHome } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../image/Logo.svg";
import { SideNavBarTopic } from "../index";

interface ISideBarNavContainer {
   topic: any[]
   login: boolean
}

const backGround = {
   backgroundImage: `url(${logo})`,
   backgroundSize: "contain",
   backgroundPosition: "50% 50%",
   backgroundRepeat: "no-repeat",
};

function SideBarNavContainer({ topic, login }: ISideBarNavContainer) {

   return (
      <SideBarComp>
         <SideBarThunmbNailComp style={backGround} />
         <SideBarMetaDataComp>
            <div className="sidebar-names">junggri</div>
            <div className="sidebar-posi posi1">backend engineer</div>
            <div className="sidebar-posi posi2">frontend engineer</div>
         </SideBarMetaDataComp>
         <SideNavBarTopic topic={topic} />
         <div className="sidebar-icons-box">
            <GoMarkGithub className="icon-github" onClick={() => {
               window.open("https://github.com/junggri", "_blank");
            }} />
            <Link to="/">
               <CgHome className="icon-tohome" />
            </Link>
            <HiOutlineMail className="icon-mail" onClick={() => {
               window.location.href = "mailto:jjuu6933@naver.com";
            }} />
         </div>
         {login &&
         <Link to="/write">
            <span className="write-article-btn">새 글 쓰기</span>
         </Link>
         }
         <div className="sidebar-copyright">Copyright 2021. junggri All rights reserved.</div>
         <div className="sidebar-divider" />
      </SideBarComp>
   );
}

export default React.memo(SideBarNavContainer);