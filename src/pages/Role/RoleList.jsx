import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteRole, getRolesData, updateRoleStatus } from "../../api/role";
import { AuthContext } from "../../context/authContext";

const useRenderRoleList = (Roles,isLoading) => {
  const navigate = useNavigate();
  const { setStatusBarMessege } = useContext(AuthContext);
  const deleteRoleId = async (id) => {
    const res = await deleteRole(id);
    if (res.status === 200) {
      setStatusBarMessege("Role delete succesfully...","info");
    } else {
      setStatusBarMessege("Something went wrong","danger");
    }
    navigate("/role");
  }

  const updateRoleId = async (id,status) => {
    const resMsg = await updateRoleStatus(id,status);
    window.alert(resMsg);
    window.location.reload();
  };

  if (isLoading) {
    return <>loading...</>
  } else {
    return Roles?.map((role) => 
    { 
      const btnClass = role?.isDisable ? "btn-success" : "btn-danger";
      const date = new Date(role?.createdAt).toDateString();
      return <>
        <tr>
        <td>{role?.roleName}</td>
        <td>{date}</td>
        <td>
          <div className="template-demo">
            <button type="button" onClick={()=>{updateRoleId(role?.roleId,role?.isDisable)}} className={`me-5 btn ${btnClass} btn-md`}>{role?.isDisable ?"Enable":"Disable"}</button>
            <button type="button" onClick={() => {deleteRoleId(role?.roleId)}} className="btn btn-danger btn-md">Delete</button>
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
  const { setStatusBarMessege } = useContext(AuthContext);

  useEffect(()=>{
    async function fetchRoles() {
      setIsLoading(true);
      const res = await getRolesData();
      if(res.status === 200) {
        setRoles(res.data.response);
      } else {
        setStatusBarMessege("Something went wrong","danger");
      }
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
                      {useRenderRoleList(Roles,isLoading)}
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
