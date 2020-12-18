import React, { useState } from "react";
import { AddTopicBtnComp, CreateNewTopicComp, CreateNewTopicListBoxComp, CreateNewTopicListItemComp, DeleteTopicIconComp } from "../../styled-comp";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import util from "../../lib/axios";
import { ICreateNewTopicProps } from "../../interface/index.interface";


function CreateNewTopic({ topic, token }: ICreateNewTopicProps) {

   const [click, setClick] = useState<boolean>(false);
   const [newTopic, setNewtopic] = useState<string>("");

   const setNewTopicName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewtopic(e.target.value);
   };

   const previousMakeNewTopic = () => {
      setClick(!click);
   };

   const MakeNewTopic = async () => {
      await util.makeNewTopic(newTopic, token);
      setClick(!click);
   };

   if (topic === null) return null;

   return (
      <CreateNewTopicComp>
         <h1>토픽관리하기</h1>

         <CreateNewTopicListBoxComp>
            {topic.map((v: { Tables_in_contents: string }) => (
               <CreateNewTopicListItemComp key={v["Tables_in_contents"]}>
                  <span>{v["Tables_in_contents"]}</span>
                  <DeleteTopicIconComp>
                     <MdDelete />
                  </DeleteTopicIconComp>
               </CreateNewTopicListItemComp>
            ))}
         </CreateNewTopicListBoxComp>

         {click &&
         <AddTopicBtnComp>
            <input type="text" value={newTopic} onChange={setNewTopicName} />
            <IoIosAddCircle className="make-new-topic-btn" onClick={MakeNewTopic} />
         </AddTopicBtnComp>
         }

         <IoIosAddCircle className="add-new-topic-btn" onClick={previousMakeNewTopic} />
      </CreateNewTopicComp>
   );
}

export default React.memo(CreateNewTopic);