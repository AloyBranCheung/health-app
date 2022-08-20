import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export default function HomeNavbar() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigateLoginpage = () => {
    navigate("/login");
  };

  const navSignup = () => {
    navigate("/signup");
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/aboutus
        "
          className="flex items-center text-base"
        >
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/careers" className="flex items-center text-base">
          Careers
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/contactus" className="flex items-center text-base">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 absolute z-10 border-none mt-3 bg-transparent">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal flex"
        >
          <img
            className="h-7 w-7 self-center mr-3"
            src="https://cdn-icons.flaticon.com/png/512/1177/premium/1177232.png?token=exp=1660956265~hmac=d965bf48482fcf14909c113d38aeb5dc"
            alt="brandimg"
          />
          <strong className="text-xl">Random Health Tech</strong>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex flex-row gap-4">
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block bg-mainColor text-mainFontColor normal-case"
            onClick={navigateLoginpage}
          >
            <span className="text-sm">Login</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block bg-tertiaryColor text-mainFontColor normal-case"
            onClick={navSignup}
          >
            <span className="text-sm">Sign Up</span>
          </Button>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden [&>span]:relative [&>span]:top-0"
          ripple={true}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav
        className="bg-mainColor p-5 rounded-lg mt-3 text-mainFontColor flex flex-col justify-between !h-full"
        open={openNav}
      >
        <div>{navList}</div>
        <div className="flex flex-row gap-5">
          <Button
            onClick={navigateLoginpage}
            ripple={true}
            variant="gradient"
            size="sm"
            fullWidth
            className="bg-secondaryColor text-mainFontColor shadow normal-case"
          >
            <span>Login</span>
          </Button>
          <Button
            onClick={navSignup}
            ripple={true}
            variant="gradient"
            size="sm"
            fullWidth
            className="bg-tertiaryColor text-mainFontColor text-xs shadow normal-case"
          >
            <span>Sign Up</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
