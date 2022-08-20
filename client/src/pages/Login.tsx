import React from "react";
import LoginModal from "../components/Login/LoginModal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="text-mainFontColor bg-mainColor h-screen flex flex-row relative">
        <div className="hidden md:flex md:flex-col md:gap-10 bg-secondaryColor w-1/2 justify-center items-center">
          <h1 className="text-5xl text-mainFontColor font-bold">
            Welcome Back :&#41;
          </h1>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8289/8289002.png"
              alt="login-img"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 items-center w-full md:w-1/2  py-16 px-5 ">
          <div className="flex p-5 w-full max-w-sm">
            <img
              className="h-7 w-7 self-center mr-3"
              src="https://cdn-icons.flaticon.com/png/512/1177/premium/1177232.png?token=exp=1660956265~hmac=d965bf48482fcf14909c113d38aeb5dc"
              alt="brandimg"
            />
            <h1>
              <strong className="text-2xl cursor-pointer" onClick={navHome}>
                Random Health Tech
              </strong>
            </h1>
          </div>
          <LoginModal />
          <div className="flex flex-row justify-between">
            <h1 className="text-mainFontColor px-5 w-1/2">
              © {new Date().getFullYear()} Brandon Cheung
            </h1>
            <p className="w-1/2">
              Need help? <Link to="/contactus">Contact us.</Link>
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
