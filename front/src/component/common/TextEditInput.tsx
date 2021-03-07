import React from "react";
import { TextEditContentNameComp } from "../../styledComponent";

interface ITextEditContentName {
   onContentChange: (contentName: string) => void
   contentName: string
}

const TextEditContentName = ({ ...props }: ITextEditContentName) => {
   const onContentName = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onContentChange(e.target.value);
   };

   return (
      <TextEditContentNameComp>
         <input type="text" name="content_name" placeholder="제목을 입력하세요." onChange={onContentName} value={props.contentName} />
      </TextEditContentNameComp>
   );
};


export default React.memo(TextEditContentName);