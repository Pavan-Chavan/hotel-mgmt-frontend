import axios from "axios";
import { module } from "../moduleConfig";
import { tableMockData } from "../mockData/tableMockData";

export const getTablesData = () => {
	try {
		if(module.demoMode) return tableMockData;
		const res = axios.get(module.API.table.getTableData)
			.then((res) => {return res.data});
		return res;
	} catch (err) {
		console.log(err);
	}
}