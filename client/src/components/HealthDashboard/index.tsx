import React from "react";
import MyProfile from "./MyProfile";
import MyDetails from "./MyDetails";
import MainCard from "./MainCard";
import ModalPortalTarget from "../UI/ModalPortalTarget";

export default function HealthDashboard() {
  return (
    <>
      <ModalPortalTarget targetId="dashboardModal" />
      <section className="p-5 flex flex-col gap-5 md:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-6 text-mainFontColor relative">
        <MyProfile className="lg:col-span-3 lg:row-span-2" />
        <MainCard className="lg:col-span-9 lg:row-span-6 lg:col-start-4" />
        <MyDetails className="lg:col-span-3 lg:row-span-4" />
      </section>
    </>
  );
}
