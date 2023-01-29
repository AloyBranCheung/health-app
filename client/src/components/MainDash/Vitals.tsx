import React, { useContext, useState } from "react";
// context
import AuthContext from "../../context/authContext";
import ModalContext from "../../context/modalContext";
// components
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import Button from "../UI/Button";
import BloodPressureChart from "./BloodPressureChart";
import HeartRateChart from "./HeartRateChart";
import { ModalVisibilityKeys } from "../../utils/modalVisibilityStrings";
import AddAnotherVital from "./AddAnotherVital";

interface Props {
  className?: string;
}

export default function Vitals({ className }: Props) {
  const { onVisible, isVisible } = useContext(ModalContext);
  const { isLoading } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("bloodPressure");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const handleAddAnotherVital = () => {
    onVisible(ModalVisibilityKeys.AddAnotherVitals);
  };

  return (
    <Card className={className}>
      <div className="flex flex-col h-full p-5 gap-5">
        {isVisible === ModalVisibilityKeys.AddAnotherVitals && (
          <AddAnotherVital />
        )}
        <div className="flex flex-row justify-between">
          <h1 className="">
            <strong>My Vitals</strong>
          </h1>
          <div className="flex flex-col md:flex-row gap-5">
            <select
              onChange={handleSelect}
              className="rounded-md outline-none shadow-lg"
            >
              <option value="bloodPressure">Blood Pressure</option>
              <option value="heartRate">Heart Rate</option>
            </select>
            <Button
              className="hidden md:block shadow-lg"
              text="Add Another"
              onClick={handleAddAnotherVital}
            />
          </div>
        </div>
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="w-full h-full bg-white rounded-xl p-5 shadow-xl">
            {selectedOption === "bloodPressure" ? (
              <BloodPressureChart />
            ) : (
              <HeartRateChart />
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
