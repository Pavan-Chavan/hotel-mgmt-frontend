import axios from "axios";
import { module } from "../moduleConfig";

export const getPermissionData = () => {
	try {
		// if(module.demoMode) return RolelistData;
		const res = axios.get(module.API.permission.getPermission)
			.then((res) => {return res.data});
		return res;
	} catch (err) {
		console.log(err);
	}
}

export const createPermission = (options) => {
	try {
		const res = axios.post(module.API.permission.savePermission,options)
			.then((res)=>{return res.data});
		return res;
	} catch (err) {
		console.error(err);
	}
}

export const updatePermissionStatus = (id,status) => {
  try {
    if(module.demoMode) return "Cannot update Status, demo mode";
    const value = status ? "enable" : "disable";
		const res = Promise.resolve(
      axios.put(module.API.permission.updatePermissionStatus + `?permissionId=${id}&status=${value}`)
      .then((res) => {
        return res.data;
      }, (res) => {
        return res.message;
      })
    );
    return res;
  } catch (error) {
    return error;
  }
}
