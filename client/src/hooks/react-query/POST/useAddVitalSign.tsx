import { trpc } from "src/utils/trpc";

export default function useAddVitalSign() {
  return trpc.mrn.addVitalSign.useMutation();
}
