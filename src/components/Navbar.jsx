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
                  </div>
              </div>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
