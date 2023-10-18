import { configureStore } from "@reduxjs/toolkit";
import roleSlice  from "./slice/RoleSlice";
import PermissionSlice from "./slice/PermissionSlice";
import SubUserSlice from "./slice/SubUserSlic";


const store = configureStore({
  reducer:{
    roles: roleSlice,
    permissions: PermissionSlice,
    subUser: SubUserSlice
  }
});

export default store;