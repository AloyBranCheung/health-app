import React from "react";

interface Props {
  header: string
  list: string[]
}

export default function MedicalHistory ({ header, list }: Props) {
  const history = list?.map((listItem, index) => {
    return <li key={index}>{listItem}</li>;
  })
  return (
    <div>
      <h1 className="text-lg">
        <strong>{header}</strong>
      </h1>
      <ul className="columns-2 md:columns-3 lg:columns-4">{history}</ul>
    </div>
  );
}
