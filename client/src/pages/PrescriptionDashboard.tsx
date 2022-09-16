import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import { motion } from "framer-motion";

export default function PrescriptionDashboard() {
  const { user, setUser } = useContext(AuthContext);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div >Prescriptions Dashboard</div>
    </motion.div>
  );
}
