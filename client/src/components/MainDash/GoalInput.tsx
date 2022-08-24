import React, { useState } from "react";
import Button from "../UI/Button";

type Props = {
  goal: (goal: string) => void;
};

export default function GoalInput({ goal }: Props) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [newGoal, setNewGoal] = useState("");

  const handleClick = () => {
    setIsEmpty(false);
    if (newGoal === "" || newGoal.length === 0) {
      setIsEmpty(true);
      return;
    }
    goal(newGoal);
    setNewGoal("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmpty(false);
    const newGoal = e.target.value;
    setNewGoal(newGoal);
  };

  return (
    <div className="flex flex-row w-full items-center gap-5 py-2">
      <div className="bg-white relative w-full focus-within:border-mainFontColor focus-within:border-solid focus-within:border-2 focus-within:transition-all rounded-lg">
        <input
          value={newGoal}
          onChange={handleChange}
          name="addGoal"
          id="addGoal"
          className="text-sm w-full rounded-lg px-3 outline-none peer placeholder-transparent p-2"
          placeholder=" "
        />
        <label
          className="transition-all absolute text-xs top-2.5 left-3 z-10 -mt-7 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:mt-0 peer-focus:-mt-7 peer-focus:text-mainFontColor"
          htmlFor="addGoal"
        >
          {isEmpty ? (
            <p className="text-red">You can achieve anything but nothing.</p>
          ) : (
            "Shoot for the stars"
          )}
        </label>
      </div>
      <div>
        <Button
          onClick={handleClick}
          text="Add"
          className="py-2 px-4 shadow-xl"
        />
      </div>
    </div>
  );
}
