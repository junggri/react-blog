import React from "react";
import { TextEditorBoxComp } from "../../styledComponent";

interface ITextEditorBox {
   onSubmit: () => void
   onSubmitTempPost: () => void
}

const TextEditor = ({ onSubmit, onSubmitTempPost }: ITextEditorBox) => {
   return (
      <TextEditorBoxComp>
         <div onClick={onSubmit}>등록하기</div>
         <div onClick={onSubmitTempPost}>임시저장</div>
      </TextEditorBoxComp>
   );
};
export default React.memo(TextEditor);