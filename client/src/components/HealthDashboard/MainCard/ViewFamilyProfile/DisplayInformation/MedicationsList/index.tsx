import React from "react";
import { Medications } from "../../../../../../context/authContextType";

interface Props {
  medications: Medications
}

export default function MedicationsList ({ medications }: Props) {
  const meds = medications?.map((medication) => {
    return (
      <li key={medication._id}>
        <p>{medication.name}</p>
        <div className="flex flex-row">
          <p className="text-xs">{medication.dose}</p>
          <p className="text-xs">{medication.doseUnits}</p>
        </div>
        <p className="text-xs">{medication.timing}</p>
      </li>
    );
  })

  return (
    <div>
      <h1 className="text-lg">
        <strong>Medications</strong>
      </h1>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {meds}
      </ul>
    </div>
  );
}
