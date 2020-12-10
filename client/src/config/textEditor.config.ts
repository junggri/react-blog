// @ts-ignore
// import ImageResize from "quill-image-resize-module";

// Quill.register("modules/imageResize", ImageResize);
import ImageResize from "quill-image-resize-module";
import { Quill } from "react-quill";

Quill.register("modules/ImageResize", ImageResize);

export const modules = {
   ImageResize: {
      handleStyles: {
         backgroundColor: "black",
         border: "none",
         color: "white",
         // other camelCase styles for size display
      },
   },
   syntax: true,
   toolbar: [
      // [{ header: "1" }, { header: "2" }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
   ],
};


export const formats = ["font", "size", "bold", "italic", "underline", "strike", "blockquote",
   "code-block", "color", "background", "align", "list", "bullet", "indent", "link", "image", "blockquote", "video", "insert"];


// const bold = Quill.import("formats/bold");
// bold.tagName = "b"; // Quill uses <strong> by default
// Quill.register(bold, true);
//
// const italic = Quill.import("formats/italic");
// italic.tagName = "i"; // Quill uses <em> by default
// Quill.register(italic, true);
