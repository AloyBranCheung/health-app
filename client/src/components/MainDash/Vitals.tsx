import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import AuthContext from "../../context/authContext";
import LoadingSpinner from "../UI/LoadingSpinner";
import Button from "../UI/Button";
import BloodPressureChart from "./BloodPressureChart";
import HeartRateChart from "./HeartRateChart";

type Props = {
  className: string;
};

export default function Vitals({ className }: Props) {
  const { isLoading } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("bloodPressure");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };
  return (
    <Card className={className}>
      <div className="flex flex-col h-full p-5 gap-5">
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
            <Button className="hidden md:block shadow-lg" text="Add Another" />
          </div>
        </div>
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="w-full h-full">
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
