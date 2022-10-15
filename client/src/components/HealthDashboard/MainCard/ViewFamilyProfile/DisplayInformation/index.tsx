import React from "react";
import {
  BloodPressure,
  HeartRate,
  LabWork,
  Imaging,
  Medications,
} from "../../../../../context/authContextType";
import MedicalHistory from "../../../../UI/Dashboard/MedicalHistory";

export interface HealthData {
  _id: string;
  age: number;
  primaryConcern: string;
  allergies: string[];
  sex: "M" | "F";
  gender: string;
  bloodGroup: "O-" | "O+" | "A-" | "A+" | "B-" | "B+" | "AB-" | "AB+";
  bloodPressure: BloodPressure[];
  heartRate: HeartRate[];
  pmHx: string[];
  familyHx: string[];
  imaging: Imaging[];
  labWork: LabWork[];
  medications: Medications;
  updatedAt: string;
}

interface Props {
  healthData: HealthData;
}

export default function DisplayInformation({ healthData }: Props) {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 rounded-xl">
      <h1 className="text-xs">Last Updated On: {healthData.updatedAt}</h1>
      <div className="md:columns-2">
        <div className="text-md">
          <p>Age: {healthData.age}</p>
          <p>Sex: {healthData.sex}</p>
        </div>
        <div className="text-md">
          <p>Blood Group: {healthData.bloodGroup}</p>
          <p>Gender: {healthData.gender}</p>
        </div>
      </div>
      <MedicalHistory header="Allergies" list={healthData.allergies} />
      <MedicalHistory header="Past Medical History" list={healthData.pmHx} />
      <MedicalHistory header="Family History" list={healthData.familyHx} />
    </div>
  );
}
