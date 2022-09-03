import React from "react";
import Medications from "../../MainDash/Medications";
import Card from "../../UI/Card";
import MyFamily from "./MyFamily";
import OtherTreatments from "./OtherTreatments";
import Title from "./Title";

type Props = {
  className: string;
};

export default function index({ className }: Props) {
  return (
    <Card className={className}>
      <div className="p-5">
        <Title />
        <div className="grid gap-5 md:h-screen md:grid-rows-6">
          <Medications className="row-span-2" />
          <OtherTreatments className="row-span-2" />
          <MyFamily className="row-span-2" />
        </div>
      </div>
    </Card>
  );
}
