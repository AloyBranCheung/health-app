import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import GoalInput from "../UI/GoalInput";

type Props = {
  className?: string;
};

export default function MyGoals({ className }: Props) {
  const [isAdd, setIsAdd] = useState(false);

  const handleAdd = () => {
    setIsAdd(true);
  };

  const handleAddNewGoal = () => {
    setIsAdd(false);
  };

  return (
    <Card className={className}>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <h1>
            <strong className="">My Goals</strong>
          </h1>
          <Button onClick={handleAdd} text="Add another" />
        </div>
        <div className="flex flex-row justify-between">
          {isAdd && <GoalInput addNewGoal={handleAddNewGoal} />}
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
