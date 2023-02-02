// types/utils
import { trpc, RouterInput } from "src/utils/trpc";

type HealthInformationRouterInput = RouterInput["mrn"]["getHealthInformation"];

export default function useGetAllHealthInformationByUserId(
  input: HealthInformationRouterInput
) {
  return trpc.mrn.getHealthInformation.useQuery(input);
}
