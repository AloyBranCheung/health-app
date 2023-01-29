import { useState, ChangeEvent } from "react";

export interface PrimaryDropdownProps {
  options: string[];
  required?: boolean;
}

export default function PrimaryDropdown({
  options,
  required,
}: PrimaryDropdownProps) {
  const [selectValue, setSelectValue] = useState(options[0] || "");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectValue(value);
  };

  const menuOptions = options.map((option) => (
    <option className="bg-white text-mainFontColor" value={option}>
      {option}
    </option>
  ));

  return (
    <select
      required={required}
      onChange={handleSelectChange}
      value={selectValue}
      className="py-2 px-4 bg-mainFontColor text-white rounded-lg outline-none"
    >
      <option className="hidden"></option>
      {menuOptions}
    </select>
  );
}

PrimaryDropdown.defaultProps = {
  required: true,
};
