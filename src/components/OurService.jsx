import React from 'react';
import { Link } from "react-router-dom";
export default function OurService() {
  return (
    <div className="our-services section-pad-t30">
            <div className="container">
                <div className="">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>FEATURED TOURS Packages</span>
                            <h2>Browse Top Categories </h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="services-cap">
                                <h5>
                                    <Link to={`/#`}>
                                        Design & Development
                                    </Link>
                                </h5>
                                <span>(653)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-cms"></span>
                            </div>
                            <div className="services-cap">
                                <h5>
                                    <Link to={`/#`}>
                                        Design & Development
                                    </Link>
                                </h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-report"></span>
                            </div>
                            <div className="services-cap">
                               <h5>
                                <Link to={`/#`}>
                                    Sales & Marketing
                                </Link>
                                </h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-app"></span>
                            </div>
                            <div className="services-cap">
                               <h5>
                                    <Link to={`/#`}>
                                        Mobile Application
                                    </Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
