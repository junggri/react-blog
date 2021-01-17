import React from "react";
import { TemporaryPostComp, TemporaryStorageComp } from "../../styled-comp";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

interface ITempPost {
   uid: string,
   topic: string,
   content_name: string,
   created: string,
   detail: string,
   file: string
}

const Srotage = ({ temp, onDelete }: any) => {

   const onClick = (e: React.MouseEvent) => {
      onDelete((e.currentTarget as HTMLElement).dataset.id as string);
   };


   if (temp === null) return null;
   if (temp.length === 0) return null;

   return (
      <TemporaryStorageComp>
         <div className="tsc-slo">임시저장</div>
         <div>
            {temp.map((e: ITempPost) => (
               <div className="temp_item" key={e.uid}>
                  <TemporaryPostComp>
                     <Link to={`/write?temp=${e.uid}`}>{e.content_name}</Link>
                  </TemporaryPostComp>
                  <span className='posts-admin-delete' onClick={onClick} data-id={e.uid}><MdDelete /></span>
               </div>
            ))}
         </div>
      </TemporaryStorageComp>
   );
};

export default React.memo(Srotage);