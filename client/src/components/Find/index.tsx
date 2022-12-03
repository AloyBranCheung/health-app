import React from "react";
import Appointments from "./Appointments";
import Search from "./Search";

export default function Find () {
  return (
    <div className="h-screen p-5 flex flex-row gap-5">
      <Search />
      <Appointments />
    </div>
  );
}
