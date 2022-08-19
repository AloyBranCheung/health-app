import React from "react";
import { useLocation } from "react-router-dom";

export default function Signup() {
  const location = useLocation();
  console.log(location.state);
  return <div>Signup</div>;
}
