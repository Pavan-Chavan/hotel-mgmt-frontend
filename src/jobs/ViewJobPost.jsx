import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ListJobPosts() {
  const [jobPost, setJobPost] = useState({
    postName: "",
    quickSummary: "",
    jobPostContent: "",
    applyLink:"",
    imageName: ""
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
    <mian>
      <div class="slider-area ">
        <div class="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap text-center">
                            <h2>{jobPost.postName}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
          <div className="job-post-company pt-120 pb-120">
            <div className="container">
              <div className="row  justify-content-center">
                <div className="col-xl-7 col-lg-8 text-start">
                <div>
                  <div className="single-job-items mb-50">
                    <div className="job-items">
                      <div className="company-img company-img-details">
                      <a href="#"><img src={`../assets/companyLogo/${jobPost.imageName}`} alt=""/></a>
                      </div>
                      <div className="job-tittle">
                        <h4>{jobPost.postName}</h4>
                        <ul>
                          <li>Creative Agency</li>
                          <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                          <li>$3500 - $4000</li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: jobPost.jobPostContent}} className="job-post-details">
                    </div>
                      <div class="header-btn d-none f-left d-lg-block">
                        <a href={jobPost.applyLink} class="btn head-btn2">Apply Here</a>
                      </div>
                  </div>
                </div>
              </div>
    </div>
    </mian>
  );
}
