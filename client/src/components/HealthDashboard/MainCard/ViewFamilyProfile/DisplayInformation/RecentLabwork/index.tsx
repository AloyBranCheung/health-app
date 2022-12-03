import React from "react";
import { LabWork } from "../../../../../../context/authContextType";
import LoadingSpinner from "../../../../../UI/LoadingSpinner";

interface Props {
  data: LabWork[]
}

export default function RecentLabwork ({ data }: Props) {
  if (!data) {
    return <LoadingSpinner />;
  }
  const recentData = data[data.length - 1];
  return (
    <div>
      <h1 className="text-lg">
        <strong>Recent Labwork</strong>
      </h1>
      <h2 className="text-xs mb-3">
        <strong>Date:</strong> {recentData.dateTested}
      </h2>
      <div className="md:grid md:grid-cols-2">
        <ul>
          <li>
            <strong>WBC:</strong> {recentData.wbc}
          </li>
          <li>
            <strong>Hematocrit:</strong> {recentData.hct}
          </li>
          <li>
            <strong>Hemoglobin:</strong> {recentData.hgb}
          </li>
          <li>
            <strong>Platelets:</strong> {recentData.plt}
          </li>
          <li>
            <strong>Blood Glucose:</strong> {recentData.bloodGlucose}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Sodium:</strong> {recentData.sodium}
          </li>
          <li>
            <strong>Potassium:</strong> {recentData.potassium.toFixed(1)}
          </li>
          <li>
            <strong>Chloride:</strong> {recentData.chloride}
          </li>
          <li>
            <strong>Creatinine:</strong> {recentData.creatinine}
          </li>
        </ul>
      </div>
    </div>
  );
}
