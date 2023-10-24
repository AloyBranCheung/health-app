import { useState, useEffect, useContext } from "react";
import AuthContext from "src/context/authContext";
// react-query
import useGetAllHealthInformationByUserId from "src/hooks/react-query/queries/useGetAllHealthInformationByUserId";
// chartjs
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
// types
import { BloodPressure } from "src/@types/Vitals";
import { UserHealth } from "src/context/authContextType";

export default function BloodPressureChart() {
  const { user } = useContext(AuthContext);
  const { data: userHealth } = useGetAllHealthInformationByUserId(user._id);

  const [bpLabels, setBpLabels] = useState([""]);
  const [bpSys, setBpSys] = useState([""]);
  const [bpDia, setBpDia] = useState([""]);

  useEffect(() => {
    const bloodPresLabels = [""];
    const bloodPresSys = [""];
    const bloodPresDia = [""];
    // blood pressure data
    if (userHealth && !("error" in userHealth)) {
      const sortBp = (
        userHealth?.bloodPressure as UserHealth["bloodPressure"]
      ).sort((a: BloodPressure, b: BloodPressure) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      });
      sortBp.forEach((dataPoint: BloodPressure) => {
        bloodPresLabels.push(dataPoint.date);
        bloodPresSys.push(dataPoint.sys);
        bloodPresDia.push(dataPoint.dia);
      });
      setBpLabels(bloodPresLabels.slice(1, 31));
      setBpSys(bloodPresSys.slice(1, 31));
      setBpDia(bloodPresDia.slice(1, 31));
      setBpLabels;
    }
  }, [userHealth]);

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

  // return <div>Hello World</div>;
}
