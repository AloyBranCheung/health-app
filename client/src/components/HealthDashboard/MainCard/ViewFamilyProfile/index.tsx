import React, { useEffect } from "react";
import Modal from "../../../UI/Modal";
import ModalHeader from "../../../UI/ModalHeader";
import axios from "axios";
import DisplayInformation from "./DisplayInformation";
interface Props {
  familyName: string;
  mrn: string;
}

export default function ViewFamilyProfile({ mrn, familyName }: Props) {
  // /api/mrn/healthinformation/mrn/:mrn - gets health information by mrn
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/mrn/healthinformation/mrn/${mrn}`);
        console.log(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [mrn]);

  return (
    <Modal wrapperId="dashboardModal">
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader headerText={familyName} />
        <DisplayInformation />
      </div>
    </Modal>
  );
}
