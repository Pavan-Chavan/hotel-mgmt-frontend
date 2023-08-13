import React from 'react';
import { Link } from "react-router-dom";
export default function OurService( {category}) {
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
                <div className="row d-flex justify-content-center">
                    {category.map((cat) => (
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <Link to={`/allMovies/${cat.CATEGORY}`}>
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-content"></span>
                                </div>
                                <div className="services-cap">
                                    <h5>
                                        {cat.CATEGORY}
                                    </h5>
                                    <span>(15+)</span>
                                </div>
                            </div>
                            
                    </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
