import React from "react";
import PastMedicalHistory from "./PastMedicalHistory";
import FamilyHistory from "./FamilyHistory";

export default function index () {
  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-xl p-5 gap-5">
      <PastMedicalHistory />
      <FamilyHistory />
    </div>
  );
}
