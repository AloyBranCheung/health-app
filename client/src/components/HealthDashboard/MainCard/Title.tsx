import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import LoadingSpinner from "../../UI/LoadingSpinner";
interface Props {
  className: string;
  isLoading: boolean;
}
export default function Title({ className, isLoading }: Props) {
  const { user } = useContext(AuthContext);
  return (
    <div className={`p-5 flex w-full items-center ${className}`}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <h1 className="text-3xl md:text-7xl">
          <strong>
            Hello,
            {user?.preferredName && user.preferredName.length > 0
              ? user?.preferredName
              : user?.displayName}
            .
          </strong>
        </h1>
      )}
    </div>
  );
}
