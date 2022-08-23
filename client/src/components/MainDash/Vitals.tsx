import React from "react";
import Card from "../UI/Card";

type Props = {
  className: string;
};

export default function Vitals({ className }: Props) {
  return (
    <Card className={className}>
      <div className="p-5">
        <div>
          <h1>
            <strong>My Vitals</strong>
          </h1>
        </div>
      </div>
    </Card>
  );
}
