import React, { useMemo, useRef, useState } from "react";
import { DeleteBtnComp, SelectTopicComp, SelectTopicItempComp } from "../../styledComponent";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import util from "../../lib/axios";

interface ISelectTopic {
   topic: { Tables_in_contents: string }[] | null
   onIsChecked: (value: string) => void
   checked: string
   token: string | null
}

interface Ref extends HTMLElement {
   current: any | null
   align: any
}

const SelectTopic = ({ topic, onIsChecked, checked, token }: ISelectTopic) => {
   const [value, setValue] = useState<string>("");
   const parentRef: React.RefObject<HTMLDivElement> = useRef(null);
   const topicList: React.RefObject<Ref>[] | undefined = useMemo(
      () => topic?.map(() => React.createRef(),
      ), [topic]);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onIsChecked(e.target.value);
   };

   const deleteTopic = async (e: React.MouseEvent, ref: { current: any }) => {
      if (window.confirm("토픽을 삭제하겠습니까?")) {
         const topic: string | undefined = (e.currentTarget as HTMLElement).dataset.topic;
         if (topic && token) await util.deleteTopic(topic, token);
         ref.current.style.display = "none";
      }
   };

   const createTopic = async (e: React.MouseEvent) => {
      if (!value) return;
      if (token && parentRef.current) {
         await util.createTopic(value, token);
         setValue("");
      }
   };

   const onChangeValue = (e: React.ChangeEvent) => {
      setValue((e.target as HTMLInputElement).value);
   };

   if (topicList === undefined) return null;
   return (
      <SelectTopicComp>
         <h1>Select Topic</h1>
         <div className="select-item-box" ref={parentRef}>
            {topic && topic.map((e, i) => (
               <div className="select-items" ref={topicList[i]} key={e["Tables_in_contents"]}>
                  <SelectTopicItempComp>
                     <input className="select-input" type="radio" id={e["Tables_in_contents"]} onChange={onChange}
                            value={e["Tables_in_contents"]} name='post' checked={e["Tables_in_contents"] === checked} />
                     <label className="select-label"
                            htmlFor={e["Tables_in_contents"]}>{e["Tables_in_contents"]}</label>
                  </SelectTopicItempComp>
                  <DeleteBtnComp data-topic={e.Tables_in_contents} onClick={(e) => deleteTopic(e, topicList[i])}>
                     <MdDelete />
                  </DeleteBtnComp>
               </div>
            ))}
         </div>
         <div className="make_new_topic_box" onClick={createTopic}>
            <input type="text" name="new_topic_name" value={value} onChange={onChangeValue} />
            <span><AiOutlinePlus /></span>
         </div>
      </SelectTopicComp>
   );
};
export default React.memo(SelectTopic);