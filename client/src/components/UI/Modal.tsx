import React, { SyntheticEvent, useContext } from "react";
import ModalContext from "../../context/modalContext";
import Card from "./Card";
import Portal from "./Portal";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, height: 0 }}
        onClick={handleBackdropClick}
        className="absolute flex lg:items-center justify-center h-full w-full bg-modalBackground"
      >
        <div
          onClick={handleContentClick}
          className="h-5/6 w-5/6 bg-secondaryColor rounded-xl absolute top-5"
        >
          <Card className="h-full w-full">
            <div>{children}</div>
          </Card>
        </div>
      </motion.div>
    </Portal>
  );
}
