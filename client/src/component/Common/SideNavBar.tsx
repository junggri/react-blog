import React from "react";
import { SideBarComp, SideBarMetaDataComp, SideBarPostsContainerComp, SideBarPostsItemComp, SideBarThunmbNailComp } from "../../styled-comp";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { CgHome } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../image/Logo.svg";

interface ISideBarNavContainer {
   topic: any[]
}

const backGround = {
   backgroundImage: `url(${logo})`,
   backgroundSize: "contain",
   backgroundPosition: "50% 50%",
   backgroundRepeat: "no-repeat",
};

function SideBarNavContainer({ topic }: ISideBarNavContainer) {
   console.log(2);
   return (
      <SideBarComp>
         <SideBarThunmbNailComp style={backGround} />
         <SideBarMetaDataComp>
            <div className="sidebar-names">junggri</div>
            <div className="sidebar-posi posi1">backend engineer</div>
            <div className="sidebar-posi posi2">frontend engineer</div>
         </SideBarMetaDataComp>
         <SideBarPostsContainerComp>
            {topic.map((e: any) => (
               <SideBarPostsItemComp to={`/topic/${e.Tables_in_contents}`} key={e.Tables_in_contents}>
                  <div>
                     {e.Tables_in_contents}
                  </div>
               </SideBarPostsItemComp>
            ))}
         </SideBarPostsContainerComp>
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
         <Link to="/write">
            <span className="write-article-btn">새 글 쓰기</span>
         </Link>
         <div className="sidebar-copyright">Copyright 2020. junggri All rights reserved.</div>
         <div className="sidebar-divider" />
      </SideBarComp>
   );
}

export default React.memo(SideBarNavContainer);