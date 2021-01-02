import React from "react";
import { TopMetaBarComp } from "../../styled-comp";
import { NavLink } from "react-router-dom";


function TopMetaBar({ width, match }: { width: number, match: any }) {
   return (
      <TopMetaBarComp width={width}>
         <section className="topmetabar-list">
            <NavLink to="/" className="metaItem" exact={match.path === "/about"} activeClassName="metaActive">🖥 blog</NavLink>
            <NavLink to="/about" className="metaItem" exact={match.path === "/about"} activeClassName="metaActive">🙋‍♂️ about me</NavLink>
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

export default TopMetaBar;