import React, { useState } from "react";
interface Props {
  className?: string;
  description: string;
  selectName: string;
  options: string[] | number[];
  defaultValue: string | number;
  passData: (name: string, selectedValue: string | number) => void;
}

export default function Dropdown({
  className,
  description,
  selectName,
  options,
  passData,
  defaultValue,
}: Props) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const optionList = options.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setSelectedValue(value);
    passData(name, value);
  };

  return (
    <div
      className={`p-4 bg-white border-2 border-gray-200 rounded-md shadow flex w-full ${className}`}
    >
      <div className="w-full flex justify-start">
        <h1 className="text-mainFontColor">{description}</h1>
      </div>
      <div className="w-full flex justify-end">
        <select
          className="text-center w-20 text-mainFontColor border-2 border-gray-200"
          value={selectedValue}
          onChange={handleChange}
          name={selectName}
        >
          {optionList}
        </select>
      </div>
    </div>
  );
}
