import React from 'react'

export default function NavBar() {
  return (
    <header>
       <div className="header-area header-transparrent">
           <div className="headder-top header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-2">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" style={{ width: '250px', }}/></a>
                            </div>  
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="menu-wrapper">
                                <div className="main-menu">
                                </div>          
                                <div className="header-btn d-none f-right d-lg-block">
                                    <a href="#" className="btn head-btn1">Home</a>
                                    <a href="#" className="btn head-btn2">Contact</a>
                                    <a href="#" className="btn head-btn1">Register</a>
                                    <a href="#" className="btn head-btn2">Login</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </header>
  )
}
