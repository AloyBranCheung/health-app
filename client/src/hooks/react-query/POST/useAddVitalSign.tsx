import { useQueryClient } from "@tanstack/react-query";
import { trpc } from "src/utils/trpc";

export default function useAddVitalSign() {
  const queryClient = useQueryClient();

  return trpc.mrn.addVitalSign.useMutation({
    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: [
          ["mrn", "getHealthInformation"],
          {
            input: variables.userid,
            type: "query",
          },
        ],
      });
    },
  });
}
