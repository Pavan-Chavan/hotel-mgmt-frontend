import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RolelistData } from "./roleMockDataList";

const renderRoleList = () => {
  return RolelistData.data.map((role) => 
  { 
    return <>
      <tr>
      <td>{role.name}</td>
      <td>{role.date}</td>
      <td>
        <div class="template-demo">
          <button type="button" class="me-5 btn btn-success btn-md">{role.isDisable ?"Enable":"Disable"}</button>
          <button type="button" class="btn btn-danger btn-md">Delete</button>
          <Link className="btn btn-warning btn-md" state={role} to={`/role/edit/${role.roleId}`}>Edit</Link>
        </div>
      </td>
    </tr>
    </>
  })
}

const RoleList = () => {
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="page-header">
          <h3 class="page-title"> Roles </h3>
          <nav aria-label="breadcrumb">
            <Link class="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/role/create">+ Add New Role</Link>
          </nav>
        </div>
        <div class="row w-100">
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Role Name</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderRoleList()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleList;
