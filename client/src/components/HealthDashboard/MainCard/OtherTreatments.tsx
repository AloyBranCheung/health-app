import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

const DUMMY_DATA = [
  { id: "1", treatment: "CBT" },
  { id: "2", treatment: "Therapy" },
  { id: "3", treatment: "CBT" },
  { id: "4", treatment: "CBT" },
  { id: "5", treatment: "CBT" },
  { id: "6", treatment: "CBT" },
];

type Props = {
  className: string;
};

export default function OtherTreatments({ className }: Props) {
  const treatments = DUMMY_DATA.map((treatment) => {
    return (
      <div
        key={treatment.id}
        className="p-5 bg-white rounded-xl shadow-xl flex flex-row items-center gap-2"
      >
        <div className="">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.flaticon.com/512/1993/1993436.png"
            alt="treatmentIcon"
          />
        </div>
        <div className="w-full">
          <h1>{treatment.treatment}</h1>
        </div>
      </div>
    );
  });

  return (
    <Card className={`${className} h-full`}>
      <div className="p-5 gap-5 flex flex-col h-full">
        <div className="flex flex-row w-full items-center justify-between">
          <div>
            <h1>Other Treatments</h1>
          </div>
          <div>
            <Button text="Edit" />
          </div>
        </div>
        <div className="flex flex-col w-full h-full gap-5 overflow-y-scroll">
          {treatments}
        </div>
      </div>
    </Card>
  );
}
