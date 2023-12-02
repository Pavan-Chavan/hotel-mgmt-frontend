import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name:"category",
  initialState:{
    category:{}
  },
  reducers:{
    getCategory(state,action) {
      state.category={...action.payload};
    },
    updateCategory(state,action) {
      state.category[action.payload.field] = action.payload.value;
    },
    resetState(state,action) {
      state.category = action.payload;
    }
  }
})

export const {getCategory, updateCategory, resetState} = categorySlice.actions;
export default categorySlice.reducer;