import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";
import Button from "../../UI/Button";
import LoadingSpinner from "../../UI/LoadingSpinner";
import withAuthServer from "src/utils/axios";

export default function CurrPMHx() {
  const { user, userHealth, setUserHealth, isLoading } =
    useContext(AuthContext);
  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  // remove history
  const handleRemove = async (index: number) => {
    const newHx = userHealth.pmHx.filter((value, i) => {
      return index !== i;
    });
    // set state
    setUserHealth({ ...userHealth, pmHx: newHx });
    // edit DB
    try {
      await withAuthServer.put(
        `${process.env.REACT_APP_BACKEND_URL}/mrn/healthinformation/${user._id}`,
        {
          pmHx: newHx,
        }
      );
      console.log("Success");
    } catch (error: any) {
      setError({ ...error, message: error.response.data.message });
    }
  };

  // map out past medical history
  const listCurrPMHx = userHealth.pmHx.sort().map((condition, index) => {
    return (
      <li key={index} className="flex flex-row justify-between">
        <div>{condition}</div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Button
            onClick={async () => await handleRemove(index)}
            text="Remove"
            className="p-1"
          />
        )}
        {error.isError && (
          <div>
            <h1>{error.message}</h1>
          </div>
        )}
      </li>
    );
  });

  return (
    <ul className="flex flex-col">
      <div>
        <h1 className="mb-3">Current History:</h1>
      </div>
      <div className="flex flex-col gap-3"> {listCurrPMHx}</div>
    </ul>
  );
}
