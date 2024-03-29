import React, { useContext } from "react";
// context
import AuthContext from "../../context/authContext";
import ModalContext from "../../context/modalContext";
// components
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";
import MRN from "./MRN";
import HealthHistory from "./HealthHistory";
import Button from "../UI/Button";
import EditPrimaryConcern from "./EditPrimaryConcern";
// utils
import { ModalVisibilityKeys } from "../../utils/modalVisibilityStrings";

export interface MyDetailsProps {
  className: string;
}

export default function MyDetails({ className }: MyDetailsProps) {
  const { isLoading, userHealth } = useContext(AuthContext);
  const { onVisible, isVisible } = useContext(ModalContext);

  const handleClick = () => {
    onVisible(ModalVisibilityKeys.EditPrimaryConcern);
  };

  return (
    <Card className={className}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="p-5 flex flex-col w-full gap-5 h-full">
          {isVisible === ModalVisibilityKeys.EditPrimaryConcern && (
            <EditPrimaryConcern />
          )}
          <div>
            <h1>
              <strong>My Details</strong>
            </h1>
          </div>
          <div className="flex flex-col w-full gap-5 lg:overflow-y-scroll">
            <MRN />
            <div className="bg-white p-5 rounded-xl shadow-xl flex">
              <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-between">
                <div className="flex flex-row gap-1">
                  <h1>
                    <strong>Primary Concern:</strong>
                  </h1>
                  <div>
                    <p>
                      {userHealth?.primaryConcern ?? "Add a primary concern."}
                    </p>
                  </div>
                </div>
                <Button onClick={handleClick} text="Change" />
              </div>
            </div>
            <HealthHistory />
          </div>
        </div>
      )}
    </Card>
  );
}
