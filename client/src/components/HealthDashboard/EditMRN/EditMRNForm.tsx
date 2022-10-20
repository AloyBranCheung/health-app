import React, { ChangeEvent, useContext, useState } from "react";
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
import Button from "../../UI/Button";
import Dropdown from "../../UI/Dropdown";
import Input from "../../UI/Input";
import axios from "axios";
import FormInputErrMsg from "../../UI/FormInputErrMsg";
import LoadingSpinner from "../../UI/LoadingSpinner";

export default function EditMRNForm() {
  const { user, userHealth, setUser, setUserHealth, isLoading } =
    useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { onVisible } = useContext(ModalContext);
  const [formValues, setFormValues] = useState({
    preferredPronouns: user.preferredPronouns.join(", "),
    preferredName: user.preferredName,
    gender: userHealth.gender,
    sex: userHealth.sex,
    bloodGroup: userHealth.bloodGroup,
    weight: userHealth.weight,
    age: userHealth.age,
  });

  // list of blood groups
  const bloodGroups = ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"];

  // Receive dropdown blood group data
  const receiveBloodData = (name: string, selectedValue: string | number) => {
    setFormValues({ ...formValues, [name]: selectedValue });
  };

  // Receive dropdown biological sex data
  const receiveSexData = (name: string, selectedValue: string | number) => {
    setFormValues({ ...formValues, [name]: selectedValue });
  };

  // Generic handle change for inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  // Close modal
  const handleCancel = () => {
    onVisible("");
  };

  // onFocus select all text
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  // Submit form to DB
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      preferredPronouns: formValues.preferredPronouns.split(","),
      preferredName: formValues.preferredName,
    };
    const mrnData = {
      gender: formValues.gender,
      sex: formValues.sex,
      bloodGroup: formValues.bloodGroup,
      weight: formValues.weight,
      age: formValues.age,
    };

    try {
      // User
      await axios.put(
        `https://random-health-tech.herokuapp.com/api/dashboard/updateuser/${user._id}`,
        userData
      );
      //  MRN
      await axios.put(
        `https://random-health-tech.herokuapp.com/api/mrn/healthinformation/${user._id}`,
        mrnData
      );
      console.log("Success");

      // Update state
      setUser({
        ...user,
        preferredPronouns: formValues.preferredPronouns.split(","),
        preferredName: formValues.preferredName,
      });

      setUserHealth({
        ...userHealth,
        ...mrnData,
      });

      // Success message to user
      setIsSuccess(true);
      setIsError(false);
    } catch (error: any) {
      setIsError(true);
      setErrMsg(error.response.data.message);
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {isSuccess ? (
            <div>Successfully updated.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <Input
                label="Preferred Pronouns (..., ...)"
                name="preferredPronouns"
                onChange={handleChange}
                value={formValues.preferredPronouns}
                onFocus={handleFocus}
              />
              <Input
                label="Preferred Name"
                name="preferredName"
                onChange={handleChange}
                value={formValues.preferredName}
                onFocus={handleFocus}
              />
              <Input
                label="Gender"
                name="gender"
                onChange={handleChange}
                value={formValues.gender}
                onFocus={handleFocus}
              />
              <Dropdown
                description="Sex"
                selectName="sex"
                options={["M", "F"]}
                passData={receiveSexData}
                defaultValue={userHealth.sex}
              />
              <Dropdown
                description="Blood Group"
                selectName="bloodGroup"
                options={bloodGroups}
                passData={receiveBloodData}
                defaultValue={userHealth.bloodGroup}
              />
              <Input
                label="Age"
                name="age"
                onChange={handleChange}
                value={formValues.age}
                onFocus={handleFocus}
              />
              <Input
                label="Weight (kg)"
                name="weight"
                onChange={handleChange}
                value={formValues.weight}
                onFocus={handleFocus}
              />
              {isError && <FormInputErrMsg text={errMsg} />}
              <div className="mt-4 flex justify-end gap-2">
                <Button onClick={handleCancel} text="Cancel" />
                <Button type="submit" text="Submit" />
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}
