import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ListJobPosts() {
  const [jobPost, setJobPost] = useState({
    postName: "",
    quickSummary: "",
    jobPostContent: "",
    applyLink:"",
    image: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/jobPost/${id}`);
    setJobPost(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {jobPost.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Post Name:</b>
                  {jobPost.postName}
                </li>
                <li className="list-group-item">
                  <b>Quick Summary</b>
                  <div dangerouslySetInnerHTML={{__html: jobPost.quickSummary}}>
                  </div>
                </li>
                <li className="list-group-item">
                  <b>Job Post Content</b>
                  <div dangerouslySetInnerHTML={{__html: jobPost.jobPostContent}}>
                  </div>
                </li>
                <li className="list-group-item">
                  <b>Apply Link:</b>
                  {jobPost.applyLink}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
