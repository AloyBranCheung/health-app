import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newsletter () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

  const navSignUp = () => {
    navigate("/signup", { state: { email } });
  };

  return (
    <aside className="text-mainFontColor bg-mainColor">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            What are you waiting for?
          </h2>

          <p className="sm:mt-4 sm:block">It's time to get started :&#41;</p>
        </div>

        <div className="max-w-xl mx-auto mt-8">
          <form action="#" className="sm:gap-4 sm:flex">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                onChange={emailHandler}
                type="email"
                placeholder="Email address"
                className="shadow w-full p-3 transition border-gray-700 rounded-md shadow-sm focus:ring focus:outline-none focus:ring-yellow-400 focus:border-gray-800"
              />
            </div>

            <button
              onClick={navSignUp}
              type="submit"
              className="shadow flex items-center justify-center w-full px-5 py-3 mt-4 text-mainFontColor bg-tertiaryColor transition rounded-md bg-rose-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
            >
              <span className="text-sm font-bold"> Sign Up </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
