import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import Button from "../UI/Button";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import ProfileDeets from "./ProfileDeets";
import ModalContext from "../../context/modalContext";
import EditProfile from "../EditProfile/EditProfile";

type Props = {
  className: string;
};

export default function MyProfile({ className }: Props) {
  const { user, isLoading } = useContext(AuthContext);
  const { isVisible, onVisible } = useContext(ModalContext);

  const handleClick = () => {
    onVisible(true);
  };

  return (
    <Card className={className}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {isVisible && <EditProfile />}
          <div className="p-5 flex flex-col gap-5 w-full md:h-full">
            <div className="flex flex-row items-center justify-between w-full">
              <h1>
                <strong>My Profile</strong>
              </h1>
              <Button onClick={handleClick} text="Edit" />
            </div>
            <div className="flex flex-col w-full h-full items-center md:flex-row gap-2 md:overflow-y-scroll">
              <ProfileDeets />
              <div className="w-full flex items-center justify-center">
                <img
                  src={user.profilePic}
                  alt="profileClipboard"
                  className=""
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
