import React, { useContext } from "react";
import ExitIcon from "../UI/ExitIcon";
import ModalContext from "../../context/modalContext";

interface ModalHeaderProps {
  headerText: string;
  button?: JSX.Element;
}

export default function ModalHeader({ headerText, button }: ModalHeaderProps) {
  const { onVisible } = useContext(ModalContext);

  // Exit Icon
  const handleIconClick = () => {
    onVisible("");
  };

  return (
    <div className="flex flex-row justify-between items-center gap-2">
      <h1>
        <strong className="text-xl">{headerText}</strong>
      </h1>
      <div className="flex gap-2 items-center">
        {button}
        <ExitIcon onClick={handleIconClick} />
      </div>
    </div>
  );
}
