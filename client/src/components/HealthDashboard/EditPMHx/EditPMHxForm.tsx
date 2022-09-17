import React, { useState, useContext } from "react";
import AuthContext from "../../../context/authContext";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import axios from "axios";

export default function EditPMHxForm() {
  const [newHistory, setNewHistory] = useState("");
  const [isError, setError] = useState({
    error: false,
    message: "",
  });
  const { user, userHealth, setUserHealth } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewHistory(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // PUT to DB
    try {
      await axios.put(`/mrn/healthinformation/${user._id}`, {
        pmHx: [...userHealth.pmHx, newHistory],
      });
      console.log("Success");
      // Reset error
      setError({ ...isError, error: false });
    } catch (error: any) {
      setError({
        ...isError,
        error: true,
        message: error.response.data.message,
      });
      console.error(error);
    }
    // setState
    setUserHealth({ ...userHealth, pmHx: [...userHealth.pmHx, newHistory] });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        value={newHistory}
        onChange={handleChange}
        label="New Medical History"
        name="newPMHx"
      />
      <div className="flex gap-2 justify-end">
        <Button text="Cancel" />
        <Button type="submit" text="Add PMHx" />
      </div>
    </form>
  );
}
