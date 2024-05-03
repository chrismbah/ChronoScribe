import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WritePost() {
  const [value, setValue] = useState("");
  return (
    <div className="add max-w-screen-lg mx-auto mt-24 mb-10">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editor">
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className="menu">
        <div className="item">i1</div>
        <div className="item">i2</div>
      </div>
    </div>
  );
}
