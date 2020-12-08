import React from "react";
import { ContentCenter, ContentCenterArticleBox } from "../../styled-comp";
import { Route } from "react-router-dom";
import { ContentTopicItems, PostsBox } from "../index";

interface Props {
   width: number;
   params: string;
   children?: any
   match: any
}


function MainCenterView({ width, params, match }: Props) {
   return (
      <ContentCenter width={width}>
         <ContentCenterArticleBox width={width}>
            <Route path={"/content/:content"} exact render={() => <ContentTopicItems params={params} />} />
            <Route path={`/content/:content/:content`} exact render={() => <PostsBox postsId={params} match={match} />} />
         </ContentCenterArticleBox>
      </ContentCenter>
   );
}

export default React.memo(MainCenterView);
