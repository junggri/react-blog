import React, { useEffect, useState } from "react";
import { ContentCenter, ContentCenterArticleBox } from "../styled-comp";
import { ContentTopicList } from "component";
import util from "../lib/axios";

interface Props {
   width: number;
   params: string;
}

function MainCenterView({ width, params }: Props) {
   const [contents, setContents] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      (async () => {
         let { data } = await util.getSpecificPost(params);
         setContents(data);
         setLoading(true);
      })();
   }, [params]);


   return (
      <ContentCenter width={width}>
         <ContentCenterArticleBox width={width}>
            <ContentTopicList content={contents} loading={loading} />
         </ContentCenterArticleBox>
      </ContentCenter>
   );
}

export default MainCenterView;
