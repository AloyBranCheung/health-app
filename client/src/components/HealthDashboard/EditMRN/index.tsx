import React from "react";
import Modal from "../../UI/Modal";
import ModalHeader from "../../UI/ModalHeader";
import EditMRNForm from "./EditMRNForm";

export default function index() {
  return (
    <Modal wrapperId="popupModal">
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader headerText="Edit MRN" />
        <div>
          <EditMRNForm />
        </div>
      </div>
    </Modal>
  );
}
