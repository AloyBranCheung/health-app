import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ text, onClick, className }: Props) {
  return (
    <button
      className={`bg-mainFontColor text-white p-2 rounded-lg text-xs shadow-2xl ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}