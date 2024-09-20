import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { deletePermission, getPermissionData, updatePermissionStatus } from "../../api/permission";
import { useState } from "react";
import { AuthContext } from "../../context/authContext";

const PermissionList = () => {

  const [Permissions, setPermissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setStatusBarMessege } = useContext(AuthContext);

  useEffect(()=>{
    async function fetchPermission() {
      setIsLoading(true)
      const temp = await getPermissionData();
      setPermissions(temp);
      setIsLoading(false);
    }
    fetchPermission();
  },[]);

  const updatePermission = async (id,status) => {
    const res = await updatePermissionStatus(id,status);
    if (res.status === 200) {
      setStatusBarMessege(res.data.permissionName + "updated succefully");
    } else {
      setStatusBarMessege("something went wrong");
    }
  };

  const deletePermissionId = async (id) => {
    const resMsg = await deletePermission(id);
    setStatusBarMessege(resMsg);
  }

  const renderPermissionList = () => {
    return Permissions.map((permission) => 
    {
      const btnClass = permission?.isDisable ? "btn-success" : "btn-danger";
      return <>
        <tr>
        <td>{permission.permissionName}</td>
        <td>
          <div className="template-demo">
            <button onClick={()=>{updatePermission(permission?.permissionId,permission?.isDisable)}} type="button" className={`me-5 btn ${btnClass} btn-md`}>{permission.isDisable ?"Enable":"Disable"}</button>
            <button type="button" onClick={() => {deletePermissionId(permission?.permissionId)}} className="btn btn-danger btn-md">Delete</button>
            <Link className="btn btn-warning btn-md" state={permission} to={`/permission/edit/${permission.permissionId}`}>Edit</Link>
          </div>
        </td>
      </tr>
      </>
    })
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Permissions </h3>
          <nav aria-label="breadcrumb">
            <Link className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/permission/create">+ Add New Permission</Link>
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
                        <th>Permission</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isLoading && renderPermissionList()}
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
