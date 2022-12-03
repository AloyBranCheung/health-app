import React from "react";
import { OtherTx } from "../../../../../../context/authContextType";

interface Props {
  otherTx: OtherTx
}

export default function MedicationsList ({ otherTx }: Props) {
  const otherTxs = otherTx?.map((treatment) => {
    return <li key={treatment._id}>{treatment.treatment}</li>;
  })

  return (
    <div>
      <h1 className="text-lg">
        <strong>Other Treatments</strong>
      </h1>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {otherTxs}
      </ul>
    </div>
  );
}
