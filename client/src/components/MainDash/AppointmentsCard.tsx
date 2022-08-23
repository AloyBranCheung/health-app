import React from "react";

export default function AppointmentsCard() {
  return (
    <div className="flex flex-row w-full shadow-xl">
      <div className="py-1 text-center flex flex-col items-center justify-center w-full basis-28 rounded-l-md bg-mainFontColor text-white">
        <h1 className="w-full">Mon</h1>
        <p className="w-full">28</p>
      </div>
      <div className="py-1 text-center w-full rounded-r-md bg-white flex flex-col items-center justify-center">
        <h1>Cardiology</h1>
        <p>2022-08-22 9:00am</p>
      </div>
    </div>
  );
}
