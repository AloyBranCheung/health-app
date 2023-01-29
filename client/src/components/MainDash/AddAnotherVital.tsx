import React from "react";
// components
import EditModal from "../UI/EditModal";
import PrimaryDropdown from "../UI/FormElements/PrimaryDropdown";

export default function AddAnotherVital() {
  return (
    <EditModal wrapperId="popupModal" headerText="Add Vital Sign">
      <form>
        <PrimaryDropdown options={["alpha", "beta", "charlie"]} />
      </form>
    </EditModal>
  );
}
