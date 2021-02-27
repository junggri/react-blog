import React from "react";
import { KindofPostItemComp, KindofPostsComp } from "../../styledComponent";

interface IKindofPosts {
   onCheck: (value: string) => void
   checked: string
}

const KindofPosts = ({ onCheck, checked }: IKindofPosts) => {

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheck(e.target.value);
   };

   return (
      <KindofPostsComp>
         <h1>Kind of Posts</h1>
         <KindofPostItemComp>
            <input className="select-input" type="radio" id="kind-of-notice" onChange={onChange} value="notice" name='kindofpost' checked={checked === "notice"} />
            <label className="select-label" htmlFor="kind-of-notice">공지</label>
         </KindofPostItemComp>
         <KindofPostItemComp>
            <input className="select-input" type="radio" id="kind-of-posts" onChange={onChange} value="posts" name='kindofpost' checked={checked === "posts"} />
            <label className="select-label" htmlFor="kind-of-posts">게시물</label>
         </KindofPostItemComp>
      </KindofPostsComp>
   );
};
export default React.memo(KindofPosts);