import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/", { replace: true });
  };
  return (
    <div className="flex items-center justify-center md:justify-between mb-10 text-mainFontColor cursor-pointer">
      <h1 className="hidden md:block">Logout</h1>
      <div onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </div>
    </div>
  );
}
