import { createSlice } from "@reduxjs/toolkit";

const dishesSlice = createSlice({
  name:"dishes",
  initialState:{
    dishes:{}
  },
  reducers:{
    getDishes(state,action) {
      state.dishes={...action.payload};
    },
    updateDishes(state,action) {
      state.dishes[action.payload.field] = action.payload.value;
    },
    resetState(state,action) {
      state.dishes = action.payload;
    }
  }
})

export const {getDishes, updateDishes, resetState} = dishesSlice.actions;
export default dishesSlice.reducer;