import React, { useContext } from "react";
import ModalContext from "../../context/modalContext";
import Button from "../UI/Button";

interface Props {
  onClick: (e: React.FormEvent) => void
}

export default function ButtonContainer ({ onClick }: Props) {
  const { onVisible } = useContext(ModalContext);

  const handleCancel = () => {
    onVisible("");
  };

  return (
    <div className="flex flex-row gap-2 justify-end">
      <Button onClick={handleCancel} text="Cancel" />
      <Button onClick={onClick} text="Submit" />
    </div>
  );
}
