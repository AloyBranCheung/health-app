import React from "react";
import MyGoals from "./MyGoals";
import WelcomeCard from "./WelcomeCard";

export default function MainDash() {
  return (
    <div className="text-mainFontColor grid md:grid-cols-12 gap-10">
      <WelcomeCard className="md:col-span-5" />
      <MyGoals className="md:col-span-5" />
    </div>
  );
}
