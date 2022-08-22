import React, { useState } from "react";
import Button from "./Button";

type Props = {
  addNewGoal: () => void;
};

export default function GoalInput({ addNewGoal }: Props) {
  const [newGoal, setNewGoal] = useState("");

  const handleClick = () => {
    addNewGoal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGoal = e.target.value;
    setNewGoal(newGoal);
  };

  return (
    <div className="flex flex-row w-full items-center gap-5">
      <div className="bg-white relative w-full focus-within:border-mainFontColor focus-within:border-solid focus-within:border-2 focus-within:transition-all rounded-lg">
        <input
          value={newGoal}
          onChange={handleChange}
          name="addGoal"
          id="addGoal"
          className="text-sm w-full rounded-lg px-3 outline-none peer placeholder-transparent"
          placeholder="Add Goal"
        />
        <label
          className="transition-all absolute text-xs top-1 left-3 z-10 -mt-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:mt-0 peer-focus:-mt-6 peer-focus:text-mainFontColor"
          htmlFor="addGoal"
        >
          Add Goal
        </label>
      </div>
      <div>
        <Button onClick={handleClick} text="Add" />
      </div>
    </div>
  );
}
