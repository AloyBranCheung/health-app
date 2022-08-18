import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <section className="relative flex flex-col h-screen items-center  text-mainFontColor">
      <div className="relative w-full h-screen">
        <img
          className="object-cover w-full h-full"
          src="https://picsum.photos/1920/1080?random=1"
          alt="login-img"
        />
      </div>
      <div className="absolute bg-mainColor top-1/4 w-5/6 px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 shadow rounded-lg">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm border-solid border-mainFontColor border-2"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm border-solid border-mainFontColor border-2"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm ">
              No account? &ensp;
              <a className="underline" href="">
                Sign up
              </a>
            </p>
            <div className="flex flex-row gap-5">
              <Button
                variant="gradient"
                size="sm"
                className="bg-mainColor border-solid border-mainFontColor border-2 text-mainfontColor font-bold shadow"
                onClick={navigateBack}
              >
                <span>Back</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="bg-tertiaryColor border-solid border-mainFontColor border-2  text-mainFontColor font-bold shadow"
              >
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
