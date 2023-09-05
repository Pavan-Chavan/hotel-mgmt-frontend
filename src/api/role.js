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