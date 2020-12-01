import React, { useEffect, useState } from "react";
import { SelectTopicComp } from "../styled-comp";
import { Checkbox } from "antd";
import "antd/dist/antd.css";
import util from "../lib/axios";

const SelectTopic = () => {
   const [list, setList] = useState(["a", "b", "c", "d", "e", "f", "g"]);


   function onChange(e: any) {
      console.log(`checked = ${e.target.checked}`);
   }

   useEffect(() => {
      (async () => {
         let { data } = await util.getContentName();
         // data.map((v: any) => console.log(v));
         // setList(data);
      })();
   }, []);


   return (
      <SelectTopicComp>
         <h1>토픽을 선택해주세요</h1>
         <div className="post-select-box">
            {list.map((v) => (
               <Checkbox onChange={onChange}>{1}</Checkbox>
            ))}

         </div>

      </SelectTopicComp>
   );
};

export default React.memo(SelectTopic);