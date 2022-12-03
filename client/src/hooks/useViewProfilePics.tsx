import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useViewProfilePics () {
  const fetchProfilePics = async () => {
    try {
      const response = axios.get(
        "https://random-health-tech.herokuapp.com/api/profilepics/"
      );
      return await response
    } catch (error) {
      console.error(error);
    }
  };

  return useQuery({
    queryKey: ["getallprofilepics"],
    queryFn: fetchProfilePics
  })
}
