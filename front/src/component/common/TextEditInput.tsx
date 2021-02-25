import React from "react";
import { TextEditContentNameComp } from "../../styledComponent";

const TextEditContentName = () => {
   return (
      <TextEditContentNameComp>
         <h1>Title</h1>
         <input type="text" name="content_name" placeholder="제목을 입력하세요." />
         <div className="summary_content">
            <h1>Summary</h1>
            <input type="text" name="content_detail" placeholder="요약을 작성하세요." className="summary" />
         </div>
      </TextEditContentNameComp>
   );
};

export default React.memo(TextEditContentName);