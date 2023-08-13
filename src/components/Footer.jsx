import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <footer>
        <div className="footer-area footer-bg footer-padding">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                       <div className="single-footer-caption mb-50">
                         <div className="single-footer-caption mb-30">
                            <div className="footer-logo mb-20">
                                <Link to={`/`}>
                                    <img src="assets/img/logo/logoJob1.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                       <div className="single-footer-caption mb-50">
                         <div className="single-footer-caption mb-30">
                             <div className="footer-tittle">
                                 <h4>About Us</h4>
                                 <div className="footer-pera">
                                     <p>We Give You Your Dream Job.</p>
                                </div>
                             </div>
                         </div>

                       </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>
                                    <p>Address :Swargate, Pune, Maharashtra,
                                        India 411001. </p>
                                    </li>
                                    <li>Phone : +91 7498563993</li>
                                    <li>Email : blogsbajar@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="row footer-wejed justify-content-between">
                       <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div className="footer-tittle-bottom">
                            <span>5000+</span>
                            <p>Get Jobs</p>
                        </div>
                       </div>
                       <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div className="footer-tittle-bottom">
                                <span>451+</span>
                                <p>Hiring Posts</p>
                            </div>
                       </div>
                       <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div className="footer-tittle-bottom">
                                <span>568+</span>
                                <p>Company's</p>
                            </div>
                       </div>
               </div>
            </div>
        </div>
        <div className="footer-bottom-area footer-bg">
            <div className="container">
                <div className="footer-border">
                     <div className="row d-flex justify-content-between align-items-center">
                         <div className="col-xl-10 col-lg-10 ">
                             <div className="footer-copy-right">
                                 <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Powerd By <a href="/" target="_blank">BlogsBajar</a> <i className="fa fa-heart" aria-hidden="true"></i>
  </p>
                             </div>
                         </div>
                         <div className="col-xl-2 col-lg-2">
                             <div className="footer-social f-right">
                                 <a href="https://www.facebook.com/blogsbajar?mibextid=ZbWKwL" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                 <a href="https://twitter.com/BlogsBajar?t=39EPs4nMGx7A6bxykJ9XQg&s=09" target="_blank"><i className="fab fa-twitter"></i></a>
                                 <a href="https://instagram.com/blogsbajar_jobupdates?igshid=YmMyMTA2M2Y=" target="_blank"><i className="fab fa-instagram"></i></a>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
