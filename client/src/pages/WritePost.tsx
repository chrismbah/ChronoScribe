import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WritePost() {
  const [value, setValue] = useState("");

  return (
    <div className="add max-w-screen-lg mx-auto mt-28 mb-20 flex h-full gap-6">
      <div className="content basis-2/3">
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full mb-4 p-2 outline-blue-500 border border-gray-400 placeholder:text-gray-400 "
        />
        <div className="editor h-[300px]">
          <ReactQuill
            className="h-full "
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu flex flex-col h-full basis-1/3 gap-2 ">
        <div className="item1 px-2 pb-3 border border-gray-400  ">
          <h1 className="font-bold text-xl text-gray-900">Publish</h1>
          <div className="mb-1">
            <span className="block text-sm">
              <b>Status: </b> Draft
            </span>{" "}
            <span className="block text-sm">
              <b>Visibility: </b> Public
            </span>
          </div>
          <input type="file" name="" id="file" className="hidden" />
          <label
            htmlFor="file"
            className=" mb-2 cursor-pointer border border-blue-500 text-blue-500 rounded-md
             p-1 hover:text-white hover:bg-blue-500 transition text-xs"
          >
            Upload Image
          </label>
          <div className="buttons flex items-center justify-between mt-4 text-sm">
            <button className="text-blue-500 hover:underline">
              Save as Draft
            </button>
            <button className="bg-blue-500 text-white rounded-md p-1.5">
              Update
            </button>
          </div>
        </div>
        <div className="item2 px-2 border border-gray-400 flex flex-col py-2 gap-2 text-sm">
          <h1 className="font-bold text-xl text-gray-900 ">Category</h1>
          <div>
            <input type="radio" name="category" value={"art"} id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value={"science"}
              id="science"
            />
            <label htmlFor="science">Science</label>
          </div>
          <div>
            {" "}
            <input
              type="radio"
              name="category"
              value={"technology"}
              id="technology"
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div>
            <input type="radio" name="category" value={"cinema"} id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div>
            <input type="radio" name="category" value={"design"} id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div>
            <input type="radio" name="category" value={"food"} id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}
