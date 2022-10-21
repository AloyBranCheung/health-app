import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../../context/authContext";
import LoadingSpinner from "../../../../../UI/LoadingSpinner";
import Button from "../../../../../UI/Button";
import BloodPressureChart from "../../../../../MainDash/BloodPressureChart";
import HeartRateChart from "../../../../../MainDash/HeartRateChart";

type Props = {
  className?: string;
  editEnabled?: boolean;
};

export default function Vitals({ className, editEnabled }: Props) {
  const navigate = useNavigate();
  const { isLoading } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("bloodPressure");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const navMyHealth = () => {
    navigate("/dashboard/myhealth");
  };
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg">
          <strong>Vitals</strong>
        </h1>
        <div className="flex flex-col md:flex-row gap-5">
          <select
            onChange={handleSelect}
            className="rounded-md outline-none shadow-lg"
          >
            <option value="bloodPressure">Blood Pressure</option>
            <option value="heartRate">Heart Rate</option>
          </select>
          {editEnabled && (
            <Button
              className="hidden md:block shadow-lg"
              text="Add Another"
              onClick={navMyHealth}
            />
          )}
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
  );
}
