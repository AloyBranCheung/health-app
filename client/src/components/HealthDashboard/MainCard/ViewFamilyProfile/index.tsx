import React from "react";
import Modal from "../../../UI/Modal";
import ModalHeader from "../../../UI/ModalHeader";
import axios from "axios";
interface Props {
  familyName: string;
  mrn: string;
}

export default function ViewFamilyProfile({ mrn, familyName }: Props) {
  return (
    <Modal wrapperId="dashboardModal">
      <div className="p-5">
        <ModalHeader headerText={familyName} />
        <div></div>
      </div>
    </Modal>
  );
}
