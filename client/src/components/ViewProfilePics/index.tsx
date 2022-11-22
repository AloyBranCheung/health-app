import React from "react";

// components
import Modal from "../UI/Modal";
import ModalHeader from "../UI/ModalHeader";
import LoadingSpinner from "../UI/LoadingSpinner";

import useViewProfilePics from "../../hooks/useViewProfilePics";
import ProfilePicsGallery from "./ProfilePicsGallery";

export default function ViewProfilePics() {
  const { data, isError, isLoading } = useViewProfilePics();

  if (isError) {
    return (
      <Modal wrapperId="dashboardModal">
        <div className="p-5 flex flex-col gap-5">Something went wrong</div>
      </Modal>
    );
  }

  return (
    <Modal wrapperId="dashboardModal">
      <div className="p-5 flex flex-col gap-5 max-h-mediumFull">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <ModalHeader headerText="Change Profile Pics" />
            <ProfilePicsGallery data={data?.data} />
          </>
        )}
      </div>
    </Modal>
  );
}
