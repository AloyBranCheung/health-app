import React from "react";
import { motion } from "framer-motion";
import HealthDashboard from "../components/HealthDashboard";

export default function MyHealth() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HealthDashboard />
    </motion.div>
  );
}
