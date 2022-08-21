import React from "react";

// components
import MainBoard from "./MainBoard";
import Sidebar from "./Sidebar";

type Props = {
  children: JSX.Element;
};

export default function Dashboard({ children }: Props) {
  return (
    <div className="bg-gradient-to-br from-gradientStart via-gradientVia1 to-gradientTo">
      <Sidebar />
      <MainBoard>{children}</MainBoard>
    </div>
  );
}
