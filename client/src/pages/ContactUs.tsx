import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>ContactUs</div>
    </motion.div>
  );
}
