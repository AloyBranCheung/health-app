import React from "react";
import Modal from "../../UI/Modal";
import ModalHeader from "../../UI/ModalHeader";
import FamilyHxForm from "./FamilyHxForm";

export default function index() {
  return (
    <Modal wrapperId="popupModal">
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader headerText="Edit Family History" />
        <FamilyHxForm />
      </div>
    </Modal>
  );
}
