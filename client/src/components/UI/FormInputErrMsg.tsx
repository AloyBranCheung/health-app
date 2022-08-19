import React from "react";

type Props = {
  text: string;
};

export default function FormInputErrMsg({ text }: Props) {
  return (
    <div>
      <h1 className="text-red">
        <strong>{text}</strong>
      </h1>
    </div>
  );
}
