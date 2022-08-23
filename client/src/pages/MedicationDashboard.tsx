import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import { motion } from "framer-motion";

export default function MedicationDashboard() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>MedicationDashboard</div>
    </motion.div>
  );
}
