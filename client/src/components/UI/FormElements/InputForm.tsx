import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import FormInputErrMsg from "../FormInputErrMsg";

interface InputFormProps<FV extends FieldValues> {
  label: string;
  name: Path<FV>;
  control: Control<FV>;
  type?: string;
  autoComplete?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  maxLength?: number;
  readOnly?: boolean;
  errorMessage?: string;
}

export default function InputForm<FV extends FieldValues>({
  control,
  label,
  name,
  type,
  autoComplete,
  onFocus,
  className,
  maxLength,
  readOnly,
  errorMessage,
}: InputFormProps<FV>) {
  return (
    <div>
      <div
        className={`shadow pt-4 bg-white relative flex border-2 border-gray-200 rounded-md transition-all focus-within:border-mainFontColor focus-within:transition-all ${className}`}
      >
        <Controller
          control={control}
          name={name}
          render={({
            field: { onChange, value, name },
            fieldState: { error },
          }) => (
            <>
              <input
                value={value}
                name={name}
                maxLength={maxLength}
                onChange={onChange}
                className="peer placeholder-transparent appearance-none bg-transparent w-full py-2 px-4 focus:outline-none block z-20"
                placeholder={label}
                type={type}
                autoComplete={autoComplete}
                required
                onFocus={onFocus}
                readOnly={readOnly}
              />
            </>
          )}
        />
        <label
          className="transition-all absolute left-4 top-2 z-10 text-mainFontColor peer-placeholder-shown:text-gray-300 text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-sm peer-focus:text-mainFontColor"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      {errorMessage && <FormInputErrMsg className="ml-1" text={errorMessage} />}
    </div>
  );
}

InputForm.defaultProps = {
  errorMessage: undefined,
};
