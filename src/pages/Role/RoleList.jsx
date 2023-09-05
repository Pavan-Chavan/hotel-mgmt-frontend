import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRolesData } from "../../api/role";

const renderRoleList = (Roles,isLoading) => {
  if (isLoading) {
    return <>loading...</>
  } else {
    return Roles?.map((role) => 
    { 
      const btnClass = role?.isDisable ? "btn-success" : "btn-danger";
      return <>
        <tr>
        <td>{role?.roleName}</td>
        <td>{role?.date}</td>
        <td>
          <div className="template-demo">
            <button type="button" className={`me-5 btn ${btnClass} btn-md`}>{role?.isDisable ?"Enable":"Disable"}</button>
            <button type="button" className="btn btn-danger btn-md">Delete</button>
            <Link className="btn btn-warning btn-md" state={role} to={`/role/edit/${role.roleId}`}>Edit</Link>
          </div>
        </td>
      </tr>
      </>
    })
  }
}

const RoleList = () => {
  const [Roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    async function fetchRoles() {
      setIsLoading(true)
      setRoles(await getRolesData());
      setIsLoading(false);
    }
    fetchRoles();
  },[]);

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Roles </h3>
          <nav aria-label="breadcrumb">
            <Link className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/role/create">+ Add New Role</Link>
          </nav>
        </div>
        <div className="row w-100">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Role Name</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderRoleList(Roles,isLoading)}
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
