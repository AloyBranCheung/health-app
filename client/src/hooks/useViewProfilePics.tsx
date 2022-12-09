import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useViewProfilePics() {
  const fetchProfilePics = async () => {
    try {
      const response = axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/profilepics/`
      );
      return await response;
    } catch (error) {
      console.error(error);
    }
  };

  return useQuery({
    queryKey: ["getallprofilepics"],
    queryFn: fetchProfilePics,
  });
}
