import React, { useEffect, useState } from "react";
import { SelectTopicBoxComp, SelectTopicItemComp, WriteBtnComp } from "../styled-comp";
import util from "../lib/axios";


const SelectTopic = ({ onIsChecked, onSubmit }: { onIsChecked: any, onSubmit: any }) => {
   const [list, setList] = useState([]);


   useEffect(() => {
      (async () => {
         let { data } = await util.getContentsName();
         setList(data);
      })();
   }, []);


   const onChange = (e: any) => {
      onIsChecked(e.target.value);
   };

   return (
      <SelectTopicBoxComp>
         <h1>토픽을 선택해주세요</h1>
         <div className="post-select-box">
            {list.map((v: any) => (
               <SelectTopicItemComp key={v["Tables_in_contents"]}>
                  <input className="select-input" type="radio" id={v["Tables_in_contents"]} onChange={onChange} value={v["Tables_in_contents"]} name='post' />
                  <label className="select-label" htmlFor={v["Tables_in_contents"]}>{v["Tables_in_contents"]}</label>
               </SelectTopicItemComp>
            ))}
         </div>
         <div className="post-write-btnBox">
            <WriteBtnComp onClick={onSubmit}>등록하기</WriteBtnComp>
            <WriteBtnComp>임시저장</WriteBtnComp>
         </div>
      </SelectTopicBoxComp>
   );
};

export default React.memo(SelectTopic);