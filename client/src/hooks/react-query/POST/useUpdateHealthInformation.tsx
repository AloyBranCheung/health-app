import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const updateUserInformationPOST = async (userid: string) => {
  // TODO: data validation
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/${userid}`);
  } catch (error) {
    console.error(error);
  }
};

export default function useUpdateHealthInformation() {
  return useMutation({});
}
