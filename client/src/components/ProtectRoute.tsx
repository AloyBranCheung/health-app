import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

export default function ProtectRoute() {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn() === false) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
