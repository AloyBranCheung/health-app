import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import Button from "../UI/Button";
import Card from "../UI/Card";
import MedicationPreview from "./MedicationPreview";
import LoadingSpinner from "../UI/LoadingSpinner";
import ModalContext from "../../context/modalContext";
import EditMedications from "./EditMedications";

type Props = {
  className?: string;
};

export default function Medications({ className }: Props) {
  const { userHealth, isLoading } = useContext(AuthContext);
  const { isVisible, onVisible } = useContext(ModalContext);

  // open edit modal
  const handleEdit = () => {
    onVisible("editMedications");
  };

  // medications list
  const medicationsList =
    userHealth.medications.length === 0 ? (
      <h1>Try adding a medication.</h1>
    ) : (
      userHealth.medications?.map((medication) => {
        return (
          <MedicationPreview
            key={medication._id}
            name={medication.name}
            dose={medication.dose}
            doseUnits={medication.doseUnits}
            timing={medication.timing}
            lastTaken={medication.lastTaken}
            nextDue={medication.nextDue}
          />
        );
      })
    );

  return (
    <Card className={`${className}`}>
      {isLoading ? (
        <div className="p-5 flex flex-col gap-5 items-center justify-center h-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="p-5 flex flex-col gap-5 h-full">
          {isVisible === "editMedications" && <EditMedications />}
          <div className="flex justify-between flex-row w-full items-center">
            <h1>
              <strong>My Medications</strong>
            </h1>
            <div>
              <Button className="shadow-lg" onClick={handleEdit} text="Edit" />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:overflow-y-scroll lg:grid lg:grid-cols-2">
            {medicationsList}
          </div>
        </div>
      )}
    </Card>
  );
}
