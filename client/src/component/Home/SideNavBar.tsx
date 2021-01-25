import React from "react";
import { SideBarComp, SideBarMetaDataComp, SideBarThunmbNailComp } from "../../styled-comp";
import { Link, NavLink } from "react-router-dom";
import { IAllPost } from "../../modules/Posts/posts.interface";


interface ISideBarNavContainer {
   topic: IAllPost
   login: boolean
   location: any
}


function SideBarNavContainer({ topic, login, location }: ISideBarNavContainer) {
   return (
      <SideBarComp>
         <SideBarThunmbNailComp src="/images/og.jpg" />
         <SideBarMetaDataComp>
            <div className="sidebar-names">junggri</div>
            <div className="sidebar-posi posi1">deep work!</div>
         </SideBarMetaDataComp>
         {/*<SideNavBarTopic topic={topic} />*/}
         <ul className="sidebar-item-list">
            <li><NavLink to="/post" className={location.pathname === "/" ? "active" : "post"}>post</NavLink></li>
            <li><NavLink to="/tag">tags</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
         </ul>
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