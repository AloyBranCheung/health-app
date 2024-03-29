import React, { useState, useContext } from "react";
import AuthContext from "../../context/authContext";
import AddressInput from "./AddressInput";
import ButtonContainer from "./ButtonContainer";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import LoadingSpinner from "../UI/LoadingSpinner";
import FormInputErrMsg from "../UI/FormInputErrMsg";
import withAuthServer from "src/utils/axios";

interface Address {
  city: string;
  province: string;
  country: string;
  postalCode: string;
}

export default function EditProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [formInput, setFormInput] = useState({
    phoneNumber: user.phoneNumber,
    email: user.email,
    address: user.address,
  });
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // state from phone, email
  const handleData = (name: string, text: string) => {
    setFormInput({ ...formInput, [name]: text });
  };
  // state from address
  const handleAddress = (name: string, address: Address) => {
    setFormInput({ ...formInput, [name]: address });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    try {
      withAuthServer.put(
        `${process.env.REACT_APP_BACKEND_URL}/dashboard/updateuser/${user._id}`,
        formInput
      );
      setSuccess(true);
      setUser({
        ...user,
        address: { ...formInput.address },
        phoneNumber: formInput.phoneNumber,
        email: formInput.email,
      });
      setIsError(false);
      console.log("Success");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsError(true);
      console.error(error.response.data.message);
      console.error(error.response.data.stack);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {success ? (
            <div>Successfully updated.</div>
          ) : (
            <form className="flex flex-col gap-2">
              <PhoneInput passedData={handleData} />
              <EmailInput passedData={handleData} />
              <AddressInput passedData={handleAddress} />
              {isError && <FormInputErrMsg text="Something went wrong." />}
              <ButtonContainer onClick={handleSubmit} />
            </form>
          )}
        </>
      )}
    </div>
  );
}
