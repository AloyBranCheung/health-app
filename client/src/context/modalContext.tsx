import React, { useState } from "react";

const INITIAL_STATE = {
  isVisible: false,
  onVisible: (bool: boolean) => {},
};

// createContext
const ModalContext = React.createContext(INITIAL_STATE);
export default ModalContext;

// context provider
interface Props {
  children: JSX.Element;
}
export const ModalContextProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisible = (bool: boolean) => {
    setIsVisible(bool);
  };

  const value = {
    onVisible,
    isVisible,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
