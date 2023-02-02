import { trpc } from "src/utils/trpc";

export default function useAddVitalSign() {
  const utils = trpc.useContext();

  return trpc.mrn.addVitalSign.useMutation({
    onSuccess() {
      utils.mrn.getHealthInformation.invalidate();
    },
  });
}
