import React from "react";
import { motion } from "framer-motion";

// components
import HomeNavbar from "../components/Homepage/HomeNavbar";
import Masthead from "../components/Homepage/Masthead";
import Featured from "../components/Homepage/Featured";
import CallToAction from "../components/Homepage/CallToAction";
import Footer from "../components/Homepage/Footer";
import FeaturedDescriptions from "../components/Homepage/FeaturedDescriptions";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex w-full flex-col">
        <HomeNavbar />
        <Masthead />
        <FeaturedDescriptions />
        <Featured />
        <CallToAction />
        <Footer />
      </div>
    </motion.div>
  );
}
