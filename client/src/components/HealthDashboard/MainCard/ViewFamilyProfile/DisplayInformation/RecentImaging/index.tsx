import React from "react";
import { Imaging } from "../../../../../../context/authContextType";
import LoadingSpinner from "../../../../../UI/LoadingSpinner";

interface Props {
  data: Imaging[];
}

export default function RecentImaging({ data }: Props) {
  if (!data) {
    return <LoadingSpinner />;
  }

  const image = data[data.length - 1];

  return (
    <div>
      <h1 className="text-lg">
        <strong>Recent Imaging</strong>
      </h1>
      <p className="text-xs mb-3">{image.dateCreate}</p>

      <div className="flex flex-col gap-1" key={image._id}>
        <p className="text-md">
          <strong>Description:</strong> {image.name}
        </p>
        <p className="text-md">
          <strong>URL:</strong>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={image.url}
            className="text-md"
          >
            {image.url}
          </a>
        </p>
      </div>
    </div>
  );
}
