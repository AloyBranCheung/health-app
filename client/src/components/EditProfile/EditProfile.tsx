import React, { useContext } from "react";
import ModalContext from "../../context/modalContext";
import Modal from "../UI/Modal";
import ExitIcon from "../UI/ExitIcon";
import EditProfileForm from "./EditProfileForm";

export default function EditProfile() {
  const { onVisible } = useContext(ModalContext);

  // Exit Icon
  const handleIconClick = () => {
    onVisible(false);
  };
  return (
    <Modal wrapperId="dashboardModal">
      <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-row justify-between items-center">
          <h1>
            <strong className="text-xl">Edit Profile</strong>
          </h1>
          <ExitIcon onClick={handleIconClick} />
        </div>
        <EditProfileForm />
      </div>
    </Modal>
  );
}
