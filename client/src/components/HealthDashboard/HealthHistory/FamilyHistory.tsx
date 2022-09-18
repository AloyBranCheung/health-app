import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
import Button from "../../UI/Button";
import DiseasesList from "./DiseasesList";
import EditFamilyHx from "../EditFamilyHx";

export default function FamilyHistory() {
  const { userHealth } = useContext(AuthContext);
  const { isVisible, onVisible } = useContext(ModalContext);

  const handleClick = () => {
    onVisible("editFamilyHx");
  };

  return (
    <div className="flex flex-col w-full">
      {isVisible === "editFamilyHx" && <EditFamilyHx />}
      <div className="flex flex-row w-full justify-between items-center">
        <h1>
          <strong>Family History</strong>
        </h1>
        <Button onClick={handleClick} text="Edit" />
      </div>
      <div className="flex w-full">
        <DiseasesList diseases={userHealth.familyHx} />
      </div>
    </div>
  );
}
