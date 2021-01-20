import React from "react";
import { SideBarPostsContainerComp, SideBarPostsItemComp } from "../../styled-comp";

interface ISideBarNavContainer {
   topic: any
}


function SideNavBarTopic({ topic }: ISideBarNavContainer) {
   // const date1 = new Date(topic.data.dd[0].date);
   // const now = new Date();
   // console.log(date1.getDate(), now.getDate());

   const onMakeIsNewPost = (date: string) => {
      const date_diff = ((new Date() as any) - (new Date(date) as any)) / (24 * 3600 * 1000);
      return Math.floor(date_diff) <= 2;
   };

   return (
      <SideBarPostsContainerComp>
         <div className="sidebar-list">
            <span>전체목록</span>
            <span>({Object.values(topic.data).flat().length})</span>
         </div>
         {Object.keys(topic.data).map((e: string, i: number) => (
            <SideBarPostsItemComp to={`/topic/${e}`} key={e}>
               <div>
                  <span className="topic_list_items">{e}</span>
                  <span className="topic_length">({topic.data[e].length})</span>
                  {(onMakeIsNewPost(topic.data[e][0].date)) && <span className="topic_is_new">new</span>}
               </div>
            </SideBarPostsItemComp>
         ))}
      </SideBarPostsContainerComp>
   );
}

export default React.memo(SideNavBarTopic);