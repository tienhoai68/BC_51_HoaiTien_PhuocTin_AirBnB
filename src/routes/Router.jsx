import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Home/Register/Register";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import AdminHome from "../pages/AdminHome/AdminHome";
import AdminRoom from "../pages/AdminRoom/AdminRoom";
import AdminUser from "../pages/AdminUser/AdminUser";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import AdminAddUser from "../pages/AdminAddUser/AdminUserAdd";
import AdminEditUser from "../pages/AdminEditUser/AdminEditUser";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/roomdetail",
          element: <RoomDetails />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/",
          element: <AdminHome />,
        },
        {
          path: "/admin/user",
          element: <AdminUser />,
        },
        {
          path: "/admin/addUser",
          element: <AdminAddUser />,
        },
        {
          path: "/admin/editUser/:userId",
          element: <AdminEditUser />,
        },
        {
          path: "/admin/phongthue",
          element: <AdminRoom />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routing;
}
