import React from "react";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { PostItem } from "../index";

interface IEntryPostContainer {
   data: [IPostCommonProps] | null
   onDelete: (topic: string, identifier: string) => void
   login: boolean
}

const EntryPostContaier = ({ data, onDelete, login }: IEntryPostContainer) => {
   if (!data) return null;
   return (
      <>
         {data.map((e, i) => (
            <PostItem data={e} key={e.uid} onDelete={onDelete} login={login} />
         ))}
      </>
   );
};
export default React.memo(EntryPostContaier);