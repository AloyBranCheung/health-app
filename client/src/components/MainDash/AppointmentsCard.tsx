import React from "react";

interface Props {
  dayOfWeek: string
  dateOfMonth: number
  service: string
  date: string
}

export default function AppointmentsCard ({
  dayOfWeek,
  dateOfMonth,
  service,
  date
}: Props) {
  return (
    <div className="flex flex-row w-full shadow-xl">
      <div className="py-1 text-center flex flex-col items-center justify-center w-full basis-28 rounded-l-md bg-mainFontColor text-white">
        <h1 className="w-full">{dayOfWeek}</h1>
        <p className="w-full">{dateOfMonth}</p>
      </div>
      <div className="py-1 text-center w-full rounded-r-md bg-white flex flex-col items-center justify-center">
        <h1>{service}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}
