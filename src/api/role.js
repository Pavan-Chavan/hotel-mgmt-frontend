import axios from "axios";
import { module } from "../moduleConfig";
import { RolelistData } from "../mockData/roleMockDataList";

export const getRolesData = () => {
	try {
		if(module.demoMode) return RolelistData;
		const res = axios.get(module.API.role.getRoles)
			.then((res) => {return res.data});
		return res;
	} catch (err) {
		console.log(err);
	}
}

export const createRole = (options) => {
  try {
    if(module.demoMode) return;
    const res = axios.post(module.API.role.saveRole,options)
      .then((res) => {console.log(res)});
  } catch (err) {
    console.log(err);
  }
}

export const deleteRole = (id) => {
  try {
    if(module.demoMode) return "Cannot delte its demo mode";
		const res = Promise.resolve(
      axios.delete(module.API.role.deleteRole + `?roleId=${id}`)
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

export const updateRole = (id,status) => {
  try {
    if(module.demoMode) return "Cannot update Status, demo mode";
    const value = status ? "enable" : "disable";
		const res = Promise.resolve(
      axios.put(module.API.role.updateRole + `?roleId=${id}&status=${value}`)
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