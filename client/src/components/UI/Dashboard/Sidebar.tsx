import React from "react";
import Logout from "./Logout";
import MenuItems from "./MenuItems";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const navDashboard = () => {
    navigate(`/dashboard/${userId}`);
  };
  return (
    <div className="bg-gradient-to-l shadow-2xl from-gradientStart fixed h-screen w-20 md:w-48 md:p-5">
      <div className="flex flex-col h-full justify-around gap-5 py-10 md:py-5">
        <div className="self-center">
          <img
            onClick={navDashboard}
            className="h-10 md:h-16 lg:h-20 w-10 md:w-16 lg:w-20 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/3820/3820205.png"
            alt="brandimg"
          />
        </div>
        <div className="flex flex-col">
          <MenuItems fill="#423066" />
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
}
