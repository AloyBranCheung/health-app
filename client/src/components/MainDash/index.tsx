import React from "react";
import Medications from "./Medications";
import MyGoals from "./MyGoals";
import ScheduledAppointments from "./ScheduledAppointments";
import Vitals from "./Vitals";
import WelcomeCard from "./WelcomeCard";

export default function MainDash () {
  return (
    <div className="max-h-screen lg:min-h-screen lg:max-h-screen p-5 text-mainFontColor flex flex-col md:grid gap-10 md:gap-5 md:grid-cols-12 md:grid-rows-6">
      <WelcomeCard className="md:col-span-12 md:row-span-2 lg:col-span-5 lg:row-span-3" />
      <Medications className="md:col-span-6 md:row-span-2 lg:col-span-5 lg:row-span-3" />
      <ScheduledAppointments className="md:col-span-6 md:row-span-1 lg:col-span-2 lg:row-span-6" />
      <MyGoals className="md:overflow-y-scroll md:col-span-6 md:row-span-1 lg:col-span-3 lg:row-span-3" />
      <Vitals className="md:col-span-12 md:row-span-2 lg:col-span-7 lg:row-span-3" />
    </div>
  );
}
