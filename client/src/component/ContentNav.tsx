import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ContentBoxComp, ContentItemsComp, ContentNavComp } from "../styled-comp";

interface Props {
   list: string[];
   height: number;
}

const ContentNav = ({ list, height }: Props) => {
   const [fixed, setFixed] = useState(false);
   const [pageY, setPageY] = useState(0);
   const ContentBox: any = useRef();

   useEffect(() => {
      const setNavLoaction = () => {
         setPageY(window.pageYOffset);
         pageY >= height ? setFixed(true) : setFixed(false);
      };

      const onScroll = (e: Event) => {
         setNavLoaction();
      };

      const Reload = () => {
         setNavLoaction();
      };

      Reload();

      window.addEventListener("scroll", onScroll);

      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, [pageY, height]);

   return (
      <ContentNavComp className={`${fixed ? "fixed" : ""}`} ref={ContentBox}>
         <ContentBoxComp>
            {list.map((e: any, i) => {
               return (
                  <Link to={`/content/${e.Tables_in_contents}`} key={i}>
                     <ContentItemsComp>{e.Tables_in_contents}</ContentItemsComp>
                  </Link>
               );
            })}
         </ContentBoxComp>
      </ContentNavComp>
   );
};

export default ContentNav;
