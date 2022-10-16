import React, { useEffect, useState } from "react";
import Modal from "../../../UI/Modal";
import ModalHeader from "../../../UI/ModalHeader";
import axios from "axios";
import DisplayInformation from "./DisplayInformation";
import { HealthData } from "./DisplayInformation";
interface Props {
  familyName: string;
  mrn: string;
}

export default function ViewFamilyProfile({ mrn, familyName }: Props) {
  const [data, setData] = useState({} as HealthData);
  // /api/mrn/healthinformation/mrn/:mrn - gets health information by mrn
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/mrn/healthinformation/mrn/${mrn}`);
        setData(data);
        console.log("Success");
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [mrn]);

  return (
    <Modal wrapperId="dashboardModal">
      <div className="p-5 flex flex-col gap-5 max-h-96">
        <ModalHeader headerText={familyName} />
        <DisplayInformation healthData={data} />
      </div>
    </Modal>
  );
}
