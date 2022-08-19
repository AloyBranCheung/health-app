import React from "react";
import Input from "../UI/Input";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginModal() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-10 bg-mainColor p-5 text-mainFontColor max-w-sm w-full">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-col gap-5">
        <Input label="Name" />
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Confirm Password" />
        <div className="flex flex-row justify-around">
          <Button
            onClick={navHome}
            className="bg-secondaryColor text-mainFontColor text-xs w-1/3 shadow"
          >
            Back
          </Button>
          <Button className="bg-tertiaryColor text-mainFontColor text-xs w-1/3 shadow">
            Sign Up
          </Button>
        </div>
      </form>
      <p className="text-base font-semibold">
        Have an account? <Link to="/login">Log in here.</Link>
      </p>
    </div>
  );
}
