import React from "react";
import Card from "../UI/Card";

type Props = {
  className: string;
};

export default function Medications({ className }: Props) {
  return (
    <Card className={`${className}`}>
      <div className="p-5">
        <div className="">
          <h1>
            <strong className="">My Medications</strong>
          </h1>
        </div>
      </div>
    </Card>
  );
}
