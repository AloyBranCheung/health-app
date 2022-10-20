import React from "react";

interface Props {
  height?: string;
  width?: string;
}

export default function LoadingSpinner({ height, width }: Props) {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div
        className={`loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 ${height} ${width}`}
      ></div>
    </div>
  );
}
