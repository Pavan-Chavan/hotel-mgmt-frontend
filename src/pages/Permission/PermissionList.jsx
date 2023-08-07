import React from "react";
import { Link } from "react-router-dom";
import { permissionMockDataList } from "./permissionMockDataList";

const renderPermissionList = () => {
  return permissionMockDataList.data.map((permission) => 
  { 
    return <>
      <tr>
      <td>{permission.name}</td>
      <td>
        <div class="template-demo">
          <button type="button" class="me-5 btn btn-success btn-md">{permission.isDisable ?"Enable":"Disable"}</button>
          <button type="button" class="btn btn-danger btn-md">Delete</button>
          <Link className="btn btn-warning btn-md" state={permission} to={`/permission/edit/${permission.permissionId}`}>Edit</Link>
        </div>
      </td>
    </tr>
    </>
  })
}

const PermissionList = () => {
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="page-header">
          <h3 class="page-title"> Permissions </h3>
          <nav aria-label="breadcrumb">
            <Link class="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/permission/create">+ Add New Permission</Link>
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
                        <th>Permission</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderPermissionList()}
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

export default PermissionList;
