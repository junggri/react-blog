import React, { RefObject, useMemo } from "react";
import { TemporaryPostComp, TempPostContainerComp } from "../../styledComponent";
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

interface ITemporaryPost<T> {
   temp: T[] | null
   deleteTemporaryPost: (value: string, ref: React.RefObject<HTMLSpanElement>) => void
}

interface Ref extends HTMLDivElement {
   current: any
}

const TemporaryPost = ({ temp, deleteTemporaryPost }: ITemporaryPost<ITempPost>) => {
   const tempList: RefObject<Ref>[] | undefined = useMemo(() => temp?.map(() => React.createRef()), [temp]);

   const onClickDeleteBtn = (e: React.MouseEvent, ref: RefObject<HTMLSpanElement>) => {
      deleteTemporaryPost((e.currentTarget as HTMLElement).dataset.id as string, ref);
   };

   if (!temp?.length || temp === null) return null;
   if (!tempList) return null;
   return (
      <TempPostContainerComp>
         <div className="tsc-slo">Temporary post</div>
         <div>
            {temp.map((e: ITempPost, i) => (
               <div className="temp_item" key={e.uid} ref={tempList[i]}>
                  <TemporaryPostComp>
                     <Link to={`/write?temp=${e.uid}`}>{e.content_name}</Link>
                  </TemporaryPostComp>
                  <span className='posts-admin-delete'
                        onClick={(e) => onClickDeleteBtn(e, tempList[i])}
                        data-id={e.uid}>
                     <MdDelete />
                  </span>
               </div>
            ))}
         </div>
      </TempPostContainerComp>
   );
};
export default React.memo(TemporaryPost);