import React from "react";
import Modal from "../Modal";
import ModalHeader from "../ModalHeader";

interface Props {
  wrapperId: string
  headerText: string
  children: JSX.Element
  button?: JSX.Element
}

export default function index ({
  wrapperId,
  headerText,
  button,
  children
}: Props) {
  return (
    <Modal wrapperId={wrapperId}>
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader button={button} headerText={headerText} />
        {children}
      </div>
    </Modal>
  );
}
