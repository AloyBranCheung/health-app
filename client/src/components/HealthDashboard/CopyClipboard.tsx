import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/authContext";

interface Props {
  isVisible: boolean
}

export default function CopyClipboard ({ isVisible }: Props) {
  const { userHealth } = useContext(AuthContext);
  const [textMRN, setTextMRN] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTextMRN(userHealth._id);
  }, [userHealth._id]);

  const copyText = () => {
    navigator.clipboard.writeText(textMRN);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  return (
    <div className="flex gap-1 w-full cursor-pointer" onClick={copyText}>
      {isVisible && (
        <>
          <div>
            <h1 className="break-all">{userHealth._id}</h1>
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
            {isCopied && (
              <div>
                <h1>Copied!</h1>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
