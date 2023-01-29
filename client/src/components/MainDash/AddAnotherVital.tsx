import React from "react";
// react-hook-form
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// components
import Button from "../UI/Button";
import EditModal from "../UI/EditModal";
import PrimaryDropdown from "../UI/FormElements/PrimaryDropdown";

export default function AddAnotherVital() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { vitalsType: "bloodPressure" },
  });

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const watchVitalsType = watch("vitalsType");

  return (
    <EditModal wrapperId="popupModal" headerText="Add Vital Sign">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <PrimaryDropdown
          name="vitalsType"
          control={control}
          options={[
            { id: "bloodPressure", name: "Blood Pressure" },
            { id: "heartRate", name: "Heart Rate" },
          ]}
        />
        {watchVitalsType === "bloodPressure" ? (
          <div>blood pressure form</div>
        ) : (
          <div>heart rate form</div>
        )}
        <Button text="test" type="submit" />
      </form>
    </EditModal>
  );
}
