import React from "react";
import { SideBarComp, SideBarMetaDataComp, SideBarThunmbNailComp } from "../../styled-comp";
import { Link, NavLink } from "react-router-dom";
import { IAllPost } from "../../modules/Posts/posts.interface";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ISideBarNavContainer {
   topic: IAllPost
   login: boolean
   location: any
   count: any
}


function SideBarNavContainer({ topic, login, location, count }: ISideBarNavContainer) {
   return (
      <SideBarComp>
         <SideBarThunmbNailComp src="/images/og.jpg" />
         <SideBarMetaDataComp>
            <div className="sidebar-names"><Link to="/">junggri</Link></div>
            <div className="sidebar-posi posi1">deep work!</div>
         </SideBarMetaDataComp>
         <ul className="sidebar-item-list">
            <li><NavLink to="/post" className={location.pathname === "/" ? "active" : "post"}>post</NavLink></li>
            <li><NavLink to="/tag">tags</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            {/*<li><NavLink to="/portfolio">포트폴리오</NavLink></li>*/}
         </ul>
         <div className="ga-count">
            <div>
               <span>전체 방문자</span>
               {count !== null
                  ? <span className="count-num">{count.data.totalsForAllResults["ga:users"]}</span>
                  : <AiOutlineLoading3Quarters className="loading-icon" />}
            </div>
            <div>
               <span>오늘의 방문자</span>
               {count !== null
                  ? <span className="count-num">{count.data.rows[count.data.rows.length - 1][1]}</span>
                  : <AiOutlineLoading3Quarters className="loading-icon" />}
            </div>
         </div>
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