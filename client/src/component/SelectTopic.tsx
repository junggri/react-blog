import React, { useEffect, useState } from "react";
import { SelectTopicBoxComp, SelectTopicItemComp } from "../styled-comp";
import util from "../lib/axios";

interface Select {
   onIsChecked: any
}

const SelectTopic = ({ onIsChecked }: Select) => {
   const [list, setList] = useState([]);
   useEffect(() => {
      (async () => {
         let { data } = await util.getContents();
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

      </SelectTopicBoxComp>
   );
};

export default React.memo(SelectTopic);