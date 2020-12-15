import React from "react";
import { WriteBtnBoxComp, WriteBtnComp } from "../../styled-comp";

interface IWriteBtnBoxProps {
   onSubmit: any
}

const WriteBtnBox = ({ onSubmit }: IWriteBtnBoxProps) => {
   return (
      <WriteBtnBoxComp>
         <WriteBtnComp onClick={onSubmit}>등록하기</WriteBtnComp>
         <WriteBtnComp>임시저장</WriteBtnComp>
      </WriteBtnBoxComp>
   );
};
export default React.memo(WriteBtnBox);