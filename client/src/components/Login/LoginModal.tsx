import React, { useState, useContext } from "react";
import AuthContext from "../../context/authContext";
import Input from "../UI/Input";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormInputErrMsg from "../UI/FormInputErrMsg";
import LoadingSpinner from "../UI/LoadingSpinner";

export default function LoginModal() {
  const [error, setError] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);

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
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        loginForm
      );
      setIsLoading(false);
      setLoginForm({
        email: "",
        password: "",
      });
      setError(false);
      console.log("Successfully logged in.");
      login(response.data);
      navigate("/dashboard", { replace: true });
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
          value={loginForm.email}
          autoComplete="username"
          onChange={handleChange}
          name="email"
          label="Email"
        />
        <Input
          value={loginForm.password}
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
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button
              type="submit"
              className="bg-tertiaryColor text-mainFontColor text-xs w-1/3 shadow"
            >
              Login
            </Button>
          )}
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
