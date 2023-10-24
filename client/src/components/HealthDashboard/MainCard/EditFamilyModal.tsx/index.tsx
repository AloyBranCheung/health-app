import React, { useContext, useState } from "react";
import AuthContext from "../../../../context/authContext";
import Button from "../../../UI/Button";
import EditModal from "../../../UI/EditModal";
import FamilyList from "./FamilyList";
import AddFamilyForm from "./AddFamilyForm";
import withAuthServer from "src/utils/axios";

export default function EditFamilyModal() {
  const {
    user: { familyMembers },
    user,
    setUser,
  } = useContext(AuthContext);
  const [isAddFamily, setIsAddFamily] = useState(false);

  // Remove family Member
  const handleRemove = async (famMemberId: string) => {
    // update state
    const newFamList = familyMembers.filter((famMember) => {
      return famMember._id !== famMemberId;
    });
    setUser({ ...user, familyMembers: newFamList });

    // update DB
    try {
      await withAuthServer.put(
        `${process.env.REACT_APP_BACKEND_URL}/dashboard/updateuser/${user._id}`,
        {
          familyMembers: newFamList,
        }
      );
      console.log("Success");
    } catch (error) {
      console.error(error);
    }
  };

  // Add family member
  const handleAdd = () => {
    setIsAddFamily(true);
  };

  // Render family members list
  const familyMembersList = familyMembers.map((famMember) => {
    return (
      <li
        key={famMember._id}
        className="flex flex-col md:flex-row md:space-between gap-2 md:px-5 items-center rounded-lg bg-white p-2"
      >
        <FamilyList nickname={famMember.nickname} mrn={famMember.mrn} />
        <Button
          onClick={() => {
            handleRemove(famMember._id);
          }}
          text="Remove"
          className="h-10"
        />
      </li>
    );
  });

  return (
    <EditModal
      button={<Button onClick={handleAdd} text="Add" />}
      wrapperId="popupModal"
      headerText="Edit Family List"
    >
      {isAddFamily ? (
        <AddFamilyForm setIsAddFamily={setIsAddFamily} />
      ) : (
        <ul className="flex gap-4 flex-col">{familyMembersList}</ul>
      )}
    </EditModal>
  );
}
