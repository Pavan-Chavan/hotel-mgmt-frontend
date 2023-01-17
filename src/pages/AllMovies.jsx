import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import ThumbNail from "../components/ThumbNail";
import { API_HEADER } from "../constants/constants";
import PostShimmer from "../components/shimmer/PostShimmer";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cat = useLocation().search;  
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_HEADER}getMovies/?cat=${category}`);
        setMovies(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [cat]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const getPostTitlePara = (MOVIENAME) => {
    return MOVIENAME.split(" ").join("-");;
  }

  return (
    <>
      {<ThumbNail msg={`All ${category.toLocaleLowerCase()} Movies`}/>}
      <div class="home-blog-area blog-h-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-tittle text-center">
                            <span>Our latest blog</span>
                            <h2>Our recent news</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                  {movies.map((movie)=>(
                    <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                          <div class="blog-img">
                            <img src={`upload/${movie.POSTER}`} alt=""/>
                          </div>
                          <div class="blog-cap">
                            <p>|   {movie.CATEGORY}</p>
                            <h3>
                            <Link className="link" to={`/movie/${movie.id}/${getPostTitlePara(movie.MOVIENAME)}`}>
                              {movie.MOVIENAME}
                            </Link></h3>
                            <Link className="more-btn" to={`/movie/${movie.id}/${getPostTitlePara(movie.MOVIENAME)}`}>
                              Download now »
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="col-lg-12">
                    <div className="browse-btn2 text-center mt-50">
                      <Link to={`/`} className="border-btn2">
                        Brows other movies
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
    
  );
};

export default AllMovies;
