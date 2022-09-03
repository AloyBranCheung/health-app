import React from "react";
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
    name: "Billy Bongwater",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
  {
    id: "4",
    name: "Billy Bongwater",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
  {
    id: "5",
    name: "Billy Bongwater",
    MRN: "68686868",
    primaryIssue: "CHF",
  },
];

type Props = {
  className?: string;
};

export default function MyFamily({ className }: Props) {
  const familyMembers = DUMMY_DATA.map((member) => {
    return <div>Hello</div>;
  });

  return (
    <CardScroll className={`${className}`} title="My Family">
      <div className="overflow-y-scroll">{familyMembers}</div>
    </CardScroll>
  );
}
