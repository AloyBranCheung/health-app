import React, { useContext } from "react";
import ModalContext from "../../../context/modalContext";
import LoadingSpinner from "../../UI/LoadingSpinner";
import CardScroll from "../../UI/CardScroll";
import FamilyList from "./FamilyList";
import EditFamilyModal from "./EditFamilyModal.tsx";

interface Props {
  className?: string
  isLoading: boolean
}

export default function MyFamily ({ className, isLoading }: Props) {
  const { onVisible, isVisible } = useContext(ModalContext);

  // open modal
  const handleOpen = () => {
    onVisible("editFamily");
  };

  return (
    <CardScroll
      onEdit={handleOpen}
      className={`${className}`}
      title="My Family"
    >
      <div className="flex flex-col gap-5 w-full">
        {isVisible === "editFamily" && <EditFamilyModal />}
        {isLoading ? <LoadingSpinner /> : <FamilyList />}
      </div>
    </CardScroll>
  );
}
