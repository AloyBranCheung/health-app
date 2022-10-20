import React from "react";
import { Imaging } from "../../../../../../context/authContextType";

interface Props {
  data: Imaging[];
}

export default function RecentImaging({ data }: Props) {
  const list = data?.map((image) => {
    return (
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
        <p className="text-xs">{image.dateCreate}</p>
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-lg">
        <strong>Recent Imaging</strong>
      </h1>
      <ul className="flex flex-col gap-5">{list}</ul>
    </div>
  );
}
