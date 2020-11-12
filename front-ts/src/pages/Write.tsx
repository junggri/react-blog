import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
export default Write;
