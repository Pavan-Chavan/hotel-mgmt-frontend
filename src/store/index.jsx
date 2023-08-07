import { configureStore } from "@reduxjs/toolkit";
import roleSlice  from "./slice/RoleSlice";


const store = configureStore({
  reducer:{
    roles: roleSlice
  }
});

export default store;