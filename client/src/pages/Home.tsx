import React from "react";

// components
import HomeNavbar from "../components/Homepage/HomeNavbar";
import Masthead from "../components/Homepage/Masthead";
import Featured from "../components/Homepage/Featured";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col">
      <HomeNavbar />
      <Masthead />
      <Featured />
    </div>
  );
}
