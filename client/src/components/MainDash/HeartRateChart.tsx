import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/authContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Linechart () {
  const { userHealth } = useContext(AuthContext);
  const [heartRateLabels, setHeartRateLabels] = useState([""]);
  const [heartRate, setHeartRate] = useState([""]);

  useEffect(() => {
    const hrLabels = [""];
    const hr = [""];

    // heart rate data
    const sorted = userHealth.heartRate.sort((a, b) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    })
    sorted.forEach((dataPoint) => {
      hrLabels.push(dataPoint.date);
      hr.push(dataPoint.heartRate);
    })

    setHeartRateLabels(hrLabels.slice(1, 31));
    setHeartRate(hr.slice(1, 31));
  }, [userHealth.heartRate, userHealth.bloodPressure]);

  // config chart.js
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {}
  }

  // hr chart labels/values
  const labels = heartRateLabels;
  const hrValues = heartRate;

  const data = {
    labels,
    datasets: [
      {
        label: "Heart Rate",
        data: hrValues,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ]
  }

  const vitals = <Line options={options} data={data} />;

  // bp chart labels/values

  return <>{vitals}</>;
}
