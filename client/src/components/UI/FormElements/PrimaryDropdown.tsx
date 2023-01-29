import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormInputErrMsg from "../FormInputErrMsg";
export interface PrimaryDropdownProps<FV extends FieldValues> {
  options: { id: string; name: string }[];
  name: Path<FV>;
  control: Control<FV>;
  required?: boolean;
}

export default function PrimaryDropdown<FV extends FieldValues>({
  options,
  required,
  control,
  name,
}: PrimaryDropdownProps<FV>) {
  const menuOptions = options.map((option) => (
    <option
      key={option.id}
      className="bg-white text-mainFontColor"
      value={option.id}
    >
      {option.name}
    </option>
  ));

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div>
          <select
            required={required}
            onChange={onChange}
            value={value}
            className="py-2 px-4 bg-mainFontColor text-white rounded-lg outline-none"
          >
            <option className="hidden"></option>
            {menuOptions}
          </select>
          {error?.message && <FormInputErrMsg text={error.message} />}
        </div>
      )}
    />
  );
}

PrimaryDropdown.defaultProps = {
  required: true,
};
