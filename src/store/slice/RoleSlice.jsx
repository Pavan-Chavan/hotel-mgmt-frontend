import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
	name:"role",
	initialState:{
    role : {}
  },
	reducers:{
		addRole(state,action) {		},
		deleteRole(state,action) {	},
		getRole(state,action) {
      state.role = {...action.payload};
		},
    updateRole(state,action) {
      state.role[action.payload.field] = action.payload.value;
    },
    resetRoleData(state,action) {
      state.role = action.payload;
    }
	}
});

export const { getRole, updateRole, resetRoleData } = roleSlice.actions;
export default roleSlice.reducer;