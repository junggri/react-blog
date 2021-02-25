import React from "react";
import { IPostCommonProps } from "../../modules/Posts/posts.interface";
import { PostItem } from "../index";

interface ITagPostContainer {
   data: IPostCommonProps[] | null
   topic: string
}


const TagPostContainer = ({ data, topic }: ITagPostContainer) => {

   return (
      <>
         {data?.map((e) => {
            if (e.topic === topic) {
               return <PostItem data={e} key={e.uid} />;
            }
         })}
      </>
   );
};

export default React.memo(TagPostContainer);