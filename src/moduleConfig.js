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
			updateCategory:"",
			saveCategory:"",
			deleteCategory:"1.0/category/deleteCategory",
			updateCategoryStatus:"1.0/category/status"
		}
	},
	host : "http://localhost:8083",
	demoMode: true
}