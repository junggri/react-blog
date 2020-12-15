import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentItemsComp, ContentNavComp } from "../../styled-comp";

interface IContentNavProps {
   list: string[];
   height: number;

}

function ContentNav({ list, height }: IContentNavProps) {
   const [fixed, setFixed] = useState(false);

   const onScroll = () => {
      window.pageYOffset >= height ? setFixed(true) : setFixed(false);
   };


   useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, []);


   return (
      <ContentNavComp className={`${fixed ? "fixed" : ""}`}>
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
