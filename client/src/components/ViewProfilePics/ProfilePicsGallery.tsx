import React from "react";

interface Props {
  data: {
    url: string;
    id: string;
  }[];
}

export default function ProfilePicsGallery({ data }: Props) {
  const images = data.map((imageObj) => (
    <div className="max-w-xs" key={imageObj.id}>
      <img src={imageObj.url} alt="profile-pic-img" />
    </div>
  ));

  return <div className="grid grid-cols-3 gap-5">{images}</div>;
}
