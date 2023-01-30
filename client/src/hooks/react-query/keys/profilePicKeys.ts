import { createQueryKeys } from "@lukemorales/query-key-factory";

const profilePicKeys = createQueryKeys("profilepics", {
  getAllProfilePics: {
    queryKey: ["getallprofilepics"],
  },
});

export default profilePicKeys;
