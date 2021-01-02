import React from "react";
import { SideBarPostsContainerComp, SideBarPostsItemComp } from "../../styled-comp";

interface ISideBarNavContainer {
   topic: any[]
}


function SideNavBarTopic({ topic }: ISideBarNavContainer) {
   return (
      <SideBarPostsContainerComp>
         <div className="sidebar-list">전체 목록()</div>
         {topic.map(e => (
            <SideBarPostsItemComp to={`/topic/${e.Tables_in_contents}`} key={e.Tables_in_contents}>
               <span>
                  {e.Tables_in_contents}
               </span>
            </SideBarPostsItemComp>
         ))}
      </SideBarPostsContainerComp>
   );
}

export default React.memo(SideNavBarTopic);