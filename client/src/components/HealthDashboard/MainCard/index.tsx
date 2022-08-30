import React from "react";
import Medications from "../../MainDash/Medications";
import Card from "../../UI/Card";
import Title from "./Title";

type Props = {
  className: string;
};

export default function index({ className }: Props) {
  return (
    <Card className={className}>
      <div className="p-5">
        <Title />
        <div className="grid">
          <Medications />
        </div>
      </div>
    </Card>
  );
}
