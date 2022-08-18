import React from "react";
import LoginModal from "../components/Login/LoginModal";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="text-mainFontColor bg-mainColor h-screen flex flex-row">
      <div className="hidden md:flex bg-secondaryColor w-1/2">
        <img
          alt="login-img"
          src="../../public/assets/illustrations/2.svg"
        ></img>
      </div>
      <div className="flex flex-col justify-between gap-12 items-center w-full md:w-1/2  py-16 px-5 ">
        <div className="p-5 w-full max-w-sm">
          <h1>
            <strong className="text-2xl">Random Health Tech</strong>
          </h1>
        </div>
        <LoginModal />
        <div className="flex flex-row justify-betwen">
          <h1 className="text-mainFontColor px-5 w-1/2">
            © {new Date().getFullYear()} Brandon Cheung
          </h1>
          <p className="w-1/2">
            Need help? <Link to="/contactus">Contact us.</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
