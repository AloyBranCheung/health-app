import React from "react";

interface Props {
  nickname: string;
  mrn: string;
}

export default function FamilyList({ nickname, mrn }: Props) {
  return (
    <div className="w-full">
      <p>
        <strong>Nickname: </strong>
        {nickname}
      </p>
      <p>
        <strong>MRN: </strong>
        {mrn}
      </p>
    </div>
  );
}
