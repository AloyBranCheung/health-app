import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import MedicationPreview from "./MedicationPreview";
import LoadingSpinner from "../UI/LoadingSpinner";

type Props = {
  className: string;
};

export default function Medications({ className }: Props) {
  const { userHealth, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const navMeds = () => {
    navigate("/dashboard/medication");
  };

  // medications list
  const medicationsList = userHealth.medications?.map((medication, index) => (
    <MedicationPreview
      key={medication._id}
      name={medication.name}
      dose={medication.dose}
      doseUnits={medication.doseUnits}
      timing={medication.timing}
    />
  ));
  return (
    <Card className={`${className}`}>
      {isLoading ? (
        <div className="p-5 flex flex-col gap-5 items-center justify-center h-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="p-5 flex flex-col gap-5">
          <div className="flex justify-between flex-row w-full items-center">
            <h1>
              <strong className="">My Medications</strong>
            </h1>
            <div>
              <Button onClick={navMeds} text="Add More" />
            </div>
          </div>

          <div className="flex flex-col gap-5">{medicationsList}</div>
        </div>
      )}
    </Card>
  );
}
