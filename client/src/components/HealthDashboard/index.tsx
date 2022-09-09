import React from "react";
import MyProfile from "./MyProfile";
import MyDetails from "./MyDetails";
import MainCard from "./MainCard";

export default function HealthDashboard() {
  return (
    <section className="p-5 flex flex-col gap-5 md:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-6 text-mainFontColor">
      <MyProfile className="lg:col-span-3 lg:row-span-2" />
      <MainCard className="lg:col-span-9 lg:row-span-6 lg:col-start-4" />
      <MyDetails className="lg:col-span-3 lg:row-span-4" />
    </section>
  );
}
