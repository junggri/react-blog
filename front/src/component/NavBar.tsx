import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavBarComp } from "../styledComponent";

const NavBar = () => {
   return (
      <NavBarComp>
         <Link to="/">
            <img src="/images/nameLogo.svg" alt="" className="navbar-logo" />
         </Link>
         <nav>
            <ul>
               <li><NavLink to="/about">ABOUT</NavLink></li>
               <li><NavLink to="/post">POST</NavLink></li>
               <li><NavLink to="/bookk">BOOK</NavLink></li>
            </ul>
         </nav>
         <div className="navbar-icons"></div>
      </NavBarComp>
   );
};
export default NavBar;