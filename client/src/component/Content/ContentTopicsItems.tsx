import React, { useEffect, useState } from "react";
import util from "../../lib/axios";
import { Link } from "react-router-dom";
import { ContentTopicListComp } from "../../styled-comp";

interface Prop {
   params: string
}

interface V {
   uid: string
   content_name: string
   created: string
}


const ContentTopicItems = ({ params }: Prop) => {
   const [contents, setContents] = useState<any[]>([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      (async () => {
         let { data } = await util.getPostFromParams(params);
         setContents(data);
         setLoading(true);
      })();
   }, [params]);


   if (!loading) return (<div>...로딩중</div>);

   return (
      <>
         {contents !== undefined && contents.map(v => (
            <Link to={`/content/${params}/${v.uid}`} key={v.uid}>
               <div data-uid={v.uid}>
                  <ContentTopicListComp>
                     <div className="content-img-box"></div>
                     <div className="content-meta-data">
                        <h1>{v.content_name}</h1>
                        <div className="content-create">{v.created}</div>
                     </div>
                  </ContentTopicListComp>
               </div>
            </Link>
         ))}
      </>
   );
};

export default ContentTopicItems;