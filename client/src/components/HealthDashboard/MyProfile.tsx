import React, { useContext } from "react";
// context
import AuthContext from "../../context/authContext";
import ModalContext from "../../context/modalContext";
// components
import Button from "../UI/Button";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import ProfileDeets from "./ProfileDeets";
import EditProfile from "../EditProfile/EditProfile";
import ViewProfilePics from "../ViewProfilePics";
// utils
import { ModalVisibilityKeys } from "../../utils/modalVisibilityStrings";

interface Props {
  className: string;
}

export default function MyProfile({ className }: Props) {
  const { user, isLoading } = useContext(AuthContext);
  const { isVisible, onVisible } = useContext(ModalContext);

  const handleClick = () => {
    onVisible(ModalVisibilityKeys.EditProfile);
  };

  const handleViewProfilePics = () => {
    onVisible(ModalVisibilityKeys.ViewProfilePics);
  };

  return (
    <Card className={className}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {isVisible === ModalVisibilityKeys.EditProfile && <EditProfile />}
          {isVisible === ModalVisibilityKeys.ViewProfilePics && (
            <ViewProfilePics />
          )}
          <div className="p-5 flex flex-col gap-5 w-full md:h-full">
            <div className="flex flex-row items-center justify-between w-full">
              <h1>
                <strong>My Profile</strong>
              </h1>
              <Button onClick={handleClick} text="Edit" />
            </div>
            <div className="flex flex-col w-full h-full items-center md:flex-row gap-2 md:overflow-y-scroll">
              <ProfileDeets />
              <div
                onClick={handleViewProfilePics}
                className="w-full flex items-center justify-center rounded-full relative"
              >
                <span className="text-transparent hover:text-white cursor-pointer z-50 absolute w-full h-full flex items-center justify-center hover:bg-modalBackground hover:ease-in ease-out hover:duration-200 rounded-full">
                  Change Profile Pics
                </span>
                {user?.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt="profileClipboard"
                    className="hover:cursor-pointer"
                  />
                ) : (
                  "Choose a profile pic."
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
