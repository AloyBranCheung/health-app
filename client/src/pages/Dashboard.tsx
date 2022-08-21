import React, { useContext } from "react";
import AuthContext from "../context/authContext";

// components
import Dash from "../components/Dashboard/index";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Dash />
    </div>
  );
}
