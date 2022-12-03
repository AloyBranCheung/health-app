import React from "react";

interface Props {
  text: string
  onClick?: (e: React.FormEvent) => void
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export default function Button ({ text, onClick, className, type }: Props) {
  return (
    <button
      type={type}
      className={`bg-mainFontColor text-white py-2 px-3 rounded-lg text-xs shadow-2xl ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
