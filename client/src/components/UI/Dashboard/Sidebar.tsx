import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import Logout from "./Logout";
import MenuItems from "./MenuItems";
import ProfilePic from "./ProfilePic";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-gradient-to-l shadow-xl from-gradientStart fixed h-screen w-20">
      <div className="flex flex-col justify-between w-full min-h-screen">
        <div className="flex flex-col gap-16">
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
