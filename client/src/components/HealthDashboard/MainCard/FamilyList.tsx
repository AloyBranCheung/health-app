import React, { useContext, useState } from "react";
// context
import AuthContext from "../../../context/authContext";
import ModalContext from "../../../context/modalContext";
// components
import Button from "../../UI/Button";
import ViewFamilyProfile from "./ViewFamilyProfile";
import { ModalVisibilityKeys } from "../../../utils/modalVisibilityStrings";

export default function FamilyList() {
  const { user } = useContext(AuthContext);
  const { onVisible, isVisible } = useContext(ModalContext);
  const [mrn, setMrn] = useState("");
  const [familyMember, setFamilyMember] = useState("");

  // sets modal's name/mrn
  const handleModal = (mrn: string, familyMemberName: string) => {
    setMrn(mrn);
    setFamilyMember(familyMemberName);
    onVisible(ModalVisibilityKeys.ViewProfile);
  };

  const list = user.familyMembers.map((member) => {
    return (
      <div
        key={member._id}
        className="h-full w-full bg-white rounded-xl shadow-xl p-5 flex flex-col md:flex-row md:justify-between gap-5"
      >
        <div className="hidden md:flex md:items-center md:justify-center w-full basis-4/12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4825/4825015.png"
            alt="profile-pic"
            className="h-16 w-16"
          />
        </div>
        <div className="w-full">
          <div>
            <h1>
              <strong>Nickname: </strong>
              {member.nickname}
            </h1>
          </div>
          <div>
            <p className="break-all">
              <strong>MRN: </strong>
              {member.mrn}
            </p>
          </div>
        </div>
        <div className="self-center">
          <Button
            onClick={() => {
              handleModal(member.mrn, member.nickname);
            }}
            text="View Profile"
          />
        </div>
      </div>
    );
  });

  return (
    <>
      {list}
      {isVisible === ModalVisibilityKeys.ViewProfile && (
        <ViewFamilyProfile mrn={mrn} familyName={familyMember} />
      )}
    </>
  );
}
