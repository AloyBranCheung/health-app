import React from "react";
import Button from "../../UI/Button";
import DiseasesList from "./DiseasesList";

const DUMMY_DATA = [
  "Hypertension",
  "Cholesterolemia",
  "Diabetes",
  "Stroke",
  "Heart Failure",
];

export default function FamilyHistory() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between items-center">
        <h1>
          <strong>Family History</strong>
        </h1>
        <Button text="Edit" />
      </div>
      <div className="flex w-full">
        <DiseasesList diseases={DUMMY_DATA} />
      </div>
    </div>
  );
}
