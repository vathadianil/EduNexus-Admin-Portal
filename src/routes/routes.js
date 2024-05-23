import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import ErrorPage from "../pages/ErrorPage";

export const routes = createBrowserRouter([
  { path: "/", element: <Login />, errorElement: <ErrorPage /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
