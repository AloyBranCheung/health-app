import React from "react";
import Button from "../../../../UI/Button";
import Input from "../../../../UI/Input";

interface Props {
  setIsAddFamily: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddFamilyForm({ setIsAddFamily }: Props) {
  const handleCancel = () => {
    setIsAddFamily(false);
  };

  const handleAdd = () => {
    // update state
    // update DB
  };

  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Input label="Name" name="name" />
        <Input label="MRN" name="mrn" />
        <Input label="Primary Issue" name="primaryIssue" />
      </div>

      <div className="flex flex-row gap-2 justify-end">
        <Button onClick={handleCancel} type="button" text="Cancel" />
        <Button onClick={handleAdd} type="submit" text="Add" />
      </div>
    </form>
  );
}
