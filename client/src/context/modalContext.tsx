/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

const INITIAL_STATE = {
  isVisible: "",
  onVisible: (type: string) => {},
};

// createContext
const ModalContext = React.createContext(INITIAL_STATE);
export default ModalContext;

// context provider
interface Props {
  children: JSX.Element;
}
export const ModalContextProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState("");

  const onVisible = (type: string) => {
    setIsVisible(type);
  };

  const value = {
    onVisible,
    isVisible,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
