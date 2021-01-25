import React from "react";
import { TagsContainerComp } from "../../styled-comp";
import { IAllPost } from "../../modules/Posts/posts.interface";
import { CgHashtag } from "react-icons/cg";
import { Link } from "react-router-dom";

interface ITagsinterface {
   Allposts: IAllPost
}

function TagsCotainer({ Allposts }: ITagsinterface) {
   const tags = Allposts.data ? Object.keys(Allposts.data) : [];
   if (!Allposts.data) return null;
   return (
      <TagsContainerComp>
         <div className="tag-slo">태그</div>
         <div className="tags-box">
            {tags.map((e) => (
               <Link to={`/tag/${e}`} key={e}>
               <span className="tag-hash">
                  <CgHashtag className="hash-icon" />
                  <span>{e}({Allposts.data !== null && Allposts.data[e].length})</span>
               </span>
               </Link>
            ))}
         </div>
      </TagsContainerComp>
   );
}

export default TagsCotainer;