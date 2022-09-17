import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
import Button from "../../UI/Button";
import DiseasesList from "./DiseasesList";
import EditPMHx from "../EditPMHx";

export default function PastMedicalHistory() {
  const { userHealth, isLoading } = useContext(AuthContext);
  const { isVisible, onVisible } = useContext(ModalContext);

  const handleModalClick = () => {
    onVisible("editPMHx");
  };

  return (
    <div className="flex flex-col w-full">
      {isVisible === "editPMHx" && <EditPMHx />}
      <div className="flex flex-row w-full justify-between items-center">
        <h1>
          <strong>Past Medical History</strong>
        </h1>
        <Button onClick={handleModalClick} text="Edit" />
      </div>
      <DiseasesList diseases={userHealth.pmHx} />
    </div>
  );
}
