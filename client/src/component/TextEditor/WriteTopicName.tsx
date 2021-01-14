import React from "react";

const WriteTopicName = ({ onNameChange, value }: { onNameChange: any, value: string }) => {
   const onChange = (e: any) => {
      onNameChange(e.target.value);
   };

   return (
      <>
         <textarea name="content-title" placeholder="제목" className="content-title" onChange={onChange} value={value} />
      </>
   );
};

export default React.memo(WriteTopicName);