import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "./UI/Dashboard";
import { motion } from "framer-motion";

export default function ProtectRoute() {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn() === false) {
    return <Navigate to="/login" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Dashboard>
        <Outlet />
      </Dashboard>
    </motion.div>
  );
}
