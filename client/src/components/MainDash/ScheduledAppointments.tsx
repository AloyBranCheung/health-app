import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import AppointmentsCard from "./AppointmentsCard";
import LoadingSpinner from "../UI/LoadingSpinner";

type Props = {
  className: string;
};

export default function ScheduledAppointments({ className }: Props) {
  const { user, isLoading } = useContext(AuthContext);

  const appointments =
    user.appointments.length === 0 ? (
      <h1>Try finding a doctor.</h1>
    ) : (
      user.appointments.map((appointment) => {
        return (
          <AppointmentsCard
            key={appointment._id}
            dayOfWeek={appointment.dayOfWeek}
            dateOfMonth={appointment.dateOfMonth}
            service={appointment.service}
            date={appointment.date}
          />
        );
      })
    );

  return (
    <Card className={`${className}`}>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex flex-col p-5 h-full gap-1 lg:gap-5 overflow-y-scroll lg:overflow-hidden">
          <div className="flex flex-row justify-between md:flex-col mb-5 md:mb-0">
            <h1>
              <strong className="text-mainFontColor text-base">
                Upcoming Appointments
              </strong>
            </h1>
            <div>
              <Link className="text-xs" to="/dashboard/find">
                View all
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-full gap-10">
            <div className="flex flex-col gap-5 basis-8/12 lg:overflow-y-scroll lg:basis-6/12">
              {appointments}
            </div>
            <div className="flex h-full lg:basis-5/12">
              <img
                className="md:hidden lg:block w-full h-full object-contain"
                src="https://cdn-icons-png.flaticon.com/512/4288/4288953.png"
                alt="appointments"
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
