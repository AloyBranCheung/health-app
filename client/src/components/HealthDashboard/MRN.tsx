import React, { useState, useContext } from "react";
import ModalContext from "../../context/modalContext";
import AuthContext from "../../context/authContext";
import Button from "../UI/Button";
import CopyClipboard from "./CopyClipboard";
import EyeClosed from "../UI/EyeClosed";
import EyeOpen from "../UI/EyeOpen";
import EditMRN from "./EditMRN"

export default function MRN () {
  const { user, userHealth } = useContext(AuthContext);
  const { isVisible, onVisible } = useContext(ModalContext); 
  const [mrnVisible, setMrnVisible] = useState(false);
  const handleRevealMRN = () => {
    setMrnVisible((prev) => !prev);
  };

  const modalIsVisible = () => {
    onVisible("editMRN");
  }

  return (
    <div className="flex w-full flex-col bg-white rounded-xl shadow-xl p-5 gap-2">
      {isVisible === "editMRN" && <EditMRN /> }
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex gap-2">
          <h1>
            <strong>MRN</strong>
          </h1>
          {mrnVisible
            ? (
           <EyeClosed handleRevealMRN={handleRevealMRN} />
              )
            : (
           <EyeOpen handleRevealMRN={handleRevealMRN} />
              )}
        </div>
        <div>
          <Button onClick={modalIsVisible} text="Edit" />
        </div>
      </div>
      <CopyClipboard isVisible={mrnVisible} />

      <div className="flex flex-col w-full gap-2">
        <div className="text-xs md:text-base flex flex-col w-full gap-2">
          <div>
            <h1>
              <strong>Preferred Pronouns: </strong>{" "}
              {user.preferredPronouns.join(", ")}
            </h1>
            <h1>
              <strong>Preferred Name: </strong>
              {user.preferredName}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full flex-col">
              <h1>
                <strong>Gender: </strong>
                {userHealth.gender}
              </h1>
              <h1>
                <strong>Sex: </strong>
                {userHealth.sex}
              </h1>
              <h1>
                <strong>Blood Group: </strong>
                {userHealth.bloodGroup}
              </h1>
            </div>
            <div className="flex flex-col w-full">
              <h1>
                <strong>Weight: </strong> {userHealth.weight} kg
              </h1>
              <h1>
                <strong>Age: </strong> {userHealth.age} years old
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
