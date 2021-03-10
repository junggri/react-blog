import React, { RefObject, useMemo, useRef, useState } from "react";
import { SideBarComp } from "../../styledComponent";
import { IPostCommonProps } from "@modules/Posts/posts.interface";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { ISideBarRefObject } from "@src/globalInterface";

interface ISideNavBar {
   data: IPostCommonProps[] | null
   count: any
}


const SideNavBar = ({ data, count }: ISideNavBar) => {
   const listRef: RefObject<ISideBarRefObject>[] | undefined = useMemo(() => data?.map(() => React.createRef()), [data]);
   const [click, setClick] = useState<boolean>(false);
   const mediaMenu = useRef<HTMLDivElement>(null);
   const headerIcon = useRef<HTMLSpanElement>(null);

   const set: Set<string> = new Set();
   data?.map((e, i) => set.add(e.topic));
   const topics: string[] = Array.from(set);

   const getPostCount = (topic: string): number => {
      let count: number = 0;
      data?.filter(e => {
         if (e.topic === topic) count += 1;
      });
      return count;
   };

   const onClickList = (ref: { current: any }) => {
      // ref.current.style.display = "none";

   };

   const clickMenuBar = (e: React.MouseEvent) => {
      if (mediaMenu.current && headerIcon.current && !click) {
         mediaMenu.current.style.height = "120px";
         headerIcon.current.style.transform = "rotateZ(180deg)";
         setClick(!click);
      } else if (mediaMenu.current && headerIcon.current && click) {
         mediaMenu.current.style.height = "0px";
         headerIcon.current.style.transform = "rotateZ(0deg)";
         setClick(!click);
      }
   };
   if (listRef === undefined) return null;
   return (
      <SideBarComp>
         <header>
            <span><GrAttachment className="header-icons" /></span>
            <Link to="/"><h1>전체 토픽</h1></Link>
            <span className="media-icons" onClick={clickMenuBar} ref={headerIcon}>
               <IoMdArrowDropdown />
            </span>
         </header>
         <div className="media-menu-bar" ref={mediaMenu}>
            {topics.map((e, i) => (
               <li key={e} ref={listRef[i]} onClick={() => onClickList(listRef[i])}>
                  <NavLink to={`/tag/${e}`}>
                     <span>{e}</span>
                     <span>({getPostCount(e)})</span>
                  </NavLink>
               </li>
            ))}
         </div>
         <ul>
            {topics.map((e, i) => (
               <li key={e} ref={listRef[i]} onClick={() => onClickList(listRef[i])}>
                  <NavLink to={`/tag/${e}`}>
                     <span>{e}</span>
                     <span>({getPostCount(e)})</span>
                  </NavLink>
               </li>
            ))}
         </ul>
         <ul>

         </ul>
         <div className="sidebar-meta-data">
            <div>
               <span className="count-slo">전체 방문자</span>
               {count !== null
                  ? <span className="count-num">{count.data.totalsForAllResults["ga:users"]}</span>
                  : <AiOutlineLoading3Quarters className="loading-icon" />}
            </div>
            <div>
               <span className="count-slo">오늘의 방문자</span>
               {count !== null
                  ? <span className="count-num">{count.data.rows[count.data.rows.length - 1][1]}</span>
                  : <AiOutlineLoading3Quarters className="loading-icon" />}
            </div>
         </div>
      </SideBarComp>
   );
};
export default React.memo(SideNavBar);