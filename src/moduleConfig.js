export const module = {
	API : {
		role : {
			getRoles:"1.0/roles/getRoles",
			saveRole:"1.0/roles/saveRole",
			deleteRole: "1.0/roles/deleteRole",
			updateRole: "1.0/roles/status"
		},
		permission : {
			getPermission:"1.0/permissions/getPermissions",
			savePermission:"1.0/permissions/savePermission",
			deletePermission: "1.0/permissions/deletePermission",
			updatePermissionStatus: "1.0/permissions/status"
		},
		user : {
			getSubUsers:"1.0/users/getUsers",
			UpdateSubUser:"1.0/users/updateUser",
			saveSubUser:"1.0/users/createUser",
			deleteSubUser: "1.0/users/deleteSubUser",
			updatePermissionStatus: "1.0/permisisons/status",

		}
	},
	host : "http://localhost:8083",
	demoMode: false
}