import React from "react";

const WriteTopicName = ({ onNameChange }: { onNameChange: any }) => {
   const onChange = (e: any) => {
      onNameChange(e.target.value);
   };

   return (
      <>
         <textarea name="content-title" placeholder="제목" className="content-title" onChange={onChange} />
      </>
   );
};

export default React.memo(WriteTopicName);