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
