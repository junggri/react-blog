import React from "react";
import {SideBarPostsContainerComp, SideBarPostsItemComp} from "../../styled-comp";

interface ISideBarNavContainer {
    topic: any
}


function SideNavBarTopic({topic}: ISideBarNavContainer) {
    return (
        <SideBarPostsContainerComp>
            <div className="sidebar-list">
                <span>전체목록</span>
                <span>({Object.values(topic.data).flat().length})</span>
            </div>
            {Object.keys(topic.data).map((e: string) => (
                <SideBarPostsItemComp to={`/topic/${e}`} key={e}>
                    <div>
                        <span className="topic_list_items">{e}</span>
                        <span className="topic_length">({topic.data[e].length})</span>
                    </div>
                </SideBarPostsItemComp>
            ))}
        </SideBarPostsContainerComp>
    );
}

export default React.memo(SideNavBarTopic);