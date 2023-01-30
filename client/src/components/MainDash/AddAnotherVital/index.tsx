import React from "react";
//
import dayjs from "dayjs";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// components
import Button from "../../UI/Button";
import EditModal from "../../UI/EditModal";
import PrimaryDropdown from "../../UI/FormElements/PrimaryDropdown";
import DatePicker from "../../UI/FormElements/DatePicker";
import TimePicker from "../../UI/FormElements/TimePicker";
// validation
import { z } from "zod";
import BloodPressureForm from "./BloodPressureForm";

const validationSchema = z.object({
  vitalsType: z.string(),
  date: z.string(),
  time: z.string(),
  sys: z.number().optional(),
  dia: z.number().optional(),
  heartRate: z.number().optional(),
});

export default function AddAnotherVital() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      vitalsType: "bloodPressure",
      date: dayjs(new Date()).format("YYYY-MM-DD"),
      time: dayjs(new Date()).format("HH:mm"),
    },
    resolver: zodResolver(validationSchema),
  });

  const handleFormSubmit = (data: z.infer<typeof validationSchema>) => {
    console.log(data);
  };

  const watchVitalsType = watch("vitalsType");

  console.log(watch());

  return (
    <EditModal wrapperId="popupModal" headerText="Add Vital Sign">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-5"
      >
        <PrimaryDropdown
          name="vitalsType"
          control={control}
          options={[
            { id: "bloodPressure", name: "Blood Pressure" },
            { id: "heartRate", name: "Heart Rate" },
          ]}
        />
        <div className="flex gap-5">
          <DatePicker name="date" control={control} />
          <TimePicker name="time" control={control} />
        </div>
        {watchVitalsType === "bloodPressure" ? (
          <BloodPressureForm />
        ) : (
          <div>heart rate form</div>
        )}
        <div className="flex justify-end">
          <Button text="test" type="submit" />
        </div>
      </form>
    </EditModal>
  );
}
