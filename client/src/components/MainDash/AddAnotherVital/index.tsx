import React, { useContext, useEffect } from "react";
// context
import AuthContext from "src/context/authContext";
// react-query
import useUpdateVitals from "src/hooks/react-query/POST/useUpdateVitals";
// dayjs
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
import InputForm from "../../UI/FormElements/InputForm";
// validation
import { z } from "zod";

const validationSchema = z.object({
  vitalsType: z.string(),
  date: z.string(),
  time: z.string(),
  sys: z.string().optional(),
  dia: z.string().optional(),
  heartRate: z.string().optional(),
});

export default function AddAnotherVital() {
  const { user } = useContext(AuthContext);
  const { mutate, error, isError, isLoading, isSuccess } = useUpdateVitals();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      vitalsType: "bloodPressure",
      date: dayjs(new Date()).format("YYYY-MM-DD"),
      time: dayjs(new Date()).format("HH:mm"),
      sys: "",
      dia: "",
      heartRate: "",
    },
    resolver: zodResolver(validationSchema),
  });

  const handleFormSubmit = (data: z.infer<typeof validationSchema>) => {
    const dataToSend = {
      userid: user._id,
      data:
        data.vitalsType === "bloodPressure"
          ? {
              [data.vitalsType]: {
                date: data.date,
                time: data.time,
                sys: data.sys,
                dia: data.dia,
                // heartRate: data.heartRate,
              },
            }
          : {
              [data.vitalsType]: {
                date: data.date,
                time: data.time,
                // sys: data.sys,
                // dia: data.dia,
                heartRate: data.heartRate,
              },
            },
    };
    mutate(dataToSend);
  };

  const watchVitalsType = watch("vitalsType");

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
          <div className="flex flex-col gap-5">
            <InputForm
              name="sys"
              control={control}
              label="Systolic Blood Pressure"
              type="number"
            />
            <InputForm
              name="dia"
              control={control}
              label="Diastolic Blood Pressure"
              type="number"
            />
          </div>
        ) : (
          <InputForm
            name="heartRate"
            control={control}
            type="number"
            label="Heart Rate"
          />
        )}
        <div className="flex justify-end">
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </EditModal>
  );
}
