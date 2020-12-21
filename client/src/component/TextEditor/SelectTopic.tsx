import React, { ChangeEvent } from "react";
import { SelectTopicBoxComp, SelectTopicItemComp } from "../../styled-comp";
import { ISelectopicProps } from "../../interface/index.interface";


function SelectTopic({ topic, onIsChecked }: ISelectopicProps) {

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onIsChecked(e.target.value);
   };


   if (topic === null) return null;

   return (
      <SelectTopicBoxComp>
         <h1>토픽을 선택해주세요</h1>
         <div className="post-select-box">
            {topic.map((v: { Tables_in_contents: string }) => (
               <SelectTopicItemComp key={v["Tables_in_contents"]}>
                  <input className="select-input" type="radio" id={v["Tables_in_contents"]} onChange={onChange}
                         value={v["Tables_in_contents"]} name='post' />
                  <label className="select-label"
                         htmlFor={v["Tables_in_contents"]}>{v["Tables_in_contents"]}</label>
               </SelectTopicItemComp>
            ))}
         </div>
      </SelectTopicBoxComp>
   );
}

export default React.memo(SelectTopic);