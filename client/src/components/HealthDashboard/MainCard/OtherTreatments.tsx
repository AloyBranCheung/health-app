import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import EditOtherTreatments from "./EditOtherTreatments";

type Props = {
  className: string;
  isLoading: boolean;
};

export default function OtherTreatments({ className, isLoading }: Props) {
  const { userHealth } = useContext(AuthContext);
  const { onVisible, isVisible } = useContext(ModalContext);

  // Button click to open modal
  const handleClick = () => {
    onVisible("editOtherTx");
  };

  // render list of treatments
  const treatments = userHealth.otherTx.map((treatment) => {
    return (
      <div
        key={treatment._id}
        className="p-5 bg-white rounded-xl shadow-xl flex flex-row items-center gap-2"
      >
        <div className="">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.flaticon.com/512/1993/1993436.png"
            alt="treatmentIcon"
          />
        </div>
        <div className="w-full">
          <h1>{treatment.treatment}</h1>
        </div>
      </div>
    );
  });

  return (
    <Card className={`${className} h-full`}>
      <div className="p-5 gap-5 flex flex-col h-full">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="flex flex-row w-full items-center justify-between">
              {isVisible === "editOtherTx" && <EditOtherTreatments />}
              <div>
                <h1>
                  <strong>Other Treatments</strong>
                </h1>
              </div>
              <div>
                <Button onClick={handleClick} text="Edit" />
              </div>
            </div>
            <div className="flex flex-col w-full h-full gap-5 overflow-y-scroll">
              {treatments}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
