import React from "react";
import { Editor } from "component";
import "../../node_modules/react-quill/dist/quill.snow.css";


function TextEditor({ history }: any) {
   return <Editor history={history} />;
}

export default TextEditor;
