import React from "react";
// components
import Modal from "../UI/Modal";
import ModalHeader from "../UI/ModalHeader";

export default function AddAnotherVital() {
  return (
    <Modal wrapperId="popupModal">
      <div>
        <ModalHeader headerText="Add Vital Sign" />
        <div>Hello World</div>
      </div>
    </Modal>
  );
}
