import React, { useEffect, useState } from "react";
import { ContentCenter, ContentCenterArticleBox } from "../styled-comp";
import util from "../lib/axios";
import { ContentTopicItems } from "component";

interface Props {
   width: number;
   params: string;
}

function MainCenterView({ width, params }: Props) {
   const [contents, setContents] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      (async () => {
         let { data } = await util.getPostFromParams(params);
         setContents(data);
         setLoading(true);
      })();
   }, [params]);

   return (
      <ContentCenter width={width}>
         <ContentCenterArticleBox width={width}>
            <ContentTopicItems content={contents} loading={loading} />
         </ContentCenterArticleBox>
      </ContentCenter>
   );
}

export default React.memo(MainCenterView);
