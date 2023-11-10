import axios from "axios";
import { dishesData } from "../mockData/DishesMockData";
import { module } from "../moduleConfig";

export const getDishesData = () => {
	try {
		if(module.demoMode) return dishesData ;
		const res = axios.get(module.API.dishes.getDishes)
			.then((res) => {return res.data});
		return res;
	} catch (err) {
		console.log(err);
	}
}

export const updateDishStatus = (id,status) => {
  try {
    if(module.demoMode) return "Cannot update Status, demo mode";
    const value = status ? "enable" : "disable";
		const res = Promise.resolve(
      axios.put(module.API.dishes.updateDishStatus + `?dishId=${id}&status=${value}`)
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
export const deleteDish = (id) => {
  try {
    if(module.demoMode) return "Cannot delete its demo mode";
		const res = Promise.resolve(
      axios.delete(module.API.dishes.deleteDish + `?dishId=${id}`)
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