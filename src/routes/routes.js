import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);
