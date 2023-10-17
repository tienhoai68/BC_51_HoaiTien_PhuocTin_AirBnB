import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import AdminHome from "../pages/AdminHome/AdminHome";
import AdminRoom from "../pages/AdminRoom/AdminRoom";
import AdminUser from "../pages/AdminUser/AdminUser";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import AdminAddUser from "../pages/AdminAddUser/AdminUserAdd";
import RoomByCity from "../pages/RoomByCity/RoomByCity";
import PersonaInfo from "../pages/PersonaInfo/PersonaInfo";
import Register from "../pages/Register/Register";
import AdminEditUser from "../pages/AdminEditUser/AdminEditUser";
import TicketByUser from "../pages/TicketByUser/TicketByUser";

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
          path: "/room-detail",
          element: <RoomDetails />,
        },
        {
          path: "/room-by-city/:roomCityId",
          element: <RoomByCity />,
        },
        {
          path: "/personal-info",
          element: <PersonaInfo />,
        },
        {
          path: "/ticket-by-user",
          element: <TicketByUser />,
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
