import React, { useEffect, useState } from "react";
import { TopMetaBarComp } from "../../styled-comp";
import { NavLink } from "react-router-dom";
import { BiLoaderCircle } from "react-icons/bi";
import util from "../../lib/axios";

// import { isMobile } from "react-device-detect";

function TopMetaBar({ width, match }: { width: number, match: any }) {
   const [count, setCount] = useState<any>(null);

   useEffect(() => {
      (async () => {
         const { data } = await util.getGACount();
         console.log(data);
      })();
   }, []);

   return (
      <TopMetaBarComp width={width}>
         <section className="topmetabar-list">
            <NavLink to="/"
                     className="metaItem"
                     exact={match.path === "/about"}
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
                  : <BiLoaderCircle className="count-loading-icon" />
                  {/*{ture*/}
                  {/*   ? <span></span>*/}
                  {/*   : <BiLoaderCircle className="count-loading-icon" />}*/}
               </span>
            </div>
            <div>|</div>
            <div>
               <span>오늘의 방문자</span>
               <span className="topmetabar-today">
                  : <BiLoaderCircle className="count-loading-icon" />
                  {/*{*/}
                  {/*   ? <span></span>*/}
                  {/*   : <BiLoaderCircle className="count-loading-icon" />}*/}
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