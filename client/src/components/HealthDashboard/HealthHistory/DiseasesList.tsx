import React from "react";

type Props = {
  className?: string;
  diseases: string[];
};

export default function DiseasesList({ className, diseases }: Props) {
  const listDiseases = diseases.map((disease) => <li>{disease}</li>);
  return (
    <ul className={`grid md:grid-cols-2 gap-x-5 w-full ${className}`}>
      {listDiseases}
    </ul>
  );
}
