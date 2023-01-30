import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface TimePickerProps<FV extends FieldValues> {
  name: Path<FV>;
  control: Control<FV>;
}

export default function TimePicker<FV extends FieldValues>({
  control,
  name,
}: TimePickerProps<FV>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <input
          onChange={onChange}
          value={value}
          type="time"
          className="border-2 border-solid border-mainFontColor py-2 px-4 rounded-lg"
        />
      )}
    />
  );
}
