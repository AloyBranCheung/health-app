import React, { useContext } from "react";
// context
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
// components
import Button from "../../UI/Button";
import DiseasesList from "./DiseasesList";
import EditPMHx from "../EditPMHx";
// utils
import { ModalVisibilityKeys } from "../../../utils/modalVisibilityStrings";

export default function PastMedicalHistory() {
  const { userHealth } = useContext(AuthContext);
  const { isVisible, onVisible } = useContext(ModalContext);

  const handleModalClick = () => {
    onVisible(ModalVisibilityKeys.EditPMHx);
  };

  return (
    <div className="flex flex-col w-full">
      {isVisible === ModalVisibilityKeys.EditPMHx && <EditPMHx />}
      <div className="flex flex-row w-full justify-between items-center">
        <h1>
          <strong>Past Medical History</strong>
        </h1>
        <Button onClick={handleModalClick} text="Edit" />
      </div>
      <DiseasesList diseases={userHealth?.pmHx ?? ["Add a disease."]} />
    </div>
  );
}
