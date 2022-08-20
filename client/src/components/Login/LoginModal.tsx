import React, { useState } from "react";
import Input from "../UI/Input";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import FormInputErrMsg from "../UI/FormInputErrMsg";

export default function LoginModal() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // navigate back home
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  // handle login input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // submit to db for authentication, receive JWT and cookie
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("user/login", loginForm);
      setLoginForm({
        email: "",
        password: "",
      });
      setError(false);
      console.log("Successfully logged in.", response.data);
    } catch (error) {
      setError(true);
      if (axios.isAxiosError(error)) {
        console.error(error);
      } else if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 bg-mainColor p-5 text-mainFontColor max-w-sm w-full">
      <h1 className="text-3xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          autoComplete="username"
          onChange={handleChange}
          name="email"
          label="Email"
        />
        <Input
          autoComplete="current-password"
          type="password"
          onChange={handleChange}
          name="password"
          label="Password"
        />
        <div className="flex flex-row justify-around">
          <Button
            onClick={navHome}
            className="bg-secondaryColor text-mainFontColor text-xs w-1/3 shadow"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="bg-tertiaryColor text-mainFontColor text-xs w-1/3 shadow"
          >
            Login
          </Button>
        </div>
        {error && (
          <FormInputErrMsg text="Wrong username or password. Please try again." />
        )}
      </form>
      <p className="text-base font-semibold">
        Don't have an account? <Link to="/signup">Sign up here.</Link>
      </p>
    </div>
  );
}
