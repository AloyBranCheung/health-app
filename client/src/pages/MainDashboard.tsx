import React from "react";
// framer
import { motion } from "framer-motion";
// components
import MainDash from "../components/MainDash";

export default function MainDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="min-h-full">
        <MainDash />
      </div>
    </motion.div>
  );
}
