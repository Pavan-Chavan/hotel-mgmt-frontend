import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postPermission, postRole, postSubUser, updateUserFields } from '../../store/slice/SubUserSlic';
import { getRolesData } from '../../api/role';
import { getPermissionData } from '../../api/permission';

export default function CreateEditSubUser() {
  const location = useLocation();
  const mode = location.pathname.split("/")[2];
  const subUserId = location.pathname.split("/")[3];
  const dispatchAction = useDispatch();
  const subUser = useSelector((state) => {return state.subUser})

  const subUserdata = {
    id:234,
    roleId:123
  };

  useEffect(()=>{

    async function fetchRoleAndPermission() {
      dispatchAction(postRole(await getRolesData()));
      dispatchAction(postPermission(await getPermissionData()));
    }

    fetchRoleAndPermission();
    if(mode === "edit") {
      dispatchAction(postSubUser(subUserdata));
    } else {

    }
  }, [ ])

  const renderFormTitle = (mode) => {
    if(mode === "edit") {
      return "Edit";
    } else {
      return "Create";
    }
  }

  const onUserFieldUpdate = (value,field) => {
    dispatchAction(updateUserFields({value,field}));
  }

  const renderPermissions = () => {
    return (<div>
      <div class="form-group">
        <label>Multiple select using select 2</label>
        <select class="js-example-basic-multiple" name="permissionsIds" multiple="multiple" onChange={(e)=>{updateField(e.target.value,e.target.name)}} style={{width:"100%"}}>
        {subUser.permissions.map((permission)=>{
          return <option value={permission.permissionId}>{permission.permissionName}</option>
        })}
        </select>
        {subUser.permissions.map((permission)=>{
          const selected = subUser.subUserBody.permissionsIds.includes(permission);
          const btnClass =  selected ? "btn-success" :"btn-danger"
          return <button type="button" id={permission.permissionId} value={permission.permissionName} onClick={() => {}} className={`btn ${btnClass} btn-md mr-2`}>{permission.permissionName}</button>
        })}
      </div>
    </div>
    );
  };

  const updateField = (value,field) => {
    dispatchAction(updateUserFields({value,field}));
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">{renderFormTitle(mode)} Employee</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{renderFormTitle(mode)} Role</h4>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="userName">User Name</label>
                    <input type="text" name="username" className="form-control" onChange={(e)=>{updateField(e.target.value,e.target.name)}} value={subUser.subUserBody.username} id="userName"  placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                    <label for="roleName">Role Id</label>
                      <select class="js-example-basic-single" name="roleId" style={{width:"100%"}} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
                        {subUser.roles.map((role)=>{
                          return <option value={role.roleId}>{role.roleName}</option>
                        })}
                      </select>
                  </div>
                  {renderPermissions()}
                </form>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
};

