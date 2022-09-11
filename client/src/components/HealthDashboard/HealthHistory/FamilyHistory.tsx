import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import Button from "../../UI/Button";
import DiseasesList from "./DiseasesList";

export default function FamilyHistory() {
  const { userHealth } = useContext(AuthContext);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between items-center">
        <h1>
          <strong>Family History</strong>
        </h1>
        <Button text="Edit" />
      </div>
      <div className="flex w-full">
        <DiseasesList diseases={userHealth.familyHx} />
      </div>
    </div>
  );
}
