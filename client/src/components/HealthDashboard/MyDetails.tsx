import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";
import MRN from "./MRN";
import HealthHistory from "./HealthHistory";
import Button from "../UI/Button";

type Props = {
  className: string;
};

export default function MyDetails({ className }: Props) {
  const { isLoading, userHealth } = useContext(AuthContext);
  return (
    <Card className={className}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="p-5 flex flex-col w-full gap-5 h-full">
          <div>
            <h1>
              <strong>My Details</strong>
            </h1>
          </div>
          <div className="flex flex-col w-full gap-5 lg:overflow-y-scroll">
            <MRN />
            <div className="bg-white p-5 rounded-xl shadow-xl flex">
              <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-between">
                <div className="flex flex-row gap-5">
                  <h1>
                    <strong>Primary Concern:</strong>
                  </h1>
                  <div>
                    <p>{userHealth.primaryConcern}</p>
                  </div>
                </div>
                <Button text="Change" />
              </div>
            </div>
            <HealthHistory />
          </div>
        </div>
      )}
    </Card>
  );
}
