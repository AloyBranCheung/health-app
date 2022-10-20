import React from "react";
import {
  BloodPressure,
  HeartRate,
  LabWork,
  Imaging,
  Medications,
  OtherTx,
} from "../../../../../context/authContextType";
import MedicalHistory from "../../../../UI/Dashboard/MedicalHistory";
import MedicationsList from "./MedicationsList";
import OtherTxList from "./OtherTxList";
import VitalsList from "./VitalsList";
import RecentImaging from "./RecentImaging";
import RecentLabwork from "./RecentLabwork";
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
  otherTx: OtherTx;
}

interface Props {
  healthData: HealthData;
}

export default function DisplayInformation({ healthData }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 bg-white p-5 rounded-xl h-full overflow-auto">
      <div>
        <h1 className="text-2xl">
          <strong>Summary</strong>
        </h1>
        <h2 className="text-xs">Last Updated On: {healthData?.updatedAt}</h2>
      </div>

      <h2 className="text-lg">
        <strong>Primary Concern:</strong> {healthData?.primaryConcern}
      </h2>
      <div className="md:columns-2">
        <div className="text-md">
          <p>Age: {healthData?.age}</p>
          <p>Sex: {healthData?.sex}</p>
        </div>
        <div className="text-md">
          <p>Blood Group: {healthData?.bloodGroup}</p>
          <p>Gender: {healthData?.gender}</p>
        </div>
      </div>
      <MedicalHistory header="Allergies" list={healthData?.allergies} />
      <MedicalHistory header="Past Medical History" list={healthData?.pmHx} />
      <MedicalHistory header="Family History" list={healthData?.familyHx} />
      <MedicationsList medications={healthData?.medications} />
      <OtherTxList otherTx={healthData?.otherTx} />
      <VitalsList />
      <RecentImaging data={healthData?.imaging} />
      <RecentLabwork />
    </div>
  );
}
