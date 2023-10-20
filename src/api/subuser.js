import axios from "axios";
import { RolelistData } from "../mockData/roleMockDataList";
import { module } from "../moduleConfig";
import { SUBUSERDATA } from "../constants/constants";

export const getSubUsers = () => {
	try {
		if(module.demoMode) return RolelistData;
		const res = axios.get(module.API.user.getSubUsers)
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

export const UpdateSubUser = (options) => {
	try {
	  if(module.demoMode) return;
	  const res = axios.put(module.API.user.UpdateSubUser,options)
		.then((res) => {console.log(res)});
	} catch (err) {
	  console.log(err);
	}
}

export const getSubUserData = (id) => {
	try {
	  if(module.demoMode) return;
	  const res = axios.get(module.API.user.getSubUsers + `?subUserId=${id}`)
		.then((res) => {return res.data},()=>{return SUBUSERDATA});
		return res;
	} catch (err) {
	  console.log(err);
	}
}
