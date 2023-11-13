import { configureStore } from "@reduxjs/toolkit";
import roleSlice  from "./slice/RoleSlice";
import PermissionSlice from "./slice/PermissionSlice";
import SubUserSlice from "./slice/SubUserSlic";
import DishesSlice from "./slice/DishesSlice";
import CategorySlice from "./slice/CategorySlice";


const store = configureStore({
  reducer:{
    roles: roleSlice,
    permissions: PermissionSlice,
    subUser: SubUserSlice,
    dishes: DishesSlice,
    category: CategorySlice
  }
});

export default store;