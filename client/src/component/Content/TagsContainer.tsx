import React from "react";
import { TagsContainerComp } from "../../styled-comp";
import { IAllPost, IPostCommonProps } from "../../modules/Posts/posts.interface";
import { Link } from "react-router-dom";
import { CgHashtag } from "react-icons/cg";

interface ITagsinterface {
   Allposts: IAllPost
}

function TagsCotainer({ Allposts }: ITagsinterface) {
   const set = new Set();
   Allposts.data?.map((e: any) => set.add(e.topic));
   const tags = Array.from(set);

   function getLength<T extends IPostCommonProps, K>(data: T[] | null, key: K): number {
      let count = 0;
      if (data !== null && typeof key === "string") {
         data.filter((e) => {
            if (e.topic === key) count += 1;
         });
      }
      return count;
   }

   if (!Allposts.data) return null;
   return (
      <TagsContainerComp>
         <div className="tag-slo">태그</div>
         <div className="tags-box">
            {tags.map((e) => (
               <Link to={`/tag/${e}`} key={e as string}>
               <span className="tag-hash">
                  <CgHashtag className="hash-icon" />
                  <span>{e}({Allposts.data !== null && getLength(Allposts.data, e)})</span>
               </span>
               </Link>
            ))}
         </div>
      </TagsContainerComp>
   );
}

export default TagsCotainer;