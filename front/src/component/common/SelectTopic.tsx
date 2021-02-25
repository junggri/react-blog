import React from "react";
import { DeleteBtnComp, SelectTopicComp, SelectTopicItempComp } from "../../styledComponent";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

interface ISelectTopic {
   topic: { Tables_in_contents: string }[] | null
   onIsChecked: any
   checked: string
   token: string | null
   onRequestAfterMakeOrDeleteTopic: any
}

const SelectTopic = ({ topic, onIsChecked, checked }: ISelectTopic) => {

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onIsChecked(e.target.value);
   };

   return (
      <SelectTopicComp>
         <h1>Select Topic</h1>
         <div className="select-item-box">
            {topic && topic.map((e) => (
               <div className="select-items">
                  <SelectTopicItempComp key={e["Tables_in_contents"]}>
                     <input className="select-input" type="radio" id={e["Tables_in_contents"]} onChange={onChange}
                            value={e["Tables_in_contents"]} name='post' checked={e["Tables_in_contents"] === checked} />
                     <label className="select-label"
                            htmlFor={e["Tables_in_contents"]}>{e["Tables_in_contents"]}</label>
                  </SelectTopicItempComp>
                  <DeleteBtnComp>
                     <MdDelete />
                  </DeleteBtnComp>
               </div>
            ))}
         </div>
         <div className="make_new_topic_box">
            <input type="text" name="new_topic_name" />
            <span><AiOutlinePlus /></span>
         </div>
      </SelectTopicComp>
   );
};
export default React.memo(SelectTopic);