import React from "react";
import { TemporaryPostComp, TemporaryStorageComp } from "../../styled-comp";

interface ITempPost {
   uid: string,
   topic: string,
   content_name: string,
   created: string,
   detail: string,
   file: string
}

const Srotage = ({ temp, onChangeMode }: any) => {
   if (temp === null) return null;
   if (temp.length === 0) return null;

   const onClick = (e: any) => {
      onChangeMode(e.target.dataset.id);
   };

   return (
      <TemporaryStorageComp>
         <div className="tsc-slo">임시저장</div>
         <div>
            {temp.map((e: ITempPost) => (
               <TemporaryPostComp key={e.uid} data-id={e.file} onClick={onClick}>
                  {e.content_name}
               </TemporaryPostComp>
            ))}
         </div>
      </TemporaryStorageComp>
   );
};

export default React.memo(Srotage);