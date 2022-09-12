import React, { SyntheticEvent, useContext } from "react";
import ModalContext from "../../context/modalContext";
import Card from "./Card";
import Portal from "./Portal";

type Props = {
  children: JSX.Element;
  wrapperId: string;
};

export default function Modal({ children, wrapperId }: Props) {
  const { onVisible } = useContext(ModalContext);

  const handleBackdropClick = () => {
    onVisible(false);
  };

  const handleContentClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal wrapperId={wrapperId}>
      <div
        onClick={handleBackdropClick}
        className="absolute flex items-center justify-center h-full w-full bg-modalBackground"
      >
        <div
          onClick={handleContentClick}
          className="h-4/6 w-4/6 bg-secondaryColor rounded-xl"
        >
          <Card className="h-full w-full">
            <div>{children}</div>
          </Card>
        </div>
      </div>
    </Portal>
  );
}
