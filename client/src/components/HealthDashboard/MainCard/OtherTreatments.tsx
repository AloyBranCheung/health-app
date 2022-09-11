import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

type Props = {
  className: string;
  isLoading: boolean;
};

export default function OtherTreatments({ className, isLoading }: Props) {
  const { userHealth } = useContext(AuthContext);

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
              <div>
                <h1>
                  <strong>Other Treatments</strong>
                </h1>
              </div>
              <div>
                <Button text="Edit" />
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
