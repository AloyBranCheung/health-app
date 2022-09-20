import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import Button from "../../UI/Button";

export default function FamilyList() {
  const { userHealth } = useContext(AuthContext);

  const list = userHealth.familyMembers.map((member) => {
    return (
      <div
        key={member._id}
        className="h-full w-full bg-white rounded-xl shadow-xl p-5 flex flex-col md:flex-row md:justify-between gap-5"
      >
        <div className="hidden md:flex md:items-center md:justify-center w-full basis-4/12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4825/4825015.png"
            alt="profile-pic"
            className="h-16 w-16"
          />
        </div>
        <div className="w-full">
          <div>
            <h1>
              <strong>Name: </strong>
              {member.name}
            </h1>
          </div>
          <div>
            <p className="break-all">
              <strong>MRN: </strong>
              {member.MRN}
            </p>
          </div>
          <div>
            <p>
              <strong>Primary Concern: </strong>
              {member.primaryIssue}
            </p>
          </div>
        </div>
        <div className="self-center">
          <Button text="View Profile" />
        </div>
      </div>
    );
  });

  return <>{list}</>;
}
