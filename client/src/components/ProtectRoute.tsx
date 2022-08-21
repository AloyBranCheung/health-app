import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "./UI/Dashboard";
import MainBoard from "./UI/Dashboard/MainBoard";
import Sidebar from "./UI/Dashboard/Sidebar";

export default function ProtectRoute() {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn() === false) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
}
