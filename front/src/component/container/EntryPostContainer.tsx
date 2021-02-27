import React from "react";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { PostItem } from "../index";

interface IEntryPostContainer {
   data: [IPostCommonProps] | null
   onDelete: (topic: string, identifier: string) => void
}

const EntryPostContaier = ({ data, onDelete }: IEntryPostContainer) => {
   if (!data) return null;
   return (
      <>
         {data.map((e, i) => (
            <PostItem data={e} key={e.uid} onDelete={onDelete} />
         ))}
      </>
   );
};
export default React.memo(EntryPostContaier);