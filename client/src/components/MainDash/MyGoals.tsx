import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import Card from "../UI/Card";
import GoalInput from "./GoalInput";
import axios from "axios";
import LoadingSpinner from "../UI/LoadingSpinner";

type Props = {
  className?: string;
};

export default function Goals({ className }: Props) {
  const { user, setUser, isLoading } = useContext(AuthContext);

  // add goal
  const addGoal = async (goal: string) => {
    // [{goal, _id}, ...]

    const currArr = user.myGoals;
    try {
      const response = await axios.put(
        `https://random-health-tech.herokuapp.com/api/dashboard/updateuser/${user._id}`,
        {
          myGoals: [...currArr, { goal }],
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete goal
  const handleDelete = async (id: string) => {
    // delete goal in state
    const filteredArr = user.myGoals.filter((goal) => goal._id !== id);
    try {
      const response = await axios.put(
        `https://random-health-tech.herokuapp.com/api/dashboard/updateuser/${user._id}`,
        {
          myGoals: filteredArr,
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // render a list of goals
  const listGoals = user.myGoals.map((goal) => {
    if (goal._id === "" || goal._id.length === 0) {
      return null;
    }

    return (
      <li
        key={goal._id}
        id={goal._id}
        className="flex flex-row justify-between items-center bg-white p-2 rounded-xl shadow-xl w-full"
      >
        <h1 className="break-all">{goal.goal}</h1>
        <button
          onClick={() => {
            handleDelete(goal._id);
          }}
        >
          ✅
        </button>
      </li>
    );
  });

  return (
    <Card className={`${className}`}>
      {isLoading ? (
        <div className="flex h-full items-center justify-center p-5">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="p-5 flex flex-col gap-3 h-full">
          <div className="flex flex-row justify-between mb-2">
            <h1>
              <strong className="">My Goals</strong>
            </h1>
            <div>🥅</div>
          </div>
          <ul className="flex flex-col gap-5 lg:overflow-y-scroll w-full">
            {listGoals}
          </ul>
          <div className="flex flex-row justify-between">
            <GoalInput goal={addGoal} />
          </div>
        </div>
      )}
    </Card>
  );
}
