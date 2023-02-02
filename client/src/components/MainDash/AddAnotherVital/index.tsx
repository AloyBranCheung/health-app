import React, { useContext } from "react";
// context
import AuthContext from "src/context/authContext";
// dayjs
import dayjs from "dayjs";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// trpc mutation
import useAddVitalSign from "src/hooks/react-query/POST/useAddVitalSign";
// components
import Button from "../../UI/Button";
import EditModal from "../../UI/EditModal";
import PrimaryDropdown from "../../UI/FormElements/PrimaryDropdown";
import DatePicker from "../../UI/FormElements/DatePicker";
import TimePicker from "../../UI/FormElements/TimePicker";
import InputForm from "../../UI/FormElements/InputForm";
import LoadingSpinner from "src/components/UI/LoadingSpinner";
import FormInputErrMsg from "src/components/UI/FormInputErrMsg";
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
  const { mutate, isError, isLoading, isSuccess } = useAddVitalSign();
  const { control, handleSubmit, watch, reset } = useForm({
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
    const { vitalsType, date, time, sys, dia, heartRate } = data;
    if (vitalsType === "bloodPressure") {
      const bloodPressureData = {
        userid: user._id,
        data: {
          bloodPressure: {
            date,
            time,
            sys: sys!,
            dia: dia!,
          },
        },
      };
      mutate(bloodPressureData);
      if (isSuccess) reset();
    } else {
      const heartRateData = {
        userid: user._id,
        data: {
          heartRate: {
            date,
            time,
            heartRate: heartRate!,
          },
        },
      };
      mutate(heartRateData);
      if (isSuccess) reset();
    }
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
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button text="Submit" type="submit" />
          )}
        </div>
        {isError && <FormInputErrMsg text="Something went wrong." />}
      </form>
    </EditModal>
  );
}
