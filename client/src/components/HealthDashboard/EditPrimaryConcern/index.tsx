import React from "react";
import Modal from "../../UI/Modal";
import ModalHeader from "../../UI/ModalHeader";
import EditForm from "./EditForm";

export default function index () {
  return (
    <Modal wrapperId="dashboardModal">
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader headerText="Edit Primary Concern" />
        <EditForm />
      </div>
    </Modal>
  );
}
