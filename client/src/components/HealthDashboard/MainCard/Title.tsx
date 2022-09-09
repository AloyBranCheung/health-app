import React from "react";
type Props = {
  className: string;
};
export default function Title({ className }: Props) {
  return (
    <div className={`p-5 flex w-full items-center ${className}`}>
      <h1 className="text-3xl md:text-7xl">
        <strong>Hello, Jabba.</strong>
      </h1>
    </div>
  );
}
