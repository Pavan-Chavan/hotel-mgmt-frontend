import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function JobListing() {
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        loadJobPosts();
      }, []);
    
      const loadJobPosts = async () => {
        const result = await axios.get("http://localhost:8081/jobPosts");
        setPosts(result.data);
      };

    return (
    <div>
        <div className="slider-area ">
            <div className="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>Get your job</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="job-listing-area pt-60 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-9 col-md-8">
                        <section className="featured-job-area">
                            <div className="container">
                                {Posts.map((post) => (
                                    <div className="single-job-items mb-30 text-start">
                                    <div className="job-items">
                                        <div className="company-img">
                                          <a href="#"><img src={`../assets/companyLogo/${post.imageName}`} alt=""/></a>
                                        </div>
                                        <div className="job-tittle job-tittle2">
                                            <a className="text-decoration-none" href="#">
                                                <h4>{post.postName}</h4>
                                            </a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link items-link2 f-right">
                                        <Link
                                          className="text-decoration-none"
                                          to={`/viewjobpost/${post.id}`}
                                        >
                                          Apply Here
                                        </Link>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
