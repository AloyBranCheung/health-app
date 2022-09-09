import React from "react";
import Card from "./Card";

type Props = {
  children: JSX.Element;
};

export default function Modal({ children }: Props) {
  return (
    <div className="absolute flex items-center justify-center h-full w-full bg-modalBackground">
      <div className="h-4/6 w-4/6 bg-secondaryColor rounded-xl">
        <Card className="h-full w-full">
          <div>{children}</div>
        </Card>
      </div>
    </div>
  );
}
