import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function FeaturedDescriptions () {
  const navigate = useNavigate();

  const navLogin = () => {
    navigate("/signup");
  };

  return (
    <section className=" body-font bg-mainColor">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-mainFontColor">
            in hac habitasse
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            tellus orci ac auctor.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow p-6 rounded-lg bg-secondaryColor">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-mainFontColor mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-lg text-mainFontColor font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow p-6 rounded-lg bg-secondaryColor">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-mainFontColor mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-lg text-mainFontColor font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow p-6 rounded-lg bg-secondaryColor">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-mainFontColor mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-lg text-mainFontColor font-medium title-font mb-2">
                Neptune
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow p-6 rounded-lg bg-secondaryColor">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-mainFontColor mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 className="text-lg text-mainFontColor font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow p-6 rounded-lg bg-secondaryColor">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-mainFontColor mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </div>
              <h2 className="text-lg text-mainFontColor font-medium title-font mb-2">
                Bunker
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow p-6 rounded-lg bg-secondaryColor">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-mainFontColor mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 className="text-lg text-mainFontColor font-medium title-font mb-2">
                Ramona Falls
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
        </div>
        <Button
          onClick={navLogin}
          className="flex mx-auto mt-16 text-mainFontColor bg-tertiaryColor shadow border-0 py-2 px-8 focus:outline-none rounded text-lg normal-case"
        >
          Join us now
        </Button>
      </div>
    </section>
  );
}
