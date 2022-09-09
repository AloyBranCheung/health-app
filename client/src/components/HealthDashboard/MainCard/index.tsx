import React from "react";
import Medications from "../../MainDash/Medications";
import Vitals from "../../MainDash/Vitals";
import MyFamily from "./MyFamily";
import OtherTreatments from "./OtherTreatments";
import Title from "./Title";

type Props = {
  className: string;
};

export default function index({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col h-full gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-6 rounded-xl">
        <Title className="lg:row-start-1 lg:row-span-1 lg:col-span-2" />
        <Medications className="lg:row-span-2 lg:row-start-2 lg:col-span-1 lg:col-start-1" />
        <MyFamily className="lg:row-span-2 lg:row-start-2 lg:col-span-1 lg:col-start-2" />
        <OtherTreatments className="lg:row-span-3 lg:row-start-4 lg:col-span-1 lg:col-start-1" />
        <Vitals className="lg:row-span-3 lg:row-start-4 lg:col-span-1 lg:col-start-2" />
      </div>
    </div>
  );
}
