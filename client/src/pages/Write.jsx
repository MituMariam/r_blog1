import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editContainer">
          <ReactQuill
            className="editBox"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft{" "}
          </span>
          <span>
            <b>Visibility:</b> Public{" "}
          </span>
          <input type="file" id="file" style={{ display: "none" }} />
          <label className="file" htmlFor="file">
            Upload image
          </label>

          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="programming"
              id="programming"
            />
            <label htmlFor="programming">programming</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
