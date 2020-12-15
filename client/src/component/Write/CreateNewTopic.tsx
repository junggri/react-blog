import React, { useState } from "react";
import { AddTopicBtnComp, CreateNewTopicComp, CreateNewTopicListBoxComp, CreateNewTopicListItemComp, DeleteTopicIconComp } from "../../styled-comp";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

interface ICreateNewTopicProps {
   posts: any[]
}

function CreateNewTopic({ posts }: ICreateNewTopicProps) {
   const [click, setClick] = useState<boolean>(false);

   const onClickNewTopic = () => {
      setClick(true);
   };
   const onClickAddNewTopic = () => {

   };

   if (posts === null) return null;

   return (
      <CreateNewTopicComp>
         <h1>토픽관리하기</h1>

         <CreateNewTopicListBoxComp>
            {posts.map(v => (
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
            <input type="text" />
            <IoIosAddCircle className="make-new-topic-btn" onClick={onClickAddNewTopic} />
         </AddTopicBtnComp>
         }

         <IoIosAddCircle className="add-new-topic-btn" onClick={onClickNewTopic} />
      </CreateNewTopicComp>
   );
}

export default React.memo(CreateNewTopic);