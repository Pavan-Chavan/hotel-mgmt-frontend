import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../context/authContext';

const renderList = (currentUser) => {
  if(currentUser) {
    return(<>
  <li class="nav-item menu-items">
    <Link className="nav-link" to="/dashboard">
      <span class="menu-icon">
        <i class="mdi mdi-speedometer"></i>
      </span>
      <span class="menu-title">Dashboard</span>
    </Link>
  </li>
  <li class="nav-item menu-items">
    <Link className="nav-link" to="/role">
      <span class="menu-icon">
        <i class="mdi mdi-account-key"></i>
      </span>
      <span class="menu-title">Role</span>
    </Link>
  </li>
  <li class="nav-item menu-items">
    <Link className="nav-link" to="/subusers">
      <span class="menu-icon">
        <i class="mdi mdi-account-key"></i>
      </span>
      <span class="menu-title">Sub User</span>
    </Link>
  </li>
  <li class="nav-item menu-items">
    <Link className="nav-link" to="/category">
      <span class="menu-icon">
        <i class="mdi mdi-account-key"></i>
      </span>
      <span class="menu-title">Category</span>
    </Link>
  </li>
  <li class="nav-item menu-items">
    <Link className="nav-link" to="/permission">
      <span class="menu-icon">
        <i class="mdi mdi-account-key"></i>
      </span>
      <span class="menu-title">Permission</span>
    </Link>
  </li></>);
  } else {
    return (
    <li class="nav-item menu-items">
      <Link className="nav-link" to="/login">
        <span class="menu-icon">
          <i class="mdi mdi-contacts"></i>
        </span>
        <span class="menu-title">Login</span>
      </Link>
    </li> );
  }
}

export default function SideBar() {
  const { currentUser } = useContext(AuthContext); 
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a class="sidebar-brand brand-logo" href="../../index.html"><img src="../../assets/images/logo.svg" alt="logo" /></a>
        <a class="sidebar-brand brand-logo-mini" href="../../index.html"><img src="../../assets/images/logo-mini.svg" alt="logo" /></a>
      </div>
      <ul class="nav">
        <li class="nav-item profile">
          <div class="profile-desc">
            <div class="profile-pic">
              <div class="count-indicator">
                <img class="img-xs rounded-circle " src="../../assets/images/faces/face15.jpg" alt=""/>
                <span class="count bg-success"></span>
              </div>
              <div class="profile-name">
                <h5 class="mb-0 font-weight-normal">Henry Klein</h5>
                <span>Gold Member</span>
              </div>
            </div>
            <a href="#" id="profile-dropdown" data-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
            <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
              <a href="#" class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-dark rounded-circle">
                    <i class="mdi mdi-settings text-primary"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-dark rounded-circle">
                    <i class="mdi mdi-onepassword  text-info"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-dark rounded-circle">
                    <i class="mdi mdi-calendar-today text-success"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item nav-category">
          <span class="nav-link">Navigation</span>
        </li>
        {renderList(currentUser)}
      </ul>
    </nav>
  )
}
