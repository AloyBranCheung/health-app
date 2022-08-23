import React from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import AppointmentsCard from "./AppointmentsCard";

type Props = {
  className: string;
};

export default function ScheduledAppointments({ className }: Props) {
  return (
    <Card className={`${className}`}>
      <div className="flex flex-col p-5 h-full gap-1 lg:gap-5 overflow-hidden">
        <div className="flex flex-row justify-between md:flex-col">
          <h1>
            <strong className="text-mainFontColor text-base">
              Upcoming Appointments
            </strong>
          </h1>
          <div>
            <Link className="text-xs" to="">
              View all
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between overflow-hidden md:-mb-12 lg:-mb-0">
          <div className="flex flex-col gap-5 md:overflow-y-scroll basis-8/12">
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
          </div>
          <div className="flex">
            <img
              className="md:hidden lg:block w-full h-full object-contain"
              src="https://cdn-icons-png.flaticon.com/512/4288/4288953.png"
              alt="appointments"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
