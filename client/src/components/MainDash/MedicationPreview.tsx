import React from "react";

interface Props {
  name: string
  dose: number
  doseUnits: string
  timing: string
  lastTaken: string
  nextDue: string
}

export default function MedicationPreview ({
  name,
  dose,
  doseUnits,
  timing,
  lastTaken,
  nextDue
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-xl flex flex-row w-full p-5">
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2937/2937192.png"
              alt="pill"
              className="w-5 h-5"
            />
          </div>
          <div className="flex flex-row gap-2 w-full">
            <h1 className="md:text-lg">{name}</h1>
            <p className="md:text-lg">{`${dose}${doseUnits}`}</p>
          </div>
        </div>

        <div className="">
          <p className="text-xs">{timing}</p>
          <div className="">
            <p className="text-xs">Last Taken: {lastTaken}</p>
            <p className="text-xs">Next Due: {nextDue}</p>
          </div>
        </div>
      </div>

      {/* <div className="w-full items-center justify-center flex basis-1/12">
        <span>✅</span>
      </div> */}
    </div>
  );
}
