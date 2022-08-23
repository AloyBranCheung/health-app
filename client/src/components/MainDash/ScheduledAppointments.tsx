import React from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

type Props = {
  className: string;
};

export default function ScheduledAppointments({ className }: Props) {
  return (
    <Card className={`${className}`}>
      <div className="flex flex-col p-5">
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
      </div>
    </Card>
  );
}
