import { createSlice } from "@reduxjs/toolkit";

const permissionSlice = createSlice({
  name:"permission",
  initialState:{
    permission:{}
  },
  reducers:{
    getPermission(state,action) {
      state.permission={...action.payload};
    },
    updatePermission(state,action) {
      state.permission[action.payload.field] = action.payload.value;
    },
    resetState(state,action) {
      state.permission = action.payload;
    }
  }
})

export const {getPermission, updatePermission, resetState} = permissionSlice.actions;
export default permissionSlice.reducer;