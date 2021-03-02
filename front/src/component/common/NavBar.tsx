import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavBarComp, NavBarContainer, SearchBoxComp } from "../../styledComponent";
import { GrFormSearch } from "react-icons/gr";
import { BiUpArrowAlt } from "react-icons/bi";
import { RiHome2Fill } from "react-icons/ri";

const NavBar = () => {
   const ref = useRef<HTMLDivElement>(null);
   const icons = useRef<HTMLDivElement>(null);
   const input = useRef<HTMLInputElement>(null);
   const [value, setValue] = useState<string>("");

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

   return (
      <NavBarContainer>
         <SearchBoxComp ref={ref}>
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
               <div className="navbar-logo"><RiHome2Fill className="logo-icons" /></div>
            </Link>
            <nav>
               <ul>
                  <li>
                     <NavLink to="/about">ABOUT</NavLink>
                  </li>
                  <li>
                     <NavLink to="/post">POST</NavLink>
                  </li>
                  <li>
                     <NavLink to="/bookk">BOOK</NavLink>
                  </li>
               </ul>
            </nav>
            <div className="navbar-icons-box" ref={icons} onClick={onClickSearchBtn}>
               <GrFormSearch className="navbar-icon" />
            </div>
         </NavBarComp>
      </NavBarContainer>
   );
};
export default React.memo(NavBar);
