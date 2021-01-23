import React from "react";
import { TopMetaBarComp } from "../../styled-comp";
import { NavLink } from "react-router-dom";

// import { isMobile } from "react-device-detect";

function TopMetaBar({ match, count }: { match: any, count: any }) {
   console.log(count);
   return (
      <TopMetaBarComp>
         <section className="topmetabar-list">
            <NavLink to="/"
                     className="metaItem"
                     exact={match.path === "/"}
                     activeClassName="metaActive">
               <span className='tmb-icon'>🖥 </span>
               <span>blog</span>
            </NavLink>
            <NavLink to="/about"
                     className="metaItem"
                     exact={match.path === "/about"}
                     activeClassName="metaActive">
               <span className='tmb-icon'>🙋‍♂️ </span>
               <span>about me</span>
            </NavLink>
         </section>
         <section className="topmetabar-count">
            <div>
               <span>전체</span>
               <span className="topmetabar-countAll">
                  {count !== null
                     ? <span>{count.data.totalsForAllResults["ga:users"]}</span>
                     : <span>로딩</span>}
               </span>
            </div>
            <div>|</div>
            <div>
               <span>오늘의 방문자</span>
               <span className="topmetabar-today">
                  {count !== null
                     ? <span>{count.data.rows[count.data.rows.length - 1][1]}</span>
                     : <span>로딩</span>}
               </span>
            </div>
         </section>

         {/*<div className="topmetabar-icons-box">*/}
         {/*   <GoMarkGithub className="icon-github" onClick={() => {*/}
         {/*      window.open("https://github.com/junggri", "_blank");*/}
         {/*   }} />*/}
         {/*   <HiOutlineMail className="icon-mail" onClick={() => {*/}
         {/*      window.location.href = "mailto:jjuu6933@naver.com";*/}
         {/*   }} />*/}
         {/*   <Link to="/">*/}
         {/*      <CgHome className="icon-tohome" />*/}
         {/*   </Link>*/}
         {/*</div>*/}
      </TopMetaBarComp>
   );
}

export default React.memo(TopMetaBar);