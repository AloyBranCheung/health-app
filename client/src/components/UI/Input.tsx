import React from "react";
type Props = {
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  autoComplete?: string;
  onFocus?: () => void;
};

export default function Input({
  label,
  onChange,
  value,
  name,
  type,
  autoComplete,
  onFocus,
}: Props) {
  return (
    <div className="shadow pt-4 bg-white relative flex border-2 border-gray-200 rounded-md transition-all focus-within:border-mainFontColor focus-within:transition-all">
      <input
        onChange={onChange}
        value={value}
        className="peer placeholder-transparent appearance-none bg-transparent w-full py-2 px-4 focus:outline-none block z-20"
        name={name}
        placeholder={label}
        type={type}
        autoComplete={autoComplete}
        required
        onFocus={onFocus}
      />
      <label
        className="transition-all absolute left-4 top-2 z-10 text-mainFontColor peer-placeholder-shown:text-gray-300 text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-sm peer-focus:text-mainFontColor"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
