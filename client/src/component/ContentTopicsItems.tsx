import React from "react";
import { ContentTopicListComp } from "../styled-comp";

interface Prop {
   content: any[]
   loading: boolean
}


const ContentTopicItems = ({ content, loading }: Prop) => {
   if (content.length === 0) return <div>자료가 없습니다.</div>;
   if (content.length !== 0 && loading === false) return <div>로딩중</div>;
   return (
      <>
         {content.map(v => (
            <div data-uid={v.uid} key={v.uid}>
               <ContentTopicListComp>
                  <h1>{v.content_name}</h1>
                  <span className="content-create">{v.created}</span>
               </ContentTopicListComp>
            </div>
         ))}
      </>
   );
};

export default ContentTopicItems;