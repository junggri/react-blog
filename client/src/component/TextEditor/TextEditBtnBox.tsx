import React from "react";
import { WriteBtnBoxComp, WriteBtnComp } from "../../styled-comp";
import { ITextEditBtnBoxProps } from "../../interface/index.interface";


const TextEditBtnBox = ({ onSubmit }: ITextEditBtnBoxProps) => {

   return (
      <WriteBtnBoxComp>
         <WriteBtnComp onClick={onSubmit}>등록하기</WriteBtnComp>
         <WriteBtnComp>임시저장</WriteBtnComp>
      </WriteBtnBoxComp>
   );
};
export default TextEditBtnBox;