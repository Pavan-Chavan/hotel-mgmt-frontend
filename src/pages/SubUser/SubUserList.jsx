import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSubUserApi, getSubUsers } from '../../api/subuser';
import { useState } from 'react';
import { useEffect } from 'react';
import { render } from '@testing-library/react';
import Loader from '../../components/Loader';

const SubUserList = () => {

	const [subUsers, setSubUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    async function fetchRoles() {
      setIsLoading(true);
      setSubUsers(await getSubUsers());
      setIsLoading(false);
    }
    fetchRoles();
  },[]);

	const renderUserRow = (subUsers) => {
		if(isLoading) {
      return (<Loader/>);
    } else {

      const isDisabled = (isDisabled) => {
        return isDisabled ? "User Disable" : "User Enable";
      };

      const renderPermission = (Permissions) => {
        return Permissions.map((permission) => {
          return <div key={permission.permissionId}>{permission.permissionName},</div>
        });
      };

      const renderRole = (role) => {
        return (<div>{role.roleName}</div>);
      };

      const deleteSubUser = async (id) => {
        const resMsg = await deleteSubUserApi(id);
        window.alert(resMsg);
        window.location.reload();
      }

      const renderActionBtn = (user) => {
        const btnClass = user?.isDisable ? "btn-success" : "btn-danger";
        return (
          <div className="template-demo">
            <button type="button" onClick={()=>{}} className={`me-5 btn ${btnClass} btn-md`}>{user?.isDisable ?"Enable":"Disable"}</button>
            <button type="button" onClick={() => {deleteSubUser(user.subUserId)}} className="btn btn-danger btn-md">Delete</button>
            <Link className="btn btn-warning btn-md" state={user} to={`/subUser/edit/${user.subUserId}`}>Edit</Link>
          </div>
        )
      };

      return subUsers.map((user)=>{
        return <>
          <tr key={user.subUserId}>
            <td> {user?.login?.username} </td>
            <td> {isDisabled(user?.isDisable)} </td>
            <td> {renderPermission(user?.permissionSet)} </td>
            <td> {renderRole(user?.role)}</td>
            <td> {renderActionBtn(user)} </td>
          </tr>
        </> 
      })
    }
	};

	return(
		<div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Sub Users </h3>
          <nav aria-label="breadcrumb">
            <Link className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/subUser/create">+ Add New Role</Link>
          </nav>
        </div>
        <div className="row ">
              <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Sub Users</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th> Emplyee Name </th>
                            <th> Status </th>
                            <th> Permission </th>
                            <th> Role </th>
                            <th> Actions </th>
                          </tr>
                        </thead>
                        <tbody>
                          {renderUserRow(subUsers)}
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

export default SubUserList;