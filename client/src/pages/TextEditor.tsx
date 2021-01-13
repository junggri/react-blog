import React from "react";
import { Editor } from "component";
import "../../node_modules/react-quill/dist/quill.snow.css";


function TextEditor({ history, match }: any) {

   return <Editor history={history} match={match} />;
}

export default TextEditor;
