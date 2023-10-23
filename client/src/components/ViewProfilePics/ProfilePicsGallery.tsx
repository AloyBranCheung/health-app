import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthContext from "../../context/authContext";

// components
import Button from "../UI/Button";
import LoadingSpinner from "../UI/LoadingSpinner";
import withAuthServer from "src/utils/axios";

interface Props {
  data: Array<{
    url: string;
    _id: string;
  }>;
}

export default function ProfilePicsGallery({ data }: Props) {
  const { user, setUser } = useContext(AuthContext);

  const { mutate, isLoading, isSuccess, reset } = useMutation({
    mutationFn: async (profilePicURL: { profilePic: string }) => {
      return await withAuthServer.put(
        `${process.env.REACT_APP_BACKEND_URL}/dashboard/updateuser/${user._id}`,
        profilePicURL
      );
    },
  });

  const handleClick = (profilePicURL: string) => {
    // post to db
    mutate({ profilePic: profilePicURL });
    // update local state
    setUser({ ...user, profilePic: profilePicURL });
  };

  const images = data.map((imageObj) => (
    <div
      key={imageObj._id}
      className="w-full flex flex-col gap-3 items-center justify-center"
    >
      <img className="w-20" src={imageObj.url} alt="profile-pic-img" />
      <Button onClick={() => handleClick(imageObj.url)} text="Use This" />
    </div>
  ));

  return (
    <div className={`grid grid-cols-3 gap-5 ${isSuccess && "grid-cols-1"}`}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {isSuccess ? (
            <div className="flex gap-5 justify-around">
              <p>Succesfully changed.</p>
              <Button
                text="Change your mind?"
                onClick={() => {
                  reset();
                }}
              />
            </div>
          ) : (
            <>{images}</>
          )}
        </>
      )}
    </div>
  );
}
