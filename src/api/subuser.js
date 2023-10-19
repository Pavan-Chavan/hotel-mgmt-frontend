import axios from "axios";
import { RolelistData } from "../mockData/roleMockDataList";
import { module } from "../moduleConfig";

export const getSubUsers = () => {
	try {
		if(module.demoMode) return RolelistData;
		const res = axios.get(module.API.user.getSubUser)
			.then((res) => {return res.data});
		return res;
	} catch (err) {
		console.log(err);
	}
}

export const createSubUser = (options) => {
	try {
	  if(module.demoMode) return;
	  const res = axios.post(module.API.user.saveSubUser,options)
		.then((res) => {console.log(res)});
	} catch (err) {
	  console.log(err);
	}
  }
