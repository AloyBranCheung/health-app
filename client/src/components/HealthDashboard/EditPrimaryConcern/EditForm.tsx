import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import axios from "axios";
import FormInputErrMsg from "../../UI/FormInputErrMsg";
import LoadingSpinner from "../../UI/LoadingSpinner";

export default function EditForm() {
  const { userHealth, setUserHealth, isLoading, user } =
    useContext(AuthContext);
  const { onVisible } = useContext(ModalContext);
  const [primaryConcern, setPrimaryConcern] = useState(
    userHealth.primaryConcern
  );
  const [error, setIsError] = useState({
    errorMessage: "",
    isError: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrimaryConcern(value);
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleCancel = () => {
    onVisible("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSuccess(false);

    if (primaryConcern === "") {
      setIsError({
        errorMessage: "Please enter your primary concern.",
        isError: true,
      });
    }

    const data = { primaryConcern };
    // submit to DB
    try {
      await axios.put(`/mrn/healthinformation/${user._id}`, data);
      console.log("Success");
      setIsSuccess(true);
    } catch (error: any) {
      const errorMsg = error.response.data.message;
      console.error(error);
      setIsError({ errorMessage: errorMsg, isError: true });
    }

    // change state
    setUserHealth({ ...userHealth, primaryConcern });

    // reset errors
    setIsError({ errorMessage: "", isError: false });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {isLoading && <LoadingSpinner />}
      <Input
        onFocus={handleFocus}
        value={primaryConcern}
        onChange={handleChange}
        label="Primary Concern"
        name="primaryConcern"
      />
      {error.isError && <FormInputErrMsg text={error.errorMessage} />}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>{isSuccess && <h1>Successfully changed.</h1>}</>
      )}
      <div className="flex flex-row gap-2 justify-end">
        <Button onClick={handleCancel} type="button" text="Cancel" />
        <Button type="submit" text="Change" />
      </div>
    </form>
  );
}
