import axios from "axios";
import { categoryData } from "../mockData/CategoryMockData";
import { module } from "../moduleConfig";
import { transformCreateOptionsCategory } from "../Utilities/utilities";

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

// TODO : update status api is not available
export const updateCategoryStatus = (id,status) => {
  try {
    if(true) return "API is not avaiable";
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
        return res.data.responseMessage;
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
    const updatedOptions = transformCreateOptionsCategory(options);
		const res = axios.post(module.API.category.saveCategory,updatedOptions)
			.then((res)=>{return res.data});
		return res;
	} catch (err) {
		console.error(err);
	}
}

export const updateCategoryAPI = (options) => {
	try {
    if(module.demoMode) return "Cannot Update its demo mode";
    const updatedOptions = transformCreateOptionsCategory(options);
		const res = axios.put(module.API.category.updateCategory,updatedOptions)
			.then((res)=>{return res.data});
		return res;
	} catch (err) {
		console.error(err);
	}
}