import React, { useContext, useState } from "react";
import AuthContext from "../../../../../context/authContext";
import Button from "../../../../UI/Button";
import Input from "../../../../UI/Input";
import axios from "axios";
import LoadingSpinner from "../../../../UI/LoadingSpinner";
import FormInputErrMsg from "../../../../UI/FormInputErrMsg";
interface Props {
  setIsAddFamily: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddFamilyForm({ setIsAddFamily }: Props) {
  const { user, userHealth, setUserHealth } = useContext(AuthContext);
  const [familyMembers, setFamilyMembers] = useState({
    MRN: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    state: false,
  });

  // Cancel Button
  const handleCancel = () => {
    setIsAddFamily(false);
  };

  // Form Submit
  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const familyArrObj = [...userHealth.familyMembers, familyMembers];
      // update DB PUT /mrn/healthinformation/${user._id}
      const { data } = await axios.put(
        `https://random-health-tech.herokuapp.com/api/mrn/healthinformation/${user._id}`,
        {
          familyMembers: familyArrObj,
        }
      );
      // update state
      setUserHealth(data);
      setIsLoading(false);
      setIsAddFamily(false);
      setError({ message: "", state: false });
      console.log("Success");
    } catch (error: any) {
      console.error(error);
      setError({ message: error.message, state: true });
      setIsLoading(false);
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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {error.state ? (
              <FormInputErrMsg text={error.message} />
            ) : (
              <>
                <Input
                  onChange={handleChange}
                  value={familyMembers.MRN}
                  label="MRN"
                  name="MRN"
                />
              </>
            )}
          </>
        )}
      </div>

      <div className="flex w-full h-full flex-row gap-2 justify-end items-center">
        <Button onClick={handleCancel} type="button" text="Cancel" />
        <Button type="submit" text="Add" />
      </div>
    </form>
  );
}
