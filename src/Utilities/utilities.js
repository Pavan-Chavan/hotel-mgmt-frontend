export const TransformToSubUserData = (data) => {
	let subUser = {};
	subUser.username = data.login.username;
	subUser.permissionsIds = data.permissionSet.map((permission) => {return permission.permissionId;});
	subUser.roleId = data.role.roleId;
	subUser.isDisable = data.isDisable;
	subUser.subUserId = data.subUserId;
	return subUser;
}

export const transformCreateOptionsCategory = (data) => {
  let category = {
    categoryName:data.name,
    categoryId: data?.categoryId
  }
  return category;
}

export const createDishesDTO = (data) => {
	let temp = {
		categoryId: data.categoryId,
		foodItemId: data.foodItemId,
		foodItemName: data.name,
		foodItemPrice: data.price
	};
	return temp;
}