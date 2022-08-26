import React from "react";
import { motion } from "framer-motion";
import Find from "../components/Find";

export default function SearchMD() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Find />
    </motion.div>
  );
}
