import React from "react";

interface Props {
  name: string;
  MRN: string;
  primaryIssue: string;
}

export default function FamilyList({ name, MRN, primaryIssue }: Props) {
  return (
    <div className="w-full">
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>MRN: </strong>
        {MRN}
      </p>
      <p>
        <strong>Primary Concern: </strong>
        {primaryIssue}
      </p>
    </div>
  );
}
