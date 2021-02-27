import React from "react";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { PostItem } from "../index";

interface ITagPostContainer {
   data: IPostCommonProps[] | null
   topic: string
   onDelete: (topic: string, identifier: string) => void
}


const TagPostContainer = ({ data, topic, onDelete }: ITagPostContainer) => {

   return (
      <>
         {data?.map((e) => {
            if (e.topic === topic) {
               return <PostItem data={e} key={e.uid} onDelete={onDelete} />;
            }
         })}
      </>
   );
};

export default React.memo(TagPostContainer);