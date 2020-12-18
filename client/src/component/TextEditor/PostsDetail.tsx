import React, { ChangeEvent, useState } from "react";
import { PostsDetailComp } from "../../styled-comp";
import { IPostsDetailProps } from "../../interface/index.interface";


function PostsDetail({ onChangeDetail }: IPostsDetailProps) {

   const [value, setValue] = useState<string>("");

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChangeDetail(e.target.value);
   };


   return (
      <PostsDetailComp>
         <h1>추가설멸을 입력하세요</h1>
         <input type="text" onChange={onChange} value={value} />
      </PostsDetailComp>);
}

export default React.memo(PostsDetail);