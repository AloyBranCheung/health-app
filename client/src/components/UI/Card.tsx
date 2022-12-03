import React from "react";

interface Props {
  children: JSX.Element
  className?: string
}

export default function Card ({ children, className }: Props) {
  return (
    <div
      className={`bg-card-radial-gradient shadow-2xl rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}
