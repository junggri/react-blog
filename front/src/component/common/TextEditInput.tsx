import React from "react";
import { TextEditContentNameComp } from "../../styledComponent";

interface ITextEditContentName {
   onContentChange: (contentName: string) => void
   contentName: string
   onDetailChange: (detail: string) => void
   detail: string
}

const TextEditContentName = ({ ...props }: ITextEditContentName) => {
   const onContentName = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onContentChange(e.target.value);
   };
   const onDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onDetailChange(e.target.value);
   };

   return (
      <TextEditContentNameComp>
         <h1>Title</h1>
         <input type="text" name="content_name" placeholder="제목을 입력하세요." onChange={onContentName} value={props.contentName} />
         <div className="summary_content">
            <h1>Summary</h1>
            <input type="text" name="content_detail" placeholder="요약을 작성하세요." className="summary" onChange={onDetail} value={props.detail} />
         </div>
      </TextEditContentNameComp>
   );
};


export default React.memo(TextEditContentName);