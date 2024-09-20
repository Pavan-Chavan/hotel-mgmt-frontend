import Register from "./pages/Register";
import Write from "./pages/Write";
import Dashboard from "./pages/Dashboard";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import AllMovies from "./pages/AllMovies";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import {Outlet} from "react-router-dom";
import RoleList from "./pages/Role/RoleList";
import CreateEditRole from "./pages/Role/CreateEditRole";
import PermissionList from "./pages/Permission/PermissionList";
import CreateEditPermission from "./pages/Permission/CreateEditPermission";
import SubUserList from "./pages/SubUser/SubUserList";
import CreateEditSubUser from "./pages/SubUser/CreateEditSubUser";
import StatusBar from "./components/StatusBar";

const Layout = () => {
  return (
    <div className="w-100">
      <div class="container-scroller">
        {<SideBar/>}
        <div class="container-fluid page-body-wrapper">
        {<Navbar/>}
		<StatusBar/>
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export const route = {
	path: "/",
	element: <Layout />,
	children: [
		{
			path: "/dashboard",
			element: <Dashboard />,
		},
		{
			path: "/movie/:id/:seoLink",
			element: <Single />,
		},
		{
			path: "/role",
			element: <RoleList />,
		},
		{
			path: "/permission",
			element: <PermissionList />,
		},
		{
			path: "/role/:mode/:roleId",
			element: <CreateEditRole />,
		},
		{
			path: "/permission/:mode",
			element: <CreateEditPermission />,
		},
    	{
			path: "/permission/:mode/:roleId",
			element: <CreateEditPermission />,
		},
		{
			path: "/role/:mode",
			element: <CreateEditRole />,
		},
		{
			path: "/write",
			element: <Write />,
		},
		{
			path: "/allMovies/:cat",
			element: <AllMovies/>
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		// sub user routes
		{
			path: "/subusers",
			element: <SubUserList />,
		},
		{
			path: "/subUser/:mode",
			element: <CreateEditSubUser />,
		},
    	{
			path: "/subUser/:mode/:subUserId",
			element: <CreateEditSubUser />,
		}
	]
};