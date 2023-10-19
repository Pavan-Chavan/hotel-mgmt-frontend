import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: "subUser",
    initialState: {
			subUserBody : {
				permissionsIds: []
			},
			roles: [],
			permissions:[]
		},
		reducers : {
			postSubUser(state,action) {
				state.subUserBody = action.payload;
			},
			postRole(state,action) {
				state.roles = action.payload;
			},
			updateUserFields(state,action) {
				state.subUserBody[action.payload.field] = action.payload.value;
			},
			postPermission(state, action){
				state.permissions = action.payload;
			}
		}
})

export const { postSubUser, postRole, postPermission, updateUserFields } = roleSlice.actions;
export default roleSlice.reducer;