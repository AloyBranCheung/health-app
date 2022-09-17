import React, { useContext } from "react";
import ExitIcon from "../UI/ExitIcon";
import ModalContext from "../../context/modalContext";

interface Props {
  headerText: string;
}

export default function ModalHeader({ headerText }: Props) {
  const { onVisible } = useContext(ModalContext);

  // Exit Icon
  const handleIconClick = () => {
    onVisible("");
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <h1>
        <strong className="text-xl">{headerText}</strong>
      </h1>
      <ExitIcon onClick={handleIconClick} />
    </div>
  );
}
