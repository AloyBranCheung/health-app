import React from "react";
import Modal from "../UI/Modal";
import ModalHeader from "../UI/ModalHeader";
import EditProfileForm from "./EditProfileForm";

export default function EditProfile() {
  return (
    <Modal wrapperId="popupModal">
      <div className="p-5 flex flex-col gap-5">
        <ModalHeader headerText="Edit Profile" />
        <EditProfileForm />
      </div>
    </Modal>
  );
}
