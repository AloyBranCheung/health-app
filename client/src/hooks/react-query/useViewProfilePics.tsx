import { useQuery } from "@tanstack/react-query";
import queryKeys from "./keys";
import withAuthServer from "src/utils/axios";

export default function useViewProfilePics() {
  const fetchProfilePics = async () => {
    try {
      const response = withAuthServer.get(
        `${process.env.REACT_APP_BACKEND_URL}/profilepics/`
      );
      return await response;
    } catch (error) {
      console.error(error);
    }
  };

  return useQuery({
    queryKey: queryKeys.profilepics.getAllProfilePics.queryKey,
    queryFn: fetchProfilePics,
  });
}
