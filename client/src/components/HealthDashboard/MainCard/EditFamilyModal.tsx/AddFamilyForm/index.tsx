import React, { useContext, useState } from "react";
import AuthContext from "../../../../../context/authContext";
import Button from "../../../../UI/Button";
import Input from "../../../../UI/Input";
import axios from "axios";
interface Props {
  setIsAddFamily: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddFamilyForm({ setIsAddFamily }: Props) {
  const { user, userHealth, setUserHealth } = useContext(AuthContext);
  const [familyMembers, setFamilyMembers] = useState({
    name: "",
    MRN: "",
    primaryIssue: "",
  });

  // Cancel Button
  const handleCancel = () => {
    setIsAddFamily(false);
  };

  // Form Submit
  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const familyArrObj = [...userHealth.familyMembers, familyMembers];
      // update DB PUT /mrn/healthinformation/${user._id}
      const { data } = await axios.put(`/mrn/healthinformation/${user._id}`, {
        familyMembers: familyArrObj,
      });
      // update state
      setUserHealth(data);
      setIsAddFamily(false);
      console.log("Success");
    } catch (error) {
      console.error(error);
    }
  };

  // Handle input form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const propertyName = e.target.name;
    setFamilyMembers({ ...familyMembers, [propertyName]: value });
  };

  return (
    <form onSubmit={handleAdd} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Input
          onChange={handleChange}
          value={familyMembers.name}
          label="Name"
          name="name"
        />
        <Input
          onChange={handleChange}
          value={familyMembers.MRN}
          label="MRN"
          name="MRN"
        />
        <Input
          onChange={handleChange}
          value={familyMembers.primaryIssue}
          label="Primary Issue"
          name="primaryIssue"
        />
      </div>

      <div className="flex flex-row gap-2 justify-end">
        <Button onClick={handleCancel} type="button" text="Cancel" />
        <Button type="submit" text="Add" />
      </div>
    </form>
  );
}