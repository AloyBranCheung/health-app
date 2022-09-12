import React, { useContext } from "react";
import ModalContext from "../../context/modalContext";

export default function ModalPortalTarget() {
  const { isVisible } = useContext(ModalContext);
  return (
    <div
      className={`${isVisible ? "absolute w-full h-full" : "hidden"}`}
      id="dashboardModal"
    ></div>
  );
}
