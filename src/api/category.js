import axios from "axios";
import { categoryData } from "../mockData/CategoryMockData";
import { module } from "../moduleConfig";

export const getCategoryData = () => {
	try {
		if(module.demoMode) return categoryData ;
		const res = axios.get(module.API.category.getCategory)
			.then((res) => {return res.data});
		return res;
	} catch (err) {
		console.log(err);
	}
}

export const updateCategoryStatus = (id,status) => {
  try {
    if(module.demoMode) return "Cannot update Status, demo mode";
    const value = status ? "enable" : "disable";
		const res = Promise.resolve(
      axios.put(module.API.category.updateCategoryStatus + `?categoryId=${id}&status=${value}`)
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
export const deleteCategory = (id) => {
  try {
    if(module.demoMode) return "Cannot delete its demo mode";
		const res = Promise.resolve(
      axios.delete(module.API.category.deleteCategory + `?categoryId=${id}`)
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

export const createCategory = (options) => {
	try {
    if(module.demoMode) return "Cannot Create its demo mode";
		const res = axios.post(module.API.category.saveCategory,options)
			.then((res)=>{return res.data});
		return res;
	} catch (err) {
		console.error(err);
	}
}

export const updateCategory = (options) => {
	try {
    if(module.demoMode) return "Cannot Update its demo mode";
		const res = axios.put(module.API.category.updateCategory,options)
			.then((res)=>{return res.data});
		return res;
	} catch (err) {
		console.error(err);
	}
}