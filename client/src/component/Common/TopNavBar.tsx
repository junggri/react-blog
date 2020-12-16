import React from "react";
import {Link} from "react-router-dom";
import {TopNavBarComp} from "../../styled-comp";

const TopNavBar = () => {
    return (
        <TopNavBarComp>
            <div className="tnb-logo">logo</div>
            <div className="tnb-rightBox">
        <span>
          <Link to="/github">Github</Link>
        </span>
                <span>
          <Link to="/">홈</Link>
        </span>
                <span>
          <Link to="/login">로그인</Link>
        </span>
                <span>
          <Link to="/register">회원가입</Link>
        </span>
            </div>
        </TopNavBarComp>
    );
};

export default TopNavBar;
