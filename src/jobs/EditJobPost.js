import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoditEditor from 'jodit-react';

export default function EditJobPost() {
  let navigate = useNavigate();

  const { id } = useParams();

  const editor = useRef(null);

  const [jobPost, setJobPost] = useState({
    postName: "",
    quickSummary: "",
    jobPostContent: "",
    applyLink: "",
    imageName: ""
  });

  const { postName, quickSummary, jobPostContent, applyLink, imageName } = jobPost;

  const onInputChange = (e) => {
    setJobPost({ ...jobPost, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/jobPost/${id}`, jobPost);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/jobPost/${id}`);
    setJobPost(result.data);
  };

  const onJoditEditorChange = (value,key) => {
    setJobPost({ ...jobPost, [key]: value });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Job Post</h2>

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
                type={"text"}
                className="form-control"
                placeholder="Select Image"
                name="imageName"
                value={imageName}
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
