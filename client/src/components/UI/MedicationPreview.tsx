import React from "react";

type Props = {
  name: string;
  dose: number;
  doseUnits: string;
  timing: string;
};

export default function MedicationPreview({
  name,
  dose,
  doseUnits,
  timing,
}: Props) {
  return (
    <div className="flex flex-row gap-5 w-full">
      <div className="w-full basis-14 lg:basis-28">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2937/2937192.png"
          alt="pill"
          className="h-10 w-10 lg:h-20 lg:w-20"
        />
      </div>
      <div className="w-full flex flex-col lg:justify-center">
        <div className="flex flex-row justify-start gap-5 w-full">
          <h1 className="lg:text-xl">{name}</h1>
          <p className="lg:text-xl">{`${dose}${doseUnits}`}</p>
        </div>
        <div className="flex flex-row w-full justify-between">
          <p className="text-xs lg:text-lg">{timing}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span>✅</span>
      </div>
    </div>
  );
}
