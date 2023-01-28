import React from "react";
import Modal from "../../UI/Modal";
import ModalHeader from "../../UI/ModalHeader";
import CurrPMHx from "./CurrPMHx";
import EditPMHxForm from "./EditPMHxForm";

export default function index() {
  return (
    <Modal wrapperId="popupModal">
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader headerText="Edit PMHx" />
        <div className="flex flex-col gap-5">
          <CurrPMHx />
          <EditPMHxForm />
        </div>
      </div>
    </Modal>
  );
}
