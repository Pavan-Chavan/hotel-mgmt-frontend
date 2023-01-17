import {
  createHashRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import TestLogin from "./pages/TestLogin"
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllMovies from "./pages/AllMovies";
import "./style.scss"

const Layout = () => {
  return (
    <div className="w-100">
      <Navbar />
        <div className="">
          <Outlet />
        </div>
      <Footer />
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id/:seoLink",
        element: <Single />,
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
        element: <TestLogin />,
      }
    ]
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
