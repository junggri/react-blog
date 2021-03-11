import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavBarComp, NavBarContainer, SearchBoxComp } from "@src/styledComponent";
import { BiUpArrowAlt } from "react-icons/bi";
import _ from "lodash";

const NavBar = () => {
   const ref = useRef<HTMLDivElement>(null);
   const logoRef = useRef<HTMLImageElement>(null);
   const icons = useRef<HTMLDivElement>(null);
   const input = useRef<HTMLInputElement>(null);
   const [value, setValue] = useState<string>("");

   useEffect(() => {
      window.addEventListener("scroll", _.throttle(onScrollThrottle, 100));
   }, []);

   const onClickSearchBtn = (e: React.MouseEvent): void => {
      if (ref.current) {
         ref.current.style.transform = "translateY(0px)";
         ref.current.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
      }
      if (input.current) input.current.focus();
   };

   const onClickCancelBtn = (): void => {
      if (ref.current) {
         ref.current.style.transform = "translateY(-200px)";
         ref.current.style.boxShadow = "none";
      }
   };

   const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
         console.log(2);
      }
   };

   const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
   };


   const onScrollThrottle = (e: Event) => {
      if (window.pageYOffset > 0 && ref.current && logoRef.current) {
         ref.current.style.background = "#333333";
         logoRef.current.src = "/images/LogoBlack.svg";
      } else if (window.pageYOffset === 0 && ref.current && logoRef.current) {
         ref.current.style.background = "white";
         logoRef.current.src = "/images/Logo.svg";
      }
   };


   return (
      <NavBarContainer ref={ref}>
         <SearchBoxComp>
            <input
               type="text"
               name="search_value"
               placeholder="검색어를 입력해주세요."
               value={value}
               ref={input}
               onChange={onChangeValue}
               onKeyUp={onKeyUp}
            />
            <BiUpArrowAlt className="search-box-cancel-icon" onClick={onClickCancelBtn} />
         </SearchBoxComp>
         <NavBarComp>
            <Link to="/">
               <div className="navbar-logo">
                  <img src="/images/Logo.svg" alt="" ref={logoRef} />
               </div>
            </Link>
            {/*<nav>*/}
            {/*<ul>*/}
            {/*   <li>*/}
            {/*      <NavLink to="/about">ABOUT</NavLink>*/}
            {/*   </li>*/}
            {/*<li>*/}
            {/*   <NavLink to="/post">POST</NavLink>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*   <NavLink to="/bookk">BOOK</NavLink>*/}
            {/*</li>*/}
            {/*</ul>*/}
            {/*</nav>*/}
            <div className="navbar-icons-box" ref={icons} onClick={onClickSearchBtn}>
               {/*<GrFormSearch className="navbar-icon" />*/}
            </div>
         </NavBarComp>
      </NavBarContainer>
   );
};
export default React.memo(NavBar);
