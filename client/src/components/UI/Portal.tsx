import React from "react";
import { createPortal } from "react-dom";

interface Props {
  children: JSX.Element;
  wrapperId: string;
}

export default function Portal({ children, wrapperId }: Props) {
  return createPortal(
    <div>{children}</div>,
    document.getElementById(wrapperId)!
  );
}
