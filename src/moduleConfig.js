export const module = {
	API : {
		role : {
			getRoles:"1.0/roles/getRoles",
			saveRole:"1.0/roles/saveRole",
			deleteRole: "1.0/roles/deleteRole",
			updateRole: "1.0/roles/status"
		},
		permission : {
			getPermission:"1.0/permisisons/getPermissions",
			savePermission:"1.0/permisisons/savePermission",
			deletePermission: "1.0/permisisons/deletePermission",
			updatePermissionStatus: "1.0/permisisons/status"
		},
		user : {
			getSubUsers:"1.0/users/getUsers",
			UpdateSubUser:"1.0/users/updateUser",
			saveSubUser:"1.0/users/createUser",
			deleteSubUser: "1.0/users/deleteSubUser",
			updatePermissionStatus: "1.0/permisisons/status" // TODO check user status update API

		},
		category :{
			getCategory: "1.0/category/getCategories",
			updateCategory:"1.0/category/updateCategory",
			saveCategory:"1.0/category/saveCategory",
			deleteCategory:"1.0/category/deleteCategory",
			updateCategoryStatus:"1.0/category/status"
		},
		dishes :{
			getDishes:"1.0/foodItem/getFoodItems",
			updateDish:"1.0/foodItem/updateFoodItem",
			saveDish:"1.0/foodItem/saveFoodItem",
			deleteDish:"1.0/foodItem/deleteFoodItemId",
			updateDishStatus:"1.0/foodItem/status"
		}
	},
	host : "http://localhost:8083",
	demoMode: false
}