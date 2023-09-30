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
			deletePermission: "1.0/permisisons/deleteRole",
			updatePermissionStatus: "1.0/permisisons/status"
		}
	},
	host : "http://localhost:8083",
	demoMode: false
}