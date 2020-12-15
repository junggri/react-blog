import React, { MutableRefObject, useEffect, useRef } from "react";
import { TopCommonSectionComp } from "../../styled-comp";
import { TopNavBar } from "../index";
import { Link } from "react-router-dom";
import Logo from "../../image/Logo.svg";

interface ITopCommonSectionProps {
   width: number
   onGetHeight: (payload: HTMLDivElement) => void
}

function TopCommonSection({ width, onGetHeight }: ITopCommonSectionProps) {
   const height = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

   useEffect(() => {
      onGetHeight(height.current);
   }, [height.current]);


   return (
      <TopCommonSectionComp width={width} logo={Logo} ref={height}>
         <TopNavBar />
         <Link to="/write">
            <span className="write-article-btn">새 글 쓰기</span>
         </Link>
      </TopCommonSectionComp>
   );
};

export default React.memo(TopCommonSection);