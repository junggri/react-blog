import React from "react";
import { TopNavBarComp } from "../styled-comp";

const TopNavBar = () => {
  return (
    <TopNavBarComp>
      <div className="tnb-logo">logo</div>
      <div className="tnb-rightBox">
        <span>깃헙</span>
        <span>홈</span>
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </TopNavBarComp>
  );
};

export default TopNavBar;
