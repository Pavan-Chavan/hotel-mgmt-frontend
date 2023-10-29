import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPermission, resetState, updatePermission } from "../../store/slice/PermissionSlice";
import { useDispatch, useSelector } from "react-redux";
import { createPermission } from "../../api/permission";

const renderFormTitle = (mode) => {
  if(mode === "edit") {
    return "Edit";
  } else {
    return "Create";
  }
}

export default function CreateEditPermission() {
  const location = useLocation();
  const mode = location.pathname.split("/")[2];
  const dispatchAction = useDispatch();
  const state = useLocation().state;
  const PermissionData = useSelector((state) => {return state.permissions})
  const navigate = useNavigate();

  useEffect(()=>{
    if(mode === "edit") {
      loadPermissionData();
    } else {
      dispatchAction(resetState({}));
    }
  },[]);

  const loadPermissionData = () => {
    dispatchAction(getPermission(state));
  }

  const updateField = (value,field) => {
    dispatchAction(updatePermission({value,field}));
  }

  const postPermission = () => {
    console.log(PermissionData.permission);
    createPermission(PermissionData.permission);
    navigate("/permission");
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">{renderFormTitle(mode)} Permission</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{renderFormTitle(mode)} Permission</h4>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="PermissionName">Permission Name</label>
                    <input type="text" name="permissionName" className="form-control" value={PermissionData.permission?.permissionName || ""} id="permissionName" onChange={(e)=>{updateField(e.target.value,e.target.name)}} placeholder="Permission Name"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleSelectGender">Status</label>
                    <select class="form-control" name="isDisable" value={PermissionData.permission?.isDisable || true} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
                      <option value={true}>Enable</option>
                      <option value={false}>Disable</option>
                    </select>
                  </div>
                  <button type="submit"  onClick={postPermission} className="btn btn-primary mr-2">Submit</button>
                  <Link className="btn btn-dark" to={"/permission"}>Cancle</Link>
                </form>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
}
