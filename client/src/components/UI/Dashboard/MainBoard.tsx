import React from "react";
interface Props {
  children: JSX.Element
}
export default function MainBoard ({ children }: Props) {
  return (
    <div className="ml-20 md:ml-48 h-screen bg-gradient-to-br from-gradientStart via-gradientVia1 to-gradientTo">
      <div className="w-full h-full overflow-hidden">
        <div className="h-full w-full overflow-y-scroll lg:overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
