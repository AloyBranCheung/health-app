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
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="flex flex-col gap-5">
        <Input label="Email" />
        <Input label="Password" />
        <div className="flex flex-row justify-around">
          <Button
            onClick={navHome}
            className="bg-secondaryColor text-mainFontColor text-xs w-1/3 shadow"
          >
            Back
          </Button>
          <Button className="bg-tertiaryColor text-mainFontColor text-xs w-1/3 shadow">
            Login
          </Button>
        </div>
      </form>
      <p className="text-base font-semibold">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}
