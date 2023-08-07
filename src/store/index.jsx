import { configureStore } from "@reduxjs/toolkit";
import roleSlice  from "./slice/RoleSlice";
import PermissionSlice from "./slice/PermissionSlice";


const store = configureStore({
  reducer:{
    roles: roleSlice,
    permissions: PermissionSlice
  }
});

export default store;