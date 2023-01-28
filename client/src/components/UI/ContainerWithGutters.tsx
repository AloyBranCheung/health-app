import React from "react";

interface ContainerWithGuttersProps {
  children: React.ReactNode;
}

export default function ContainerWithGutters({
  children,
}: ContainerWithGuttersProps) {
  return <div className="max-w-screen-xl">{children}</div>;
}
