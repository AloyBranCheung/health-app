import React from "react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
// react-hook-form
import { useForm } from "react-hook-form";
//
import useLogin from "../../hooks/react-query/useLogin";
// components
import InputForm from "../UI/FormElements/InputForm";
import FormInputErrMsg from "../UI/FormInputErrMsg";
import LoadingSpinner from "../UI/LoadingSpinner";
// data validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  email: string;
  password: string;
}

const loginFormDataValidationSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(5, { message: "Password length must be at least 5 characters long." }),
});

export default function LoginModal() {
  const {
    control,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormDataValidationSchema),
  });

  const { mutate, isError, isLoading } = useLogin();

  // navigate back home
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  // submit to db for authentication, receive JWT and cookie
  const handleSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col gap-10 bg-mainColor p-5 text-mainFontColor max-w-sm w-full">
      <h1 className="text-3xl font-bold">Login</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <form
          onSubmit={formSubmit(handleSubmit)}
          className="flex flex-col gap-5"
        >
          <InputForm
            label="Email"
            name="email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <InputForm
            label="Password"
            name="password"
            control={control}
            errorMessage={errors?.password?.message}
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
          {isError && (
            <FormInputErrMsg text="Wrong username or password. Please try again." />
          )}
        </form>
      )}

      <p className="text-base font-semibold">
        Don't have an account? <Link to="/signup">Sign up here.</Link>
      </p>
    </div>
  );
}
