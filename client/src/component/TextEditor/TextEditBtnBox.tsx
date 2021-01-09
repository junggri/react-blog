import React from "react";
import { WriteBtnBoxComp, WriteBtnComp } from "../../styled-comp";
import { ITextEditBtnBoxProps } from "../../interface/index.interface";


const TextEditBtnBox = ({ onSubmit, onTemporaryPost }: ITextEditBtnBoxProps) => {
   return (
      <WriteBtnBoxComp>
         <WriteBtnComp onClick={onSubmit}>등록하기</WriteBtnComp>
         <WriteBtnComp onClick={onTemporaryPost}>임시저장</WriteBtnComp>
      </WriteBtnBoxComp>
   );
};
export default TextEditBtnBox;