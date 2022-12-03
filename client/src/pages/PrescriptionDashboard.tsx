import React from "react";
import { motion } from "framer-motion";

export default function PrescriptionDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>Prescriptions Dashboard</div>
    </motion.div>
  );
}
