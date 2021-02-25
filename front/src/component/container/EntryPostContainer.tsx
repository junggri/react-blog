import React from "react";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { PostItem } from "../index";

interface IEntryPostContainer {
   data: [IPostCommonProps] | null
}

const EntryPostContaier = ({ data }: IEntryPostContainer) => {
   if (!data) return null;
   return (
      <>
         {data.map((e, i) => (
            <PostItem data={e} key={e.uid} />
         ))}
      </>
   );
};
export default React.memo(EntryPostContaier);