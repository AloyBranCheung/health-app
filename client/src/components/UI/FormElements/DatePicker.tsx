import { Controller, Path, FieldValues, Control } from "react-hook-form";

interface DatePickerProps<FV extends FieldValues> {
  control: Control<FV>;
  name: Path<FV>;
}

export default function DatePicker<FV extends FieldValues>({
  control,
  name,
}: DatePickerProps<FV>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <input
          className="border-2 border-solid border-gray-200 focus:outline-mainFontColor transition-outline py-2 px-4 rounded-lg"
          onChange={onChange}
          value={value}
          type="date"
        />
      )}
    />
  );
}
