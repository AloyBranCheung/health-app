import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

type Props = {
  className: string;
};

export default function MyDetails({ className }: Props) {
  return (
    <Card className={className}>
      <div className="p-5 flex flex-col w-full gap-5">
        <div className="flex flex-row justify-between w-full items-center">
          <h1>My Details</h1>
          <div>
            <Button text="Add More" />
          </div>
        </div>

        <div>
          <h1>Past Medical History</h1>
        </div>
      </div>
    </Card>
  );
}
