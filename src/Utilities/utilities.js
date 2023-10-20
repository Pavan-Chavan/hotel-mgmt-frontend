export const TransformToSubUserData = (data) => {
	let subUser = {};
	subUser.username = data.login.username;
	subUser.permissionsIds = data.permissionSet.map((permission) => {return permission.permissionId;});
	subUser.roleId = data.role.roleId;
	subUser.isDisable = data.isDisable;
	subUser.subUserId = data.subUserId;
	return subUser;
}