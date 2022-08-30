import React from "react";
import Card from "../UI/Card";
import MyProfile from "./MyProfile";
import MyDetails from "./MyDetails";
import MainCard from "./MainCard";

export default function HealthDashboard() {
  return (
    <section className="p-5 grid gap-5 lg:h-screen lg:grid-cols-12 lg:grid-rows-6 text-mainFontColor ">
      <MyProfile className="lg:col-span-3 lg:row-span-2" />
      <MyDetails className="lg:col-span-3 lg:row-span-4" />
      <MainCard className="lg:col-span-9 lg:row-span-full lg:col-start-4" />
    </section>
  );
}
