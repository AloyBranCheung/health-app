import React from "react";
import Button from "./Button";
import Card from "./Card";

type Props = {
  className?: string;
  title: string;
  children: JSX.Element;
};

export default function CardScroll({ className, children, title }: Props) {
  return (
    <Card className={`p-5 ${className}`}>
      <div className="flex flex-col w-full gap-5 h-full">
        <div className="flex flex-row w-full items-center justify-between">
          <div>
            <strong>{title}</strong>
          </div>
          <div>
            <Button text="Edit" />
          </div>
        </div>
        <div className="flex w-full md:overflow-y-scroll">{children}</div>
      </div>
    </Card>
  );
}
