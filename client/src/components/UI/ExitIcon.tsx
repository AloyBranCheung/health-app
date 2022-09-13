import React from "react";

interface Props {
  classNameSVG?: string;
  containerClassName?: string;
  onClick?: () => void;
}

export default function ExitIcon({
  classNameSVG,
  containerClassName,
  onClick,
}: Props) {
  return (
    <div className={`${containerClassName}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 cursor-pointer ${classNameSVG}`}
        onClick={onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
