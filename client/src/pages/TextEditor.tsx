import React from "react";
import { Editor } from "../component";
import { Snow } from "../styles/snow";


function TextEditor({ history, location }: any) {

   return (
      <>
         <Snow />
         <Editor history={history} location={location} />;
      </>
   );
}

export default TextEditor;
