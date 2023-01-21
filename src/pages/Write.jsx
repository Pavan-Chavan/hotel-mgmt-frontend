import React, { useState, useEffect, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { API_HEADER } from "../constants/constants";

const Write = () => {
  const state = useLocation().state;
  const [movieName, setMovieName] = useState(state?.MOVIENAME || "");
  const [description, setDescription] = useState(state?.DESCRIPTION || "");
  const [file, setFile] = useState(null);
  const [seoLink, setSeoLinkLink] = useState(state?.SEOLINK || "");
  const [posterName, setPosterName] = useState(state?.POSTER || "");
  const [category, setCategory] = useState(state?.CATEGORY || "");
  const [categories, setCategories] = useState([]);
  const [downloadLink, setDownloadLink] = useState(state?.DOWNLOADLINK || "");
  const [youtubeLink, setYoutubeLink] = useState(state?.YOUTUBELINK || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${API_HEADER}upload`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`${API_HEADER}cat`);
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl;

    if(state)
      imgUrl = posterName;
    else 
      imgUrl = await upload();
    
    const formData = {
      movieName,
      description: description,
      category,
      img: imgUrl,
      downloadLink,
      youtubeLink,
      seoLink
    }
    
    try {
      Object.keys(formData).map((fieldName) => {
        if (!formData[fieldName]) {
          throw `Please enter ${fieldName}`;
        }
      })
      state
        ? await axios.put(`${API_HEADER}getMovies/${state.id}`,formData )
        : await axios.post(`${API_HEADER}getMovies/`, formData);
          navigate("/")
        alert("Post Create/Update succefully");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="add mb-10">
        <div className="content">
          <input
            type="text"
            placeholder="Movie Name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={description}
              onChange={(description) => setDescription(description)}
            />
          </div>
          <select class="form-select" aria-label="Default select example" onChange={(event)=>{setCategory(event.target.value)}}>
            <option>Select Movie category</option>
              {categories.map((cat) => (
                <option selected={(cat.CATEGORY===category)} value={cat.CATEGORY}>{cat.CATEGORY}</option>
              ))}
          </select>
          <input
            type="text"
            placeholder="Download Link"
            value={downloadLink}
            onChange={(e) => setDownloadLink(e.target.value)}
          />
          <input
            type="text"
            placeholder="You Tube Link"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
          <input
            type="text"
            placeholder="SEO text for link"
            value={seoLink}
            onChange={(e) => setSeoLinkLink(e.target.value)}
          />
          
        </div>

        <div className="menu">

          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              type="text"
              id="POSTER"
              name="POSTER"
              disabled
              value={posterName}
            />
            <input
              type="file"
              id="file"
              name=""
              onChange={(e) => {setFile(e.target.files[0]);setPosterName(e.target.files[0].name)}}
            />
            <div className="buttons">
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
