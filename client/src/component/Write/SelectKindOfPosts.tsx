import React, { ChangeEvent } from "react";
import { SelectKindOfPosts, SelectKindOfPostsBoxComp } from "../../styled-comp";

interface IKindsOfPostsProps {
   onCheck: (payload: string) => void
}

function SelectKindOfPost({ onCheck }: IKindsOfPostsProps) {

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onCheck(e.target.value);
   };

   return (
      <SelectKindOfPostsBoxComp>
         <h1>게시물종류를 선택해주세요</h1>
         <SelectKindOfPosts>
            <input className="select-input" type="radio" id="kind-of-notice" onChange={onChange} value="notice" name='kindofpost' />
            <label className="select-label" htmlFor="kind-of-notice">공지</label>
         </SelectKindOfPosts>
         <SelectKindOfPosts>
            <input className="select-input" type="radio" id="kind-of-posts" onChange={onChange} value="posts" name='kindofpost' />
            <label className="select-label" htmlFor="kind-of-posts">게시물</label>
         </SelectKindOfPosts>
      </SelectKindOfPostsBoxComp>
   );
}

export default React.memo(SelectKindOfPost);