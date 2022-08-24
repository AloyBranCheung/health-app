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
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function BloodPressureChart() {
  const { userHealth } = useContext(AuthContext);
  const [bpLabels, setBpLabels] = useState([""]);
  const [bpSys, setBpSys] = useState([""]);
  const [bpDia, setBpDia] = useState([""]);

  useEffect(() => {
    const bloodPresLabels = [""];
    const bloodPresSys = [""];
    const bloodPresDia = [""];
    // blood pressure data
    const sortBp = userHealth.bloodPressure.sort((a, b) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    });
    sortBp.forEach((dataPoint) => {
      bloodPresLabels.push(dataPoint.date);
      bloodPresSys.push(dataPoint.sys);
      bloodPresDia.push(dataPoint.dia);
    });
    setBpLabels(bloodPresLabels.slice(1, 31));
    setBpSys(bloodPresSys.slice(1, 31));
    setBpDia(bloodPresDia.slice(1, 31));
  }, [userHealth.bloodPressure]);

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
    plugins: {},
  };

  // BP Chart labels/values
  const labels = bpLabels;
  const sys = bpSys;
  const dia = bpDia;

  const bpData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: sys,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Diastolic",
        data: dia,
        borderColor: "rgb(130, 255, 99)",
        backgroundColor: "rgba(56, 205, 48, 0.5)",
      },
    ],
  };
  const bloodPressures = <Line options={options} data={bpData} />;

  return <>{bloodPressures}</>;
}
