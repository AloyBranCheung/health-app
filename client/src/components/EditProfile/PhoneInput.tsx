import React, { useContext, useState, useEffect } from "react";
import Input from "../UI/Input";
import AuthContext from "../../context/authContext";

interface Props {
  passedData: (name: string, text: string) => void;
}

export default function PhoneInput({ passedData }: Props) {
  const { user } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setPhoneNumber(user.phoneNumber);
  }, [user.phoneNumber]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const name = e.target.name;
    setPhoneNumber(text);
    passedData(name, text);
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div>
      <Input
        onFocus={handleFocus}
        onChange={handlePhoneChange}
        value={phoneNumber}
        label="Phone Number"
        name="phoneNumber"
        type="number"
      />
    </div>
  );
}
