import { useContext } from "react";
import AuthContext from "src/context/authContext";
//
import { trpc } from "src/utils/trpc";

export default function useGetAllHealthInformationByUserId() {
  const { user } = useContext(AuthContext);

  return trpc.mrn.getHealthInformation.useQuery(user._id);
}
