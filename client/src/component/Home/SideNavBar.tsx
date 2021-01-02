import React from "react";
import { SideBarComp, SideBarMetaDataComp, SideBarThunmbNailComp } from "../../styled-comp";
import { Link } from "react-router-dom";
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
         {login &&
         <Link to="/write">
            <span className="write-article-btn">새 글 쓰기</span>
         </Link>
         }
         <div className="sidebar-divider" />
      </SideBarComp>
   );
}

export default React.memo(SideBarNavContainer);