import React, { useState, useContext } from "react";
import AuthContext from "../../../../context/authContext";
import ModalContext from "../../../../context/modalContext";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import axios from "axios";
import FormInputErrMsg from "../../../UI/FormInputErrMsg";

export default function EditForm () {
  const [addTreatment, setAddTreatment] = useState("");
  const { userHealth, setUserHealth, user } = useContext(AuthContext);
  const { onVisible } = useContext(ModalContext);
  const [error, setError] = useState({
    errorMessage: "",
    isError: true
  })

  // set state for add treatment
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddTreatment(value);
  };

  // cancel button
  const handleCancel = () => {
    onVisible("");
  };

  // add treatment to DB and state
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (addTreatment === "") {
      setError({ errorMessage: "Please add something.", isError: true });
      return;
    }

    // add to DB
    try {
      const response = await axios.put(
        `https://random-health-tech.herokuapp.com/api/mrn/healthinformation/${user._id}`,
        {
          otherTx: [...userHealth.otherTx, { treatment: addTreatment }]
        }
      );
      console.log("Success");
      // set state with new response object
      setUserHealth(response.data);
    } catch (error: any) {
      console.error(error);
      setError({ errorMessage: error.response.data.message, isError: true });
    }

    // reset error
    setError({ errorMessage: "", isError: false });

    // reset input
    setAddTreatment("");
  };

  // remove list item
  const handleRemove = async (id: string) => {
    const newTxList = userHealth.otherTx.filter(
      (element) => element._id !== id
    );

    // remove from state
    setUserHealth({ ...userHealth, otherTx: newTxList });

    // remove from DB
    try {
      await axios.put(
        `https://random-health-tech.herokuapp.com/api/mrn/healthinformation/${user._id}`,
        {
          otherTx: newTxList
        }
      );
      console.log("Success");
    } catch (error: any) {
      console.error(error);
      // handle Error error.response.data.message
      setError({ errorMessage: error.response.data.message, isError: true });
    }
  };

  // render list of current treatments
  const currTreatments = userHealth.otherTx.map((treatment) => {
    return (
      <li key={treatment._id} className="flex justify-between">
        <div>
          <h1>{treatment.treatment}</h1>
        </div>
        <Button
          onClick={() => {
            handleRemove(treatment._id);
          }}
          type="button"
          text="Remove"
        />
      </li>
    );
  })

  return (
    <>
      <ul className="flex flex-col gap-1">{currTreatments}</ul>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          value={addTreatment}
          onChange={handleChange}
          label="Add Treatment"
          name="addTreatment"
        />

        {error.isError && <FormInputErrMsg text={error.errorMessage} />}

        <div className="flex flex-row gap-2 justify-end">
          <Button onClick={handleCancel} type="button" text="Cancel" />
          <Button type="submit" text="Add" />
        </div>
      </form>
    </>
  );
}
