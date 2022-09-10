import React, { useContext } from "react";
import AuthContext from "../../context/authContext";

interface Props {
  isVisible: boolean;
}

export default function CopyClipboard({ isVisible }: Props) {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex gap-1 w-full">
      {isVisible && (
        <>
          <div>
            <h1 className="break-all">{user.MRN}</h1>
          </div>
          <div className="w-full basis-1/12 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
