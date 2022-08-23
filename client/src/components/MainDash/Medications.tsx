import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

type Props = {
  className: string;
};

export default function Medications({ className }: Props) {
  return (
    <Card className={`${className}`}>
      <div className="p-5">
        <div className="flex justify-between flex-row w-full items-center">
          <h1>
            <strong className="">My Medications</strong>
          </h1>
          <div>
            <Button text="Add More" />
          </div>
        </div>
      </div>
    </Card>
  );
}
