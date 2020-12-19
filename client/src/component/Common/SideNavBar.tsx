import React from "react";
import { SideBarComp, SideBarMetaDataComp, SideBarPostsContainerComp, SideBarPostsItemComp, SideBarThunmbNailComp } from "../../styled-comp";

interface ISideBarNavContainer {
   topic: any[]
}

function SideBarNavContainer({ topic }: ISideBarNavContainer) {

   return (
      <SideBarComp>
         <SideBarThunmbNailComp />
         <SideBarMetaDataComp>
            <div className="sidebar-names">junggri</div>
            <div className="sidebar-posi posi1">backend engineer</div>
            <div className="sidebar-posi posi2">frontend engineer</div>
         </SideBarMetaDataComp>
         <SideBarPostsContainerComp>
            {topic.map((e: any) => (
               <SideBarPostsItemComp to={`/topic/${e.Tables_in_contents}`} key={e.Tables_in_contents}>
                  <div>
                     {e.Tables_in_contents}
                  </div>
               </SideBarPostsItemComp>
            ))}
         </SideBarPostsContainerComp>
         <div className="sidebar-copyright">Copyright 2020. junggri All rights reserved.</div>
      </SideBarComp>
   );
}

export default SideBarNavContainer;