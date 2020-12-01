import React, { useRef, useState } from "react";

const InputContentName = () => {
   const [title, setTitle] = useState("");
   const contentName = useRef<HTMLTextAreaElement>(null);

   const setContentName = (e: any) => {
      setTitle(e.target.value);
   };

   return (
      <>
         <textarea name="content-title" placeholder="제목" className="content-title" value={title} onChange={setContentName} ref={contentName} />
      </>
   );
};

export default InputContentName;