import React from "react";

import Sidebar from "./Sidebar";
import MainBoard from "./MainBoard";

export default function Dash() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <MainBoard />
    </div>
  );
}
