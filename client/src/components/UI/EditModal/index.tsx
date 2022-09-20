import React from "react";
import Modal from "../Modal";
import ModalHeader from "../ModalHeader";

interface Props {
  wrapperId: string;
  headerText: string;
  children: JSX.Element;
}

export default function index({ wrapperId, headerText, children }: Props) {
  return (
    <Modal wrapperId={wrapperId}>
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader headerText={headerText} />
        {children}
      </div>
    </Modal>
  );
}
