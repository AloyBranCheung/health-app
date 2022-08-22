import React from "react";
import Logout from "./Logout";
import MenuItems from "./MenuItems";
import ProfilePic from "./ProfilePic";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const navDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-gradient-to-l shadow-2xl from-gradientStart fixed h-screen w-20 md:w-48 md:p-5">
      <div className="flex flex-col h-full justify-between py-10 md:py-5">
        <div className="self-center">
          <img
            onClick={navDashboard}
            className="h-10 w-10 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/3820/3820205.png"
            alt="brandimg"
          />
        </div>
        <div className="flex flex-col">
          <ProfilePic />
          <MenuItems fill="#423066" />
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
}
