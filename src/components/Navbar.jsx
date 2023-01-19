import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logoJob.png";

const Navbar = () => {
const { currentUser, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="header-area header-transparrent">
          <div className="headder-top header-sticky">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-3 col-md-2 mb-10 mt-10">
                          <div className="logo">
                              <Link className="link" to="/">
                                <img src={Logo} height = "75" width = "290" alt=""/>
                              </Link>
                          </div>
                          {currentUser ? ".":"" }
                      </div>
                      <div className="col-lg-9 col-md-9">
                          <div className="menu-wrapper">
                              <div className="main-menu">
                                  
                              </div>          
                              <div className="header-btn d-none f-right d-lg-block">
                                    {currentUser ? (
                                      <Link className="btn head-btn2 mr-10" to="/write">
                                        Post a Job Update
                                      </Link>
                                    ) : ""}
                                  {currentUser ? (
                                    <span className="btn head-btn2" onClick={logout}>Logout</span>
                                  ) : ""}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
