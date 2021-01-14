import React, { ChangeEvent } from "react";
import { PostsDetailComp } from "../../styled-comp";
import { IPostsDetailProps } from "../../interface/index.interface";


function PostsDetail({ onChangeDetail, detailValue }: IPostsDetailProps) {

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeDetail(e.target.value);
   };

   return (
      <PostsDetailComp>
         <h1>추가설명을 입력하세요</h1>
         <input type="text" onChange={onChange} value={detailValue} />
      </PostsDetailComp>
   );
}

export default React.memo(PostsDetail);