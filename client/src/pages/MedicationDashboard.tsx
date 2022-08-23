import React, { useContext } from "react";
import AuthContext from "../context/authContext";

export default function MedicationDashboard() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  return <div>MedicationDashboard</div>;
}
