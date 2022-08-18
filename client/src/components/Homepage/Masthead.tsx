import React from "react";
import { Button } from "@material-tailwind/react";

export default function Masthead() {
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
            src="https://cdn.videvo.net/videvo_files/video/free/2022-06/large_watermarked/220509_04_London%20Student_4k_017_preview.mp4"
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
            variant="gradient"
            size="sm"
            className="bg-mainColor text-mainFontColor font-bold shadow normal-case px-8"
          >
            <span className="text-base">Login</span>
          </Button>
          <Button
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
