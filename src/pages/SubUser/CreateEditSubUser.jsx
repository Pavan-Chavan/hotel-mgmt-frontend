import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { postPermission, postRole, postSubUser, updateUserFields } from '../../store/slice/SubUserSlic';
import { getRolesData } from '../../api/role';
import { getPermissionData } from '../../api/permission';
import { UpdateSubUser, createSubUser, getSubUserData } from '../../api/subuser';
import { TransformToSubUserData } from '../../Utilities/utilities';

export default function CreateEditSubUser() {
  const location = useLocation();
  const mode = location.pathname.split("/")[2];
  const subUserId = location.pathname.split("/")[3];
  const dispatchAction = useDispatch();
  const subUser = useSelector((state) => {return state.subUser});
  const navigate = useNavigate();

  const subUserdata = {
    id:234,
    roleId:123
  };

  useEffect(()=>{

    async function fetchRoleAndPermission() {
      dispatchAction(postRole(await getRolesData()));
      dispatchAction(postPermission(await getPermissionData()));
    }

    async function getSubUser() {
      dispatchAction(postSubUser(TransformToSubUserData(await getSubUserData(subUserId))));
    }
    fetchRoleAndPermission();
    if(mode === "edit") {
      getSubUser()
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

  const updatePermissions = (e) => {
    let value = subUser.subUserBody?.permissionsIds || [];
    const field = e.target.name;
    if (e.target.value === "true") {
      const index = value.indexOf(Number(e.target.id));
      if (index > -1) {
        value = value.filter((permissionId)=>{return !(permissionId === Number(e.target.id))})
      }
    } else {
      value = [...value, Number(e.target.id)]
    }
    dispatchAction(updateUserFields({value,field}));
  }

  const renderPermissions = () => {
    return (<div>
      <div class="form-group">
        <label>Select Permissions</label>
        <div onClick={updatePermissions}>
          {subUser.permissions.map((permission)=>{
            const selected = subUser.subUserBody?.permissionsIds?.includes(permission.permissionId);
            const btnClass =  selected ? "btn-success" :"btn-danger"
            return <button type="button" name="permissionsIds" id={permission.permissionId} value={selected} className={`btn ${btnClass} btn-md mr-2`}>{permission.permissionName}</button>
          })}
        </div>
      </div>
    </div>
    );
  };

  const renderIsDisable = () => {
    return (
      <div class="form-group">
        <label for="exampleSelectGender">Status</label>
        <select class="form-control" name="isDisable" value={subUser.subUserBody?.isDisable} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
          <option value={true}>Enable</option>
          <option value={false}>Disable</option>
        </select>
      </div>
    );
  }
  const updateField = (value,field) => {
    dispatchAction(updateUserFields({value,field}));
  }

  const saveSubUser = () => {
    if (mode === "edit") {
      UpdateSubUser(subUser.subUserBody);
    } else {
      createSubUser(subUser.subUserBody);
    }
    console.log(subUser.subUserBody);
    navigate("/subusers");
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
                    <input type="text" name="username" className="form-control" onChange={(e)=>{updateField(e.target.value,e.target.name)}} value={subUser.subUserBody?.username} id="userName"  placeholder="User Name"/>
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
                  {renderIsDisable()}
                  <button type="submit" onClick={() => {saveSubUser()}}className="btn btn-primary mr-2">Submit</button>
                  <Link className="btn btn-dark" to={"/role"}>Cancle</Link>
                </form>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
};

