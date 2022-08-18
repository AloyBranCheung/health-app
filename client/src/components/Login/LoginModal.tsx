import React from "react";
import Input from "../UI/Input";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function LoginModal() {
  return (
    <div className="flex flex-col gap-10 bg-mainColor p-5 text-mainFontColor max-w-sm w-full">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="flex flex-col gap-5">
        <Input label="Email" />
        <Input label="Password" />
        <Button className="bg-tertiaryColor text-mainFontColor text-xs">
          Login
        </Button>
      </form>
      <p className="text-base font-semibold">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}
