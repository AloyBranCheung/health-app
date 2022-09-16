import React, { useContext, useState, useEffect } from "react";
import Input from "../UI/Input";
import AuthContext from "../../context/authContext";

interface Props {
  passedData: (name: string, text: string) => void;
}

export default function EmailInput({ passedData }: Props) {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(user.email);
  }, [user.email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const name = e.target.name;
    setEmail(text);
    passedData(name, text);
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div>
      <Input
        onFocus={handleFocus}
        onChange={handleEmailChange}
        value={email}
        label="Email"
        name="email"
        type="email"
      />
    </div>
  );
}
