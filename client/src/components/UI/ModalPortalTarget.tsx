import React, { useContext } from "react";
import ModalContext from "../../context/modalContext";

interface Props {
  targetId: string
}

export default function ModalPortalTarget ({ targetId }: Props) {
  const { isVisible } = useContext(ModalContext);
  return (
    <div
      className={`${
        isVisible !== "" ? "absolute w-full h-full z-50" : "hidden"
      }`}
      id={targetId}
    ></div>
  );
}
