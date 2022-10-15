import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";
import Button from "../../UI/Button";
import ModalContext from "../../../context/modalContext";
import ViewFamilyProfile from "./ViewFamilyProfile";

export default function FamilyList() {
  const { userHealth } = useContext(AuthContext);
  const { onVisible, isVisible } = useContext(ModalContext);
  const [mrn, setMrn] = useState("");
  const [familyMember, setFamilyMember] = useState("");

  // sets modal's name/mrn
  const handleModal = (mrn: string, familyMemberName: string) => {
    setMrn(mrn);
    setFamilyMember(familyMemberName);
    onVisible("viewProfile");
  };

  const list = userHealth.familyMembers.map((member) => {
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
              <strong>Name: </strong>
              {member.name}
            </h1>
          </div>
          <div>
            <p className="break-all">
              <strong>MRN: </strong>
              {member.MRN}
            </p>
          </div>
          <div>
            <p>
              <strong>Primary Concern: </strong>
              {member.primaryIssue}
            </p>
          </div>
        </div>
        <div className="self-center">
          <Button
            onClick={() => {
              handleModal(member.MRN, member.name);
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
      {isVisible === "viewProfile" && (
        <ViewFamilyProfile mrn={mrn} familyName={familyMember} />
      )}
    </>
  );
}
