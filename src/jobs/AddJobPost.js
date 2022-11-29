import axios from "axios";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import JoditEditor from 'jodit-react';

export default function AddJobPost() {
  let navigate = useNavigate();
  const editor = useRef(null);

  const [JobPost, setJobPost] = useState({
    postName: "",
    quickSummary: "",
    jobPostContent: "",
    applyLink: "",
    image: ""
  });

  const { postName, quickSummary, jobPostContent, applyLink, image } = JobPost;

  const onInputChange = (e) => {
    console.log(e);
    setJobPost({ ...JobPost, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/postJob", JobPost);
    navigate("/");
  };

  const onJoditEditorChange = (value,key) => {
    setJobPost({ ...JobPost, [key]: value });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Post Job Update</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Job Post Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Post Name"
                name="postName"
                value={postName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quickSummary" className="form-label">
              Quick Summary
              </label>
              <JoditEditor
                value={quickSummary}
                ref={editor}
                tabIndex={1} 
                onChange={(e) => onJoditEditorChange(e,"quickSummary")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="jobPostContent" className="form-label">
              Job Post Content
              </label>
              <JoditEditor
                value={jobPostContent}
                ref={editor}
                tabIndex={1} 
                onChange={(e) => onJoditEditorChange(e,"jobPostContent")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Image" className="form-label">
                Apply Link
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Select Image"
                name="applyLink"
                value={applyLink}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Image" className="form-label">
                Company Image
              </label>
              <input
                type={"file"}
                className="form-control"
                placeholder="Select Image"
                name="image"
                value={image}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
