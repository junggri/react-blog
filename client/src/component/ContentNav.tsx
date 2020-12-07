import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentItemsComp, ContentNavComp } from "../styled-comp";

interface Props {
   list: string[];
   height: number;
   onNavClick?: any
}


const ContentNav = ({ list, height, onNavClick }: Props) => {
   const [fixed, setFixed] = useState(false);
   const [pageY, setPageY] = useState(0);


   useEffect(() => {
      const setNavLoaction = () => {
         setPageY(window.pageYOffset);
         pageY >= height ? setFixed(true) : setFixed(false);
      };
      const onScroll = (e: Event) => {
         setNavLoaction();
      };
      (() => {
         setNavLoaction();
      })();
      window.addEventListener("scroll", onScroll);
      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, [pageY, height]);


   return (
      <ContentNavComp className={`${fixed ? "fixed" : ""}`} onClick={onNavClick}>
         {list.map((e: any, i) => {
            return (
               <Link to={`/content/${e.Tables_in_contents}`} key={i}>
                  <ContentItemsComp>{e.Tables_in_contents}</ContentItemsComp>
               </Link>
            );
         })}
      </ContentNavComp>
   );
};

export default React.memo(ContentNav);
