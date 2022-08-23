import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../context/authContext";
import Medications from "./Medications";
import MyGoals from "./MyGoals";
import ScheduledAppointments from "./ScheduledAppointments";
import Vitals from "./Vitals";
import WelcomeCard from "./WelcomeCard";
import axios from "axios";

export default function MainDash() {
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  // get user data and it to app state
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get(`/dashboard/user/${userId}`);
      setUser(response.data);
    };
    fetchData();
    setIsLoading(false);
  }, [userId, setUser]);

  return (
    <div className="min-h-screen p-5 text-mainFontColor grid gap-10 md:grid-cols-12 md:grid-rows-6">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <WelcomeCard className="md:col-span-12 md:row-span-2 lg:col-span-5 lg:row-span-3" />
          <Medications className="md:col-span-6 md:row-span-2 lg:col-span-5 lg:row-span-3" />
          <ScheduledAppointments className="md:col-span-6 md:row-span-1 lg:col-span-2 lg:row-span-6" />
          <MyGoals className="md:col-span-6 md:row-span-1 lg:col-span-3 lg:row-span-3" />
          <Vitals className="md:col-span-12 md:row-span-2 lg:col-span-7 lg:row-span-3" />
        </>
      )}
    </div>
  );
}
