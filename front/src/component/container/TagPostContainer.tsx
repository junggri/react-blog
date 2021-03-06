import React from "react";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { PostItem } from "../index";

interface ITagPostContainer {
   data: IPostCommonProps[] | null
   topic: string
   onDelete: (topic: string, identifier: string) => void
   login: boolean
}


const TagPostContainer = ({ data, topic, onDelete, login }: ITagPostContainer) => {

   return (
      <>
         {data?.map((e) => {
            if (e.topic === topic) {
               return <PostItem data={e} key={e.uid} onDelete={onDelete} login={login} />;
            }
         })}
      </>
   );
};

export default React.memo(TagPostContainer);