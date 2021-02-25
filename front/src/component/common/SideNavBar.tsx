import React, { RefObject, useMemo } from "react";
import { SideBarComp } from "../../styledComponent";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { NavLink } from "react-router-dom";

interface ISideNavBar {
   data: IPostCommonProps[] | null
}

interface Ref extends HTMLElement {
   current: any | null
   type: any
   value: any
}


const SideNavBar = ({ data }: ISideNavBar) => {
   const listRef: RefObject<Ref>[] | undefined = useMemo(() => data?.map(() => React.createRef()), [data]);
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

   if (listRef === undefined) return null;
   return (
      <SideBarComp>
         <header>
            <h1>tags</h1>
         </header>
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
      </SideBarComp>
   );
};
export default React.memo(SideNavBar);