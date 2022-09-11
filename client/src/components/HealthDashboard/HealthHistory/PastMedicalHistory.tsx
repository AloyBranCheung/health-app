import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import Button from "../../UI/Button";
import DiseasesList from "./DiseasesList";

export default function PastMedicalHistory() {
  const { userHealth } = useContext(AuthContext);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between items-center">
        <h1>
          <strong>Past Medical History</strong>
        </h1>
        <Button text="Edit" />
      </div>
      <DiseasesList diseases={userHealth.pmHx} />
    </div>
  );
}
