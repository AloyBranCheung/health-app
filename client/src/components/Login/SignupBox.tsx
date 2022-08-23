import React, { useState, useEffect, useContext } from "react";
import Input from "../UI/Input";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormInputErrMsg from "../UI/FormInputErrMsg";
import AuthContext from "../../context/authContext";

export default function LoginModal() {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [formInput, setFormInput] = useState({
    displayName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    isProvider: false,
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  // disable button if input is empty
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (
      formInput.displayName === "" ||
      formInput.email === "" ||
      formInput.password === "" ||
      formInput.firstName === "" ||
      formInput.lastName === "" ||
      passwordError
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [
    passwordError,
    formInput.displayName,
    formInput.email,
    formInput.password,
    formInput.firstName,
    formInput.lastName,
  ]);

  // password/confirmation password form validation
  const passwordSame = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  useEffect(() => {
    passwordSame(formInput.password, confirmPassword);
  }, [confirmPassword, formInput.password]);

  // confirmPassword state
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.target.value;
    setConfirmPassword(pass);
  };

  // handle form values to send to database
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if (name === "isProvider") {
      const checked = e.target.checked;
      setFormInput({ ...formInput, [name]: checked });
    } else {
      const value = e.target.value;
      setFormInput({ ...formInput, [name]: value });
    }
  };

  // submit to db
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // register user
      const response = await axios.post("user/register", formInput);

      //login user
      const loginResponse = await axios.post("user/login", {
        email: formInput.email,
        password: formInput.password,
      });
      login(loginResponse.data);

      // reset state and navigate to dashboard(replace: true)
      setFormInput({
        displayName: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        isProvider: false,
      });
      setConfirmPassword("");
      setError(false);

      //navigate to dashboard
      await axios.post(`mrn/healthinformation/${loginResponse.data._id}`);
      navigate(`/dashboard/${loginResponse.data._id}`, { replace: true });
    } catch (error: any) {
      setError(true);
      console.error(error.response.data.message);
      console.error(error.response.data.stack);
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-mainColor p-5 text-mainFontColor max-w-sm w-full">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          name="displayName"
          onChange={handleChange}
          value={formInput.displayName}
          label="Display Name"
        />
        <Input
          name="firstName"
          onChange={handleChange}
          value={formInput.firstName}
          label="First Name"
        />
        <Input
          name="lastName"
          onChange={handleChange}
          value={formInput.lastName}
          label="Last Name"
        />
        <Input
          name="email"
          type="email"
          onChange={handleChange}
          value={formInput.email}
          label="Email"
          autoComplete="username"
        />
        <Input
          name="password"
          onChange={handleChange}
          value={formInput.password}
          label="Password"
          type="password"
          autoComplete="new-password"
        />
        <Input
          onChange={handleConfirmPassword}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          value={confirmPassword}
        />
        {passwordError && <FormInputErrMsg text="Passwords do not match." />}
        <div className="flex flex-row gap-5 text-mainFontColor">
          <input
            id="isProvider"
            onChange={handleChange}
            name="isProvider"
            type="checkbox"
            checked={formInput.isProvider}
          />
          <label htmlFor="isProvider">I am a licensed provider.</label>
        </div>

        <div className="flex flex-row justify-around">
          <Button
            onClick={navHome}
            className="bg-secondaryColor text-mainFontColor text-xs w-1/3 shadow"
          >
            Back
          </Button>
          <Button
            disabled={isEmpty}
            type="submit"
            className={`${
              isEmpty ? "bg-gray-100" : "bg-tertiaryColor"
            } text-mainFontColor text-xs w-1/3 shadow transition-all duration-500`}
          >
            Sign Up
          </Button>
        </div>
        {error && (
          <FormInputErrMsg text="There was an error signing up. Please try again later. If you're a dev, check the console.log." />
        )}
      </form>
      <p className="text-base font-semibold">
        Have an account? <Link to="/login">Log in here.</Link>
      </p>
      <div className="flex flex-row justify-between">
        <h1 className="text-mainFontColor px-5 w-1/2 text-xs">
          © {new Date().getFullYear()} Brandon Cheung
        </h1>
        <p className="w-1/2 text-xs text-center">
          Need help? <Link to="/contactus">Contact us.</Link>
        </p>
      </div>
    </div>
  );
}
