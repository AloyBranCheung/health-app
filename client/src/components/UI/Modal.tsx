import React, { SyntheticEvent, useContext } from "react";
import ModalContext from "../../context/modalContext";
import Card from "./Card";
import Portal from "./Portal";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element
  wrapperId: string
}

export default function Modal ({ children, wrapperId }: Props) {
  const { onVisible } = useContext(ModalContext);

  const handleBackdropClick = () => {
    onVisible("");
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
        className="absolute flex lg:items-center justify-center h-full w-full bg-modalBackground p-5"
      >
        <div
          onClick={handleContentClick}
          className="md:min-w-[75%] lg:min-w-[25%]"
        >
          <Card className="bg-white sticky top-32 max-h-screen overflow-y-scroll">
            <div>{children}</div>
          </Card>
        </div>
      </motion.div>
    </Portal>
  );
}
