import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import axios from "axios";
import FormInputErrMsg from "../../UI/FormInputErrMsg";
import LoadingSpinner from "../../UI/LoadingSpinner";

export default function FamilyHxForm() {
  const [newHx, setNewHx] = useState("");
  const { user, userHealth, setUserHealth, isLoading } =
    useContext(AuthContext);
  const [error, setError] = useState({
    isError: true,
    errorMessage: "",
  });
  const { onVisible } = useContext(ModalContext);

  // remove fam hx
  const handleRemove = async (id: number) => {
    const newHx = userHealth.familyHx.filter((value, index) => {
      return id !== index;
    });

    // set state
    setUserHealth({ ...userHealth, familyHx: newHx });

    // PUT to DB
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/mrn/healthinformation/${user._id}`,
        {
          familyHx: newHx,
        }
      );
      console.log("Success");
      // reset error to false
      setError({ ...error, isError: false });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      // set error state to true
      setError({ errorMessage: error.response.data.message, isError: true });
    }
  };

  // add new hx
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewHx(value);
  };

  const handleNewHx = async (e: React.FormEvent) => {
    e.preventDefault();
    // set state
    setUserHealth({ ...userHealth, familyHx: [...userHealth.familyHx, newHx] });

    // PUT to DB
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/mrn/healthinformation/${user._id}`,
        {
          familyHx: [...userHealth.familyHx, newHx],
        }
      );
      // reset error
      setError({ errorMessage: "", isError: false });
      // reset Input
      setNewHx("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      // set error
      setError({ errorMessage: error.response.data.message, isError: true });
    }
  };

  // close modal with cancel
  const handleCancel = () => {
    onVisible("");
  };

  // load curr fam hx list
  const currFamHx = userHealth.familyHx.map((hx, index) => {
    return (
      <li className="flex flex-col gap-2" key={index}>
        <div className="flex flex-row justify-between">
          <div>{hx}</div>
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <Button
                type="button"
                text="Remove"
                onClick={() => {
                  handleRemove(index);
                }}
              />
            )}
          </div>
        </div>
        <div>
          {error.isError && <FormInputErrMsg text={error.errorMessage} />}
        </div>
      </li>
    );
  });

  return (
    <form onSubmit={handleNewHx} className="flex flex-col gap-5">
      <ul className="flex flex-col gap-2">{currFamHx}</ul>
      <Input
        value={newHx}
        onChange={handleChange}
        label="Add new history"
        name="newFamHx"
      />
      {error && <FormInputErrMsg text={error.errorMessage} />}
      <div className="flex flex-row justify-end gap-2">
        <Button type="button" onClick={handleCancel} text="Cancel" />
        <Button type="submit" text="Add New" />
      </div>
    </form>
  );
}
