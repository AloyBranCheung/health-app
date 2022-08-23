import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
};

export default function WelcomeCard({ className }: Props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/whatsnew");
  };

  return (
    <Card className={className}>
      <div className="flex flex-col p-5 gap-5 md:flex-row md:h-full object-fill lg:items-center lg:justify-center">
        <div className="flex flex-col gap-5 md:justify-center h-full">
          <h1 className="text-xl">
            <strong>{`Welcome ${
              user?.firstName.charAt(0).toUpperCase() + user?.firstName.slice(1)
            }.`}</strong>
          </h1>
          <p>
            I hope you're having a good day. See what's new with Random Health
            Tech.
          </p>
          <div>
            <Button onClick={handleClick} text="What's new?" />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <img
            className="h-full w-full object-contain"
            src="https://cdn-icons-png.flaticon.com/512/4288/4288960.png"
            alt="welcomeimg"
          />
        </div>
      </div>
    </Card>
  );
}
