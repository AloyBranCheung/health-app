import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Masthead() {
  const navigate = useNavigate();

  const navLogin = () => {
    navigate("/login");
  };

  const navSignup = () => {
    navigate("/signup");
  };

  return (
    <section className="h-screen w-full relative flex items-center">
      <div className="h-screen w-full absolute -z-10">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="object-cover max-w-none h-screen w-full"
        >
          <source
            src="https://media.istockphoto.com/videos/getting-ready-for-a-new-running-session-video-id992500148"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="mx-auto max-w-screen-md py-2 px-4 lg:px-8 lg:py-4 w-full flex flex-col gap-7 text-white">
        <div className="flex flex-col gap-7">
          <h1 className="text-5xl lg:text-7xl">consequat nisl vel</h1>
          <p className="text-xl lg:text-2xl">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
            blandit libero volutpat.
          </p>
          <p className="text-xl lg:text-2xl">It's free!</p>
        </div>

        <div className="flex flex-row gap-7">
          <Button
            onClick={navLogin}
            variant="gradient"
            size="sm"
            className="bg-mainColor text-mainFontColor font-bold shadow normal-case px-8"
          >
            <span className="text-base">Login</span>
          </Button>
          <Button
            onClick={navSignup}
            variant="gradient"
            size="sm"
            className="bg-tertiaryColor text-mainFontColor font-bold normal-case px-8"
          >
            <span className="text-base">Sign Up</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
