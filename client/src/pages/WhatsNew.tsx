import React from "react";
import { motion } from "framer-motion";

export default function WhatsNew() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>WhatsNews</div>
    </motion.div>
  );
}
