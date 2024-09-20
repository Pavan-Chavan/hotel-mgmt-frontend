import React, { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getRole, resetRoleData, updateRole } from "../../store/slice/RoleSlice";
import { useDispatch, useSelector } from "react-redux";
import { createRole } from "../../api/role";
import { AuthContext } from "../../context/authContext";
const renderFormTitle = (mode) => {
  if(mode === "edit") {
    return "Edit";
  } else {
    return "Create";
  }
}

export default function CreateEditRole() {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = location.pathname.split("/")[2];
  const dispatchAction = useDispatch();
  const state = useLocation().state;
  const roleData = useSelector((state) => {return state.roles});
  const { setStatusBarMessege } = useContext(AuthContext);

  useEffect(()=>{
    if(mode === "edit") {
      loadRoleData();
    } else {
      dispatchAction(resetRoleData({}));
    }
  },[]);

  const loadRoleData = () => {
    dispatchAction(getRole(state));
  }

  const updateField = (value,field) => {
    dispatchAction(updateRole({value,field}));
  }

  const postRole = async (options) => {
    const res = await createRole(options);
    if (res.status === 200) {
      setStatusBarMessege(`Role ${mode} succefully`,"info");
    } else {
      setStatusBarMessege(`Something went wrong !!!`,"danger");
    }
    navigate("/");
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">{renderFormTitle(mode)} Role</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{renderFormTitle(mode)} Role</h4>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="RoleName">Role Name</label>
                    <input type="text" name="roleName" className="form-control" value={roleData.role.roleName || ""} id="roleName" onChange={(e)=>{updateField(e.target.value,e.target.name)}} placeholder="Role Name"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleSelectGender">Status</label>
                    <select class="form-control" name="isDisable" value={roleData.role.isDisable} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
                      <option value={true}>Enable</option>
                      <option value={false}>Disable</option>
                    </select>
                  </div>
                  <button type="submit" onClick={() => {postRole(roleData.role)}}className="btn btn-primary mr-2">Submit</button>
                  <Link className="btn btn-dark" to={"/role"}>Cancle</Link>
                </form>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
}
