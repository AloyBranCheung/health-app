import React from "react";
import { motion } from "framer-motion";
import { useTracking } from "react-tracking";

// components
import HomeNavbar from "../components/Homepage/HomeNavbar";
import Masthead from "../components/Homepage/Masthead";
import Featured from "../components/Homepage/Featured";
import CallToAction from "../components/Homepage/CallToAction";
import Footer from "../components/Homepage/Footer";
import FeaturedDescriptions from "../components/Homepage/FeaturedDescriptions";
import ButtonToTop from "../components/Homepage/ButtonToTop";

export default function Home() {
  const { trackEvent } = useTracking();

  trackEvent({
    action: "home component mounted",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="home" className="relative flex w-full flex-col">
        <HomeNavbar />
        <Masthead />
        <FeaturedDescriptions />
        <Featured />
        <CallToAction />
        <Footer />
        <ButtonToTop />
      </div>
    </motion.div>
  );
}
