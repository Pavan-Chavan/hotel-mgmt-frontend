import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRole, resetRoleData, updateRole } from "../../store/slice/RoleSlice";
import { useDispatch, useSelector } from "react-redux";

const renderFormTitle = (mode) => {
  if(mode === "edit") {
    return "Edit";
  } else {
    return "Create";
  }
}

export default function CreateEditRole() {
  const location = useLocation();
  const mode = location.pathname.split("/")[2];
  const dispatchAction = useDispatch();
  const state = useLocation().state;
  const roleData = useSelector((state) => {return state.roles})

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
                    <input type="text" name="name" className="form-control" value={roleData.role.name || ""} id="roleName" onChange={(e)=>{updateField(e.target.value,e.target.name)}} placeholder="Role Name"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleSelectGender">Status</label>
                    <select class="form-control" name="isDisable" value={roleData.role.isDisable || true} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
                      <option value={true}>Enable</option>
                      <option value={false}>Disable</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
}