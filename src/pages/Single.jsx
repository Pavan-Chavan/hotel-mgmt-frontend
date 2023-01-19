import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";
import ThumbNail from "../components/ThumbNail";
import { API_HEADER } from "../constants/constants";
import PostShimmer from "../components/shimmer/PostShimmer";

const Single = () => {
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  const seoLink = location.pathname.split("/")[3];
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_HEADER}getMovies/${postId}/${seoLink}`);
        setMovie(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`${API_HEADER}getMovies/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const getHeightOfYoutubePalyer = () => {
    return (window.innerHeight*0.5);
  }

  const getYouTubeLink = (link) => {
    return link.replace("watch","embed");
  }
  return (
    <>
      <div className="mb-30">
        {<ThumbNail msg={movie.MOVIENAME} src={`../upload/${movie?.POSTER}`}/>}
      </div>
      <div className="container">
        <div className="single">
          {isLoading ? <PostShimmer/>:
          <div className="content">
            <h1>{movie.MOVIENAME}</h1>
            <div className="user">
              {movie.userImg && <img
                src={movie.userImg}
                alt=""
              />}
              <div className="info">
                <span>{movie.username}</span>
                <p>Posted {moment(movie.date).fromNow()}</p>
              </div>
              {currentUser?.other?.username === movie.username && (
                <div className="edit">
                  <Link to={`/write?edit=2`} state={movie}>
                    <img src={Edit} alt="" />
                  </Link>
                  <img onClick={handleDelete} src={Delete} alt="" />
                </div>
              )}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(movie.DESCRIPTION),
              }}
            ></p>
            <div class="row">
              <div class="col-lg-12">
                <div class="section-tittle text-center">
                  <span>Stream Here</span>
                </div>
              </div>
            </div>
            <iframe width="100%" height={`${getHeightOfYoutubePalyer()}`} src={`${getYouTubeLink(movie.YOUTUBELINK)}`}>
            </iframe>
            <div className="row container d-flex">
              <div className="items-link items-link2 f-right d-flex" style={{"width":"auto"}}>
                <Link to={`${movie.DOWNLOADLINK}`} className="mr-10">
                  Download Now
                </Link>
                <Link to={`/`}>
                  Other Movies
                </Link>
              </div> 
            </div>     
          </div>}
        </div>
      </div>
    </>
  );
};

export default Single;
