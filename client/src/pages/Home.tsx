import React from "react";

// components
import HomeNavbar from "../components/Homepage/HomeNavbar";
import Masthead from "../components/Homepage/Masthead";
import Featured from "../components/Homepage/Featured";
import Newsletter from "../components/Homepage/Newsletter";
import Footer from "../components/Homepage/Footer";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col">
      <HomeNavbar />
      <Masthead />
      <Featured />
      <Newsletter />
      <Footer />
    </div>
  );
}
