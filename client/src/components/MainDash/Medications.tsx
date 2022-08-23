import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import MedicationPreview from "../UI/MedicationPreview";

type Props = {
  className: string;
};

const DUMMY_DATA = [
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
  {
    name: "Bisoprolol",
    dose: 5,
    doseUnits: "mg",
    timing: "Once a day",
  },
];

export default function Medications({ className }: Props) {
  const navigate = useNavigate();
  const navMeds = () => {
    navigate("/dashboard/medication");
  };

  // medications list
  const medicationsList = DUMMY_DATA.map((medication) => (
    <MedicationPreview
      name={medication.name}
      dose={medication.dose}
      doseUnits={medication.doseUnits}
      timing={medication.timing}
    />
  ));
  return (
    <Card className={`${className}`}>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex justify-between flex-row w-full items-center">
          <h1>
            <strong className="">My Medications</strong>
          </h1>
          <div>
            <Button onClick={navMeds} text="Add More" />
          </div>
        </div>
        <div className="flex flex-col gap-5 px-10">{medicationsList}</div>
      </div>
    </Card>
  );
}
