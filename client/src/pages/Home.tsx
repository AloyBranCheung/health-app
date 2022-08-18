import React from "react";

// components
import HomeNavbar from "../components/Homepage/HomeNavbar";
import Masthead from "../components/Homepage/Masthead";
import Featured from "../components/Homepage/Featured";
import CallToAction from "../components/Homepage/CallToAction";
import Footer from "../components/Homepage/Footer";
import FeaturedDescriptions from "../components/Homepage/FeaturedDescriptions";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col">
      <HomeNavbar />
      <Masthead />
      <FeaturedDescriptions />
      <Featured />
      <CallToAction />
      <Footer />
    </div>
  );
}
