import axios from "axios";
import { RolelistData } from "../mockData/roleMockDataList";
import { module } from "../moduleConfig";
import { SUBUSERDATA } from "../constants/constants";

axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('Authorization');

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
		.then((res) => {return res},()=>{return res});
		return res;
	} catch (err) {
	  console.log(err);
	}
}

export const deleteSubUserApi = (id) => {
  try {
    if(module.demoMode) return "Cannot delte its demo mode";
		const res = Promise.resolve(
      axios.delete(module.API.user.deleteSubUser + `?subUserId=${id}`)
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