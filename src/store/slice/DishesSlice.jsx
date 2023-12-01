import { createSlice } from "@reduxjs/toolkit";

const dishesSlice = createSlice({
  name:"dishes",
  initialState:{
    dishes:{},
    categories:[],
    isLoading:true
  },
  reducers:{
    getDishes(state,action) {
      state.dishes={...action.payload};
    },
    updateDishes(state,action) {
      state.dishes[action.payload.field] = action.payload.value;
    },
    loadCategoriesData(state,action) {
      state.categories = action.payload;
      state.isLoading = false;
    },
    resetState(state,action) {
      state.dishes = action.payload;
    }
  }
})

export const {getDishes, updateDishes, loadCategoriesData, resetState} = dishesSlice.actions;
export default dishesSlice.reducer;