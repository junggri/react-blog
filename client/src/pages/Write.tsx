import React from "react";
import { TextEditor } from "component";
import "../../node_modules/react-quill/dist/quill.snow.css";


function Write({ history }: any) {
   return (
      <>
         <TextEditor history={history} />
      </>
   );
}

export default Write;
