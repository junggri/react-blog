import React from "react";
import { Editor } from "component";
import "../../node_modules/react-quill/dist/quill.snow.css";


function TextEditor({ history, location }: any) {

   return <Editor history={history} location={location} />;
}

export default TextEditor;
