import React from "react";
import EditModal from "../../../UI/EditModal";
import EditForm from "./EditForm";

export default function index() {
  return (
    <EditModal wrapperId="dashboardModal" headerText="Edit Other Treatments">
      <EditForm />
    </EditModal>
  );
}
