import React from "react";

interface FormInputErrMsgProps {
  text: string;
  className?: string;
}

export default function FormInputErrMsg({
  text,
  className,
}: FormInputErrMsgProps) {
  return (
    <div className={className}>
      <h1 className="text-red">
        <strong>{text}</strong>
      </h1>
    </div>
  );
}

FormInputErrMsg.defaultProps = {
  className: undefined,
};
