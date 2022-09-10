import React from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Button from "../../UI/Button";
import CardScroll from "../../UI/CardScroll";

const DUMMY_DATA = [
  {
    id: "1",
    name: "Billy Bongwater",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
  {
    id: "2",
    name: "The Kush Bender",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
  {
    id: "3",
    name: "Periwinkle",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
  {
    id: "4",
    name: "Jabber",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
  {
    id: "5",
    name: "Pillowee",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
];

type Props = {
  className?: string;
  isLoading: boolean;
};

export default function MyFamily({ className, isLoading }: Props) {
  const familyMembers = DUMMY_DATA.map((member) => {
    return (
      <div
        key={member.id}
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
            <p>
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

  return (
    <CardScroll className={`${className}`} title="My Family">
      <div className="flex flex-col gap-5 w-full">
        {isLoading ? <LoadingSpinner /> : <>{familyMembers}</>}
      </div>
    </CardScroll>
  );
}
